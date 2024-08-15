"use client";
import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { collection, getDocs, updateDoc, doc, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithGoogle, logout } from './authservice';
import styles from './News.module.css';

interface NewsItem {
  id: string;
  Headline: string;
  Content: string;
  Image: string;
}

const News: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<string>('');
  const [newHeadline, setNewHeadline] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [newPicture, setNewPicture] = useState<string>('');

  useEffect(() => {
    const fetchNews = async () => {
      const querySnapshot = await getDocs(collection(db, 'News'));
      const newsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as NewsItem[];
      setNewsItems(newsData);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error: any) {
      console.error('Error signing in:', error);
      alert('Sign-in failed: ' + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error: any) {
      console.error('Error signing out:', error);
    }
  };

  const handleAddNews = async () => {
    if (!newHeadline || !newContent) return;
    try {
      const docRef = await addDoc(collection(db, 'News'), {
        Headline: newHeadline,
        Content: newContent,
        Image: newPicture,
      });

      setNewsItems(prevItems => [
        ...prevItems,
        { id: docRef.id, Headline: newHeadline, Content: newContent, Image: newPicture },
      ]);

      setNewHeadline('');
      setNewContent('');
      setNewPicture('');
    } catch (error: any) {
      console.error('Error adding news:', error);
    }
  };

  const handleEdit = (id: string, content: string) => {
    setEditing(id);
    setEditContent(content);
  };

  const saveEdit = async (id: string) => {
    try {
      const newsRef = doc(db, 'News', id);
      await updateDoc(newsRef, { content: editContent });
      setNewsItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, Content: editContent } : item
        )
      );
      setEditing(null);
    } catch (error: any) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>News</h2>

      {isAuthenticated ? (
        <>
          <div className={styles.addNewsForm}>
            <input type="text" placeholder="Headline" value={newHeadline} onChange={(e) => setNewHeadline(e.target.value)} className={styles.input} />
            <textarea placeholder="Content" value={newContent} onChange={(e) => setNewContent(e.target.value)} className={styles.textarea} />
            <input type="text" placeholder="Image Link" value={newPicture} onChange={(e) => setNewPicture(e.target.value)} className={styles.input} />
            <button onClick={handleAddNews} className={styles.button}>Add News</button>
          </div>
          <button onClick={handleSignOut} className={`${styles.button} ${styles.signInOutButton}`}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleSignIn} className={`${styles.button} ${styles.signInOutButton}`}>Sign In to Add News</button>
      )}

      <ul className={styles.ul}>
        {newsItems.map(news => (
          <li key={news.id} className={styles.li}>
            <h3 className={styles.h3}>{news.Headline}</h3>
            <img src={news.Image} alt="news image" className={styles.Image} />
            {editing === news.id ? (
              <div>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className={styles.textarea}
                />
                <div className={styles.editingButtons}>
                  <button onClick={() => saveEdit(news.id)} className={styles.button}>
                    Save
                  </button>
                  <button
                    onClick={() => setEditing(null)}
                    className={`${styles.button} ${styles.cancelButton}`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className={styles.p}>{news.Content}</p>
            )}
            {isAuthenticated && editing !== news.id && (
              <button
                onClick={() => handleEdit(news.id, news.Content)}
                className={styles.button}
              >
                Edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;
