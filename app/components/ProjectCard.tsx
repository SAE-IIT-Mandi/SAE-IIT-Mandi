import React from 'react';
import styles from './ProjectCard.module.css';

interface MyComponentProps {
    src: string;
    name: string;
    writeup: string;
}

const Project_card: React.FC<MyComponentProps> = ({ src, name, writeup }) => {
    return (
        <div className={styles.project_item} style={{ backgroundImage: `url(${src})` }}>
            <div className={styles.project_name}>
                <h2>{name}</h2>
            </div>
            <div className={styles.content}>
                <p>{writeup}</p>
            </div>
        </div>
    );
};

export default Project_card;
