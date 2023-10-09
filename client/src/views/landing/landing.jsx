import { NavLink } from 'react-router-dom';
import styles from './landing.module.css';

export default function Landing() {
    return (
        <div className={styles.landingBackground}>
            <div className={styles.landingContainer}>
            <h1 className={styles.landingTitle}>¡Bienvenido!</h1>
            <h4 className={styles.landingDescription}>Este es mi PI de Dogs para el curso Full Stack de Henry. ¡Espero te guste!</h4>
            <div>
        <NavLink to="/home">
            <button className={styles.landingButton}>¡Ingresar ahora!</button>
        </NavLink>
            </div>
            </div>
        </div>
    )
};