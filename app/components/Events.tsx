"use client";
import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { collection, getDocs, updateDoc, doc, addDoc, Timestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithGoogle, logout } from './authservice';
import styles from './Events.module.css';

interface EventsItem {
  id: string;
  Headline: string;
  Content: string;
  Date: Timestamp;
  Venue: string;
  Picture: string;
}

const Events: React.FC = () => {
  const [eventsItems, setEventsItems] = useState<EventsItem[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<string>('');
  const [newHeadline, setNewHeadline] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [newPicture, setNewPicture] = useState<string>('');
  const [newTime, setNewTime] = useState<string>(new Date().toISOString().slice(0, 16)); // Initial value as ISO string
  const [newVenue, setNewVenue] = useState<string>('');

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, 'Events'));
      const eventsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as EventsItem[];
      setEventsItems(eventsData);
    };
    fetchEvents();
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

  const handleAddEvents = async () => {
    if (!newHeadline || !newContent) return;

    const date = Timestamp.fromDate(new Date(newTime)); // Convert string to Timestamp
    try {
      const docRef = await addDoc(collection(db, 'Events'), {
        Headline: newHeadline,
        Content: newContent,
        Picture: newPicture,
        Date: date,
        Venue: newVenue,
      });

      setEventsItems(prevItems => [
        ...prevItems,
        { id: docRef.id, Headline: newHeadline, Content: newContent, Picture: newPicture, Date: date, Venue: newVenue},
      ]);

      setNewHeadline('');
      setNewContent('');
      setNewPicture('');
      setNewTime(new Date().toISOString().slice(0, 16)); // Reset to current date and time
      setNewVenue('');
    } catch (error: any) {
      console.error('Error adding events:', error);
    }
  };

  const handleEdit = (id: string, Content: string) => {
    setEditing(id);
    setEditContent(Content);
  };

  const saveEdit = async (id: string) => {
    try {
      const eventsRef = doc(db, 'Events', id);
      await updateDoc(eventsRef, { Content: editContent });
      setEventsItems(prevItems =>
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
      <h2 className={styles.h2}>Events</h2>

      {isAuthenticated ? (
        <>
          <div className={styles.addEventsForm}>
            <input type="text" placeholder="Headline" value={newHeadline} onChange={(e) => setNewHeadline(e.target.value)} className={styles.input} />
            <textarea placeholder="Content" value={newContent} onChange={(e) => setNewContent(e.target.value)} className={styles.textarea} />
            <input type="text" placeholder="Image Link" value={newPicture} onChange={(e) => setNewPicture(e.target.value)} className={styles.input} />
            <input type="text" placeholder="Venue" value={newVenue} onChange={(e) => setNewVenue(e.target.value)} className={styles.input} />
            <input type="datetime-local" placeholder="Date and Time" value={newTime} onChange={(e) => setNewTime(e.target.value)} className={styles.input} />
            <button onClick={handleAddEvents} className={styles.button}>Add Events</button>
          </div>
          <button onClick={handleSignOut} className={`${styles.button} ${styles.signInOutButton}`}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleSignIn} className={`${styles.button} ${styles.signInOutButton}`}>Sign In to Add Events</button>
      )}

      <ul className={styles.ul}>
        {eventsItems.map(events => (
          <li key={events.id} className={styles.li}>
            <h3 className={styles.h3}>{events.Headline}</h3>
            <img src={events.Picture} alt="events image" className={styles.Image} />
            <h3 className={styles.h3}>{events.Venue}</h3>
            {/* Display formatted date */}
            <h3 className={styles.h3}>{events.Date.toDate().toLocaleString()}</h3>
            {editing === events.id ? (
              <div>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className={styles.textarea}
                />
                <div className={styles.editingButtons}>
                  <button onClick={() => saveEdit(events.id)} className={styles.button}>
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
              <p className={styles.p}>{events.Content}</p>
            )}
            {isAuthenticated && editing !== events.id && (
              <button
                onClick={() => handleEdit(events.id, events.Content)}
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

export default Events;
