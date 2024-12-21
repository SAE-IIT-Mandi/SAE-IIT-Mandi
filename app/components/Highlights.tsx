"use client";
import React, { useEffect, useState } from "react";
import { auth, db, storage } from "./firebase";
import { collection, getDocs, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import { logout } from "./authservice";
import styles from "./Highlights.module.css";
interface NewsItem {
  id: string;
  Headline: string;
  Content: string;
  Image: string;
  News: boolean;
  Date: string;
}

const NewsAndEvents: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<string>("");
  const [editHeadline, setEditHeadline] = useState<string>("");
  const [editImageFile, setEditImageFile] = useState<File | null>(null); 
  const [editImageURL, setEditImageURL] = useState<string>(""); 
  const [newHeadline, setNewHeadline] = useState<string>("");
  const [newContent, setNewContent] = useState<string>("");
  const [newImageFile, setNewImageFile] = useState<File | null>(null); 
  const [newNews, setNewNews] = useState<boolean>(true);

  const fetchItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "News"));
      const data = querySnapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          ...docData,
          Date: docData.Date?.toDate ? docData.Date.toDate() : new Date(docData.Date), // Convert Firestore Timestamp to Date
        };
      });
      data.sort((a, b) => b.Date.getTime() - a.Date.getTime()); // Sort by date
      setItems(data as NewsItem[]);
    } catch (error) {
      console.error("Error fetching news items:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error: any) {
      console.error("Error signing out:", error);
    }
  };

  const handleAddItem = async () => {
    if (!newHeadline || !newContent || !newImageFile) return;

    try {
      const storageRef = ref(storage, `News/${newImageFile.name}`);
      await uploadBytes(storageRef, newImageFile);
      const imageUrl = await getDownloadURL(storageRef);

      const docRef = await addDoc(collection(db, "News"), {
        Headline: newHeadline,
        Content: newContent,
        Image: imageUrl,
        News: newNews,
        Date: new Date().toISOString(),
      });

      setItems((prevItems) => [
        { id: docRef.id, Headline: newHeadline, Content: newContent, Image: imageUrl, News: newNews, Date: new Date().toISOString() },
        ...prevItems,
      ]);

      setNewHeadline("");
      setNewContent("");
      setNewImageFile(null); 
      setNewNews(true);
    } catch (error: any) {
      console.error("Error adding item:", error);
    }
  };

  const handleEdit = (id: string, Content: string, Headline: string, Image: string) => {
    setEditing(id);
    setEditHeadline(Headline);
    setEditContent(Content);
    setEditImageURL(Image);
    setEditImageFile(null); 
  };

  const saveEdit = async (id: string) => {
    try {
      let imageUrl = editImageURL;

      if (editImageFile) {
        const storageRef = ref(storage, `News/${editImageFile.name}`);
        await uploadBytes(storageRef, editImageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      const itemRef = doc(db, "News", id);
      await updateDoc(itemRef, {
        Headline: editHeadline,
        Content: editContent,
        Image: imageUrl,
      });

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, Headline: editHeadline, Content: editContent, Image: imageUrl } : item
        )
      );
      setEditing(null);
    }
    catch (error: any) {
      console.error("Error updating document:", error);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    try {
      await deleteDoc(doc(db, "News", id));
      const imageRef = ref(storage, imageUrl);
      if(imageRef){
        await deleteObject(imageRef);
      }
        

      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
    catch (error: any) {
      console.error("Error deleting document or image:", error);
    }
  };

  const newsItems = items.filter((item) => item.News);
  const eventItems = items.filter((item) => !item.News);

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.eventsSection}>
            <h2 className={styles.sectionTitle}>Events</h2>
            <ul className={styles.ul}>
              {eventItems.map((event) => (
                <li key={event.id} className={styles.li}>
                  <div className={styles.textContainer}>
                    <h2 className={styles.h2}>{event.Headline}</h2>
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
                          type="file"
                          onChange={(e) => setEditImageFile(e.target.files ? e.target.files[0] : null)}
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
                      <>
                        <button
                          onClick={() => handleEdit(event.id, event.Content, event.Headline, event.Image)}
                          className={styles.button}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(event.id, event.Image)}
                          className={`${styles.button} ${styles.deleteButton}`}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                  <img src={event.Image} alt="event image" className={styles.image} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.newsSection}>
            <h2 className={styles.sectionTitle}>News</h2>
            <ul className={styles.ul}>
              {newsItems.map((news) => (
                <li key={news.id} className={styles.li}>
                  <div className={styles.textContainer}>
                    <h2 className={styles.h2}>{news.Headline}</h2>
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
                          type="file"
                          onChange={(e) => setEditImageFile(e.target.files ? e.target.files[0] : null)}
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
                      <>
                        <button
                          onClick={() => handleEdit(news.id, news.Content, news.Headline, news.Image)}
                          className={styles.button}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(news.id, news.Image)}
                          className={`${styles.button} ${styles.deleteButton}`}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                  <img src={news.Image} alt="news image" className={styles.image} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {isAuthenticated && (
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
                type="file"
                onChange={(e) => setNewImageFile(e.target.files ? e.target.files[0] : null)}
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
              <div className={styles.editingButtons}>
                <button onClick={handleAddItem} className={`${styles.button} ${styles.signInOutButton}`}>
                  Add News/Event
                </button>
                <button onClick={handleSignOut} className={`${styles.button} ${styles.signInOutButton}`}>
                  Sign Out
                </button>
              </div>
            </div>
          </>
        ) }
      </div>
    </div>
  );
};

export default NewsAndEvents;
