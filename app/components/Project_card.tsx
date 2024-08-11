import React from 'react';
import Image from 'next/image';
import styles from './Spon.module.css';

interface MyComponentProps {
    src: string;
    name: string;
    writeup: string;
  }

const Project_card: React.FC<MyComponentProps> = ({src,name, writeup} ) => {
    return (
        <div>
            <div className={styles.project_item}>
                <Image src={src} alt="Project Image" width={900} height={900}/>
                <div className={styles.project_name}>
                {name}
                <div className={styles.content}>
                <p>
                    {writeup}
                </p>
                </div>
                </div>
            </div>
        </div>
        
    )

};

export default Project_card;