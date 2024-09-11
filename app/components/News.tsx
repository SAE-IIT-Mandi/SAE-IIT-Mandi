"use client";
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { collection, getDocs, updateDoc, doc, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithGoogle, logout } from "./authservice";
import styles from "./News.module.css";

interface NewsItem {
  id: string;
  Headline: string;
  Content: string;
  Image: string;
  News: boolean;
}

const NewsAndEvents: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<string>("");
  const [editHeadline, setEditHeadline] = useState<string>("");
  const [editPicture, setEditPicture] = useState<string>("");
  const [newHeadline, setNewHeadline] = useState<string>("");
  const [newContent, setNewContent] = useState<string>("");
  const [newPicture, setNewPicture] = useState<string>("");
  const [newNews, setNewNews] = useState<boolean>(true);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "News"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as NewsItem[];
      setItems(data);
    };
    fetchItems();
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
      console.error("Error signing in:", error);
      alert("Sign-in failed: " + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error: any) {
      console.error("Error signing out:", error);
    }
  };

  const handleAddItem = async () => {
    if (!newHeadline || !newContent) return;
    try {
      const docRef = await addDoc(collection(db, "News"), {
        Headline: newHeadline,
        Content: newContent,
        Image: newPicture,
        News: newNews,
      });

      setItems((prevItems) => [
        ...prevItems,
        { id: docRef.id, Headline: newHeadline, Content: newContent, Image: newPicture, News: newNews },
      ]);

      setNewHeadline("");
      setNewContent("");
      setNewPicture("");
      setNewNews(true);
    } catch (error: any) {
      console.error("Error adding item:", error);
    }
  };

  const handleEdit = (id: string, Content: string, Headline: string, Image: string) => {
    setEditing(id);
    setEditHeadline(Headline);
    setEditContent(Content);
    setEditPicture(Image);
  };

  const saveEdit = async (id: string) => {
    try {
      const itemRef = doc(db, "News", id);
      await updateDoc(itemRef, {
        Headline: editHeadline,
        Content: editContent,
        Image: editPicture
      });
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, Headline: editHeadline, Content: editContent, Image: editPicture } : item
        )
      );
      setEditing(null);
    } catch (error: any) {
      console.error("Error updating document:", error);
    }
  };

  const newsItems = items.filter((item) => item.News);
  const eventItems = items.filter((item) => !item.News);

  return (
    <div>
      {/* Events Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.eventsSection}>
            <h3 className={styles.sectionTitle}>Events</h3>
            <ul className={styles.ul}>
              {eventItems.map((event) => (
                <li key={event.id} className={styles.li}>
                  <div className={styles.textContainer}>
                    <h3 className={styles.h3}>{event.Headline}</h3>
                    <p className={styles.p}>{event.Content}</p>
                    {editing === event.id ? (
                      <div>
                        <input
                          type="text"
                          value={editHeadline}
                          onChange={(e) => setEditHeadline(e.target.value)}
                          className={styles.input}
                        />
                        <textarea
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          className={styles.textarea}
                        />
                        <input
                          type="text"
                          value={editPicture}
                          onChange={(e) => setEditPicture(e.target.value)}
                          className={styles.input}
                        />
                        <div className={styles.editingButtons}>
                          <button onClick={() => saveEdit(event.id)} className={styles.button}>
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
                      <p className={styles.p}>{event.Content}</p>
                    )}
                    {isAuthenticated && editing !== event.id && (
                      <button
                        onClick={() => handleEdit(event.id, event.Content, event.Headline, event.Image)}
                        className={styles.button}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  <img src={event.Image} alt="event image" className={styles.image} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.newsSection}>
            <h3 className={styles.sectionTitle}>News</h3>
            <ul className={styles.ul}>
              {newsItems.map((news) => (
                <li key={news.id} className={styles.li}>
                  <div className={styles.textContainer}>
                    <h3 className={styles.h3}>{news.Headline}</h3>
                    {editing === news.id ? (
                      <div>
                        <input
                          type="text"
                          value={editHeadline}
                          onChange={(e) => setEditHeadline(e.target.value)}
                          className={styles.input}
                        />
                        <textarea
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          className={styles.textarea}
                        />
                        <input
                          type="text"
                          value={editPicture}
                          onChange={(e) => setEditPicture(e.target.value)}
                          className={styles.input}
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
                        onClick={() => handleEdit(news.id, news.Content, news.Headline, news.Image)}
                        className={styles.button}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  <img src={news.Image} alt="news image" className={styles.image} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sign-in to Add News or Event */}
        <div className={styles.container}>
          {isAuthenticated ? (
            <>
              <div className={styles.addItemForm}>
                <input
                  type="text"
                  placeholder="Headline"
                  value={newHeadline}
                  onChange={(e) => setNewHeadline(e.target.value)}
                  className={styles.input}
                />
                <textarea
                  placeholder="Content"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className={styles.textarea}
                />
                <input
                  type="text"
                  placeholder="Image Link"
                  value={newPicture}
                  onChange={(e) => setNewPicture(e.target.value)}
                  className={styles.input}
                />
                <label>
                  <input
                    type="checkbox"
                    checked={newNews}
                    onChange={(e) => setNewNews(e.target.checked)}
                  />
                  Is this news?
                </label>
                <button onClick={handleAddItem} className={styles.button}>
                  Add News/Event
                </button>
              </div>
              <button onClick={handleSignOut} className={`${styles.button} ${styles.signInOutButton}`}>
                Sign Out
              </button>
            </>
          ) : (
            <button onClick={handleSignIn} className={`${styles.button} ${styles.signInOutButton}`}>
              Sign In to Add Event
            </button>
          )}
        </div>
    </div>
  );
};

export default NewsAndEvents;
