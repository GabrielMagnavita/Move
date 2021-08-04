
import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/Components/Profile.module.css';

export function Profile() {
    const { level } = useContext(challengesContext)
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/GabrielMagnavita.png" alt="Gabriel Magnavita" />
            <div>
                <strong>Gabriel Magnavita</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}</p>
            </div>
        </div>
    );
}