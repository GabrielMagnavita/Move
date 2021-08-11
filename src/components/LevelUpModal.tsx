import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/Components/LevelUpModal.module.css';

export function LevelUpModal () {
    const {level } = useContext(challengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button 
                type="button"
                >
                    <img src='/icons/close.svg' alt="Fechar modal" />
                </button>

            </div>
        </div>
        
    )
}