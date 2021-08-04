import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/Components/ChallengeBox.module.css';

export function ChallengeBox () {   
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(challengesContext);
    const { resetCountdown } = useContext(CountdownContext)


    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }
    
    function handleFailedSucceeded() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>
                    
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleFailedSucceeded}
                        >
                            Falhei
                        </button>

                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>

                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios
                    </p>
                </div> 
            )}
        </div>
    )
}