"use client";
import React, { useEffect, useState,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, db, storage } from "./firebase";
import { collection, getDocs, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"; 
import { onAuthStateChanged } from "firebase/auth";
import { logout } from "./authservice";
import styles from "./SAETeam.module.css";
import ProfileCard from "./ProfileCard";

const POSITIONS = [
    {
      value: "facultyAdvisor",
      label: "Club Faculty Advisor",
      description: "The guiding force of the SAE Club, the Faculty Advisor provides expert mentorship, ensures alignment with academic and institutional goals, and supports the club's activities at all levels.",
      image: "path/to/facultyAdvisorPhoto.jpg",
    },
    {
      value: "mentors",
      label: "Mentors",
      description: "Experienced 4th and 3rd-year students act as mentors, leveraging their technical expertise and past experiences to guide junior members in projects and competitions. They play a crucial role in skill development and team coordination.",
      image: "path/to/mentorPhoto.jpg",
    },
    {
      value: "managers",
      label: "Club Coordinator and Co-Coordinator",
      description: "The Club Coordinator leads the club's operations, ensuring smooth execution of projects, events, and competitions. The Co-Coordinator assists in managing responsibilities, fostering collaboration, and maintaining organizational efficiency.",
      image: "path/to/coordinatorPhoto.jpg",
    },
    {
      value: "projectLead",
      label: "Project Lead",
      description: "Leads the project efforts, managing tasks and ensuring project goals are met efficiently.",
      image: "path/to/projectLeadPhoto.jpg",
    },
    {
      value: "projectCoLead",
      label: "Project Co-Lead",
      description: "Assists the Project Lead in managing the project and overseeing team activities.",
      image: "path/to/projectCoLeadPhoto.jpg",
    },
    {
      value: "technicalTeam",
      label: "Technical Team",
      description: "Handles the design and development of key components of the project.",
      image: "path/to/technicalTeamPhoto.jpg",
    },
    {
      value: "webDev",
      label: "Web Dev",
      description: "Manages the club's online presence, including the website and digital tools.",
      image: "path/to/webDevPhoto.jpg",
    },
    {
      value: "sponsorship",
      label: "Sponsorship",
      description: "Secures funding and resources by building partnerships with sponsors.",
      image: "path/to/sponsorshipPhoto.jpg",
    },
    {
      value: "videoEditing",
      label: "Video Editing and Videography",
      description: "Creates and edits visual content to highlight the club's achievements and activities.",
      image: "path/to/videoEditingPhoto.jpg",
    },
    {
      value: "designSocialMedia",
      label: "Design and Social Media",
      description: "Manages the club's branding, design, and social media outreach.",
      image: "path/to/designSocialMediaPhoto.jpg",
    }
];

interface Member {
  id: string;
  Name: string;
  Image: string;
  Linkedin: string;
  Instagram: string;
  Position: string;
}

const SAETeam: React.FC = () => {
  const [items, setItems] = useState<Member[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const [editing, setEditing] = useState<string | null>(null);
  const [editName, setEditName] = useState<string>("");
  const [editPosition, setEditPosition] = useState<string>("");
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [editImageURL, setEditImageURL] = useState<string>(""); 
  const [editLinkedin, setEditLinkedin] = useState<string>("");
  const [editInstagram, setEditInstagram] = useState<string>("");
  
  const [newName, setNewName] = useState<string>("");
  const [newImage, setNewImage] = useState<File | null>(null); 
  const [newLinkedin, setNewLinkedin] = useState<string>("");
  const [newInstagram, setNewInstagram] = useState<string>("");
  const [newPosition, setNewPosition] = useState<string>("");

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Members"));
        const data = querySnapshot.docs.map((doc) => ({ 
          id: doc.id, 
          ...doc.data() 
        })) as Member[];
        setItems(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);


  useEffect(() => {
    const initialDelay = 5000;

    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentSectionIndex((prev) => (prev + 1) % 10);
      }, 6000); 
      return () => {
        clearInterval(interval);
      };
    }, initialDelay);
    return () => {
      clearTimeout(delayTimeout);
    };
  }, []);

const handleSectionScroll = () => {
  if (!isScrolling && currentSectionIndex < POSITIONS.length - 1) {
    setIsScrolling(true);
    setCurrentSectionIndex(prev => prev + 1);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 500); 
  }
};

const handleReverseScroll = () => {
  if (!isScrolling && currentSectionIndex > 0) {
    setIsScrolling(true);
    setCurrentSectionIndex(prev => prev - 1);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 500); 
  }
};

const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
  e.preventDefault();
  const scrollThreshold = 50;
  if (!editing && !isScrolling) {
    if (Math.abs(e.deltaY) < scrollThreshold) return;
    if (e.deltaY > 0) {
      handleSectionScroll();
    } else if (e.deltaY < 0) {
      handleReverseScroll();
    }
  }
};

useEffect(() => {
  const mainContainer = document.getElementById('scroll-container');
  const preventScroll = (e: WheelEvent) => {
    if (mainContainer?.contains(e.target as Node)) {
      e.preventDefault();
    }
  };
  window.addEventListener('wheel', preventScroll, { passive: false });
  return () => {
    window.removeEventListener('wheel', preventScroll);
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
  };
}, []);

  const handleSignOut = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
    } catch (error: any) {
      console.error("Error signing out:", error);
    }
  };

  const handleAddItem = async () => {
    if (!newName || !newImage || !newPosition) return;

    try {
      const storageRef = ref(storage, `Members/${newImage.name}`);
      await uploadBytes(storageRef, newImage);
      const imageUrl = await getDownloadURL(storageRef);

      const docRef = await addDoc(collection(db, "Members"), {
        Name: newName,
        Image: imageUrl,
        Linkedin: newLinkedin,
        Instagram: newInstagram,
        Position: newPosition,
      });

      setItems((prevItems) => [
        ...prevItems,
        { 
          id: docRef.id, 
          Name: newName, 
          Image: imageUrl, 
          Linkedin: newLinkedin, 
          Instagram: newInstagram, 
          Position: newPosition 
        },
      ]);

      setNewName("");
      setNewImage(null);
      setNewLinkedin("");
      setNewInstagram("");
      setNewPosition("");
    } catch (error: any) {
      console.error("Error adding item:", error);
    }
  };

  const handleEdit = (
    id: string, 
    Name: string, 
    Image: string, 
    Linkedin: string, 
    Instagram: string, 
    Position: string
  ) => {
    setEditing(id);
    setEditName(Name);
    setEditImageURL(Image); 
    setEditLinkedin(Linkedin);
    setEditInstagram(Instagram);
    setEditPosition(Position);
    setEditImageFile(null); 
  };

  const saveEdit = async (id: string) => {
    try {
      let imageUrl = editImageURL; 

      if (editImageFile) {
        const storageRef = ref(storage, `Members/${editImageFile.name}`);
        await uploadBytes(storageRef, editImageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      const itemRef = doc(db, "Members", id);
      await updateDoc(itemRef, {
        Name: editName,
        Image: imageUrl,
        Linkedin: editLinkedin,
        Instagram: editInstagram,
        Position: editPosition,
      });

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? { 
                ...item, 
                Name: editName, 
                Image: imageUrl, 
                Linkedin: editLinkedin, 
                Instagram: editInstagram, 
                Position: editPosition 
              }
            : item
        )
      );
      
      setEditing(null);
    } catch (error: any) {
      console.error("Error updating document:", error);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    try {
      const itemRef = doc(db, "Members", id);
      await deleteDoc(itemRef); 

      const imageRef = ref(storage, imageUrl);
      if(imageRef){
        await deleteObject(imageRef);
      }

      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } 
    catch (error: any) {
      console.error("Error deleting member:", error);
    }
  };
  

  const sectionVariants = {
    initial: { 
      opacity: 0, 
      y: 50 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { 
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="relative"> 
    <div className={styles.navigationContainer}>
      {POSITIONS.map((position, index) => (
        <button
          key={index}
          onClick={() => setCurrentSectionIndex(index)}
          className={`${styles.navButton} ${index === currentSectionIndex ? styles.active : ''}`}
          aria-label={`Go to section ${position.label}`}
        />
      ))}
    </div>
    <div 
    id="scroll-container"
      onWheel={handleWheel}
      className="maiDiv overflow-hidden min-h-screen"
    >
        <AnimatePresence mode="wait">
          {POSITIONS.map((positionGroup, index) => {
            if (index !== currentSectionIndex) return null;

            return (
              <motion.div 
                key={positionGroup.value}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={sectionVariants}
                className="min-h-screen flex flex-col justify-center items-center p-4"
              >
                <div className={styles.header}>
                  <div className={styles.headerTitle}>
                    <motion.h1 
                      className={styles.sectionTitle}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {positionGroup.label}
                    </motion.h1>
                  </div>
                  <div className={styles.headerDescription}>
                    <motion.p 
                      className={styles.sectionDescription}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {positionGroup.description}
                    </motion.p>
                  </div>
                </div>

                <motion.section 
                  className={`${styles.profile} flex flex-wrap justify-center gap-4`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {items
                    .filter((member) => member.Position === positionGroup.value)
                    .map((member, memberIndex) => (
                      <motion.div 
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: memberIndex * 0.2 }}
                      >
                        {editing === member.id ? (
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <input
                              type="text"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              className={styles.input}
                              placeholder="Name"
                            />
                            <input
                              type="file"
                              onChange={(e) => setEditImageFile(e.target.files ? e.target.files[0] : null)}
                              className={styles.input}
                            />
                            <select
                              value={editPosition}
                              onChange={(e) => setEditPosition(e.target.value)}
                              className={styles.input}
                            >
                              {POSITIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <input
                              type="text"
                              placeholder="LinkedIn URL"
                              value={newLinkedin}
                              onChange={(e) => setNewLinkedin(e.target.value)}
                              className={styles.input}
                            />
                            <input
                              type="text"
                              placeholder="Instagram URL"
                              value={newInstagram}
                              onChange={(e) => setNewInstagram(e.target.value)}
                              className={styles.input}
                            />
                            <div className="flex gap-2 mt-2">
                              <button 
                                onClick={() => saveEdit(member.id)} 
                                className={styles.button}
                              >
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
                          <div>
                            <ProfileCard
                              name={member.Name}
                              imageSrc={member.Image}
                              linkedinUrl={member.Linkedin}
                              instagramUrl={member.Instagram}
                              position={member.Position}
                            />
                            {isAuthenticated && (
                              <div className="flex justify-center gap-2 mt-2">
                                <button
                                  onClick={() => handleEdit(
                                    member.id, 
                                    member.Name, 
                                    member.Image, 
                                    member.Linkedin, 
                                    member.Instagram, 
                                    member.Position
                                  )}
                                  className={styles.button}
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(member.id, member.Image)}
                                  className={`${styles.button} ${styles.deleteButton}`}
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                        </div>
                      )}
                    </motion.div>
                  ))}
              </motion.section>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>

  {isAuthenticated && (
        <div className={`${styles.container} fixed bottom-4 left-1/2 transform -translate-x-1/2`}>
          <div className={`${styles.addItemForm} max-w-md mx-auto`}>
            <input
              type="text"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className={styles.input}
            />
            <input
              type="file"
              onChange={(e) => setNewImage(e.target.files ? e.target.files[0] : null)}
              className={styles.input}
            />
            <select
              value={newPosition}
              onChange={(e) => setNewPosition(e.target.value)}
              className={styles.input}
            >
              <option value="">Select Position</option>
              {POSITIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Linkedin URL"
              value={newLinkedin}
              onChange={(e) => setNewLinkedin(e.target.value)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Instagram URL"
              value={newInstagram}
              onChange={(e) => setNewInstagram(e.target.value)}
              className={styles.input}
            />
            <div className={styles.editingButtons}>
              <button 
                onClick={handleAddItem} 
                className={`${styles.button} ${styles.signInOutButton}`}
                disabled={!newName || !newImage || !newPosition}
              >
                Add Member
              </button>
              <button 
                onClick={handleSignOut} 
                className={`${styles.button} ${styles.signInOutButton}`}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default SAETeam;