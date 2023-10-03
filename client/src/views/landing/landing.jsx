import { NavLink } from 'react-router-dom';
import styles from './landing.module.css';

export default function Landing() {
    return (
        <div className={styles.landing}>
            <h1>¡Bienvenido!</h1>
        <NavLink to="/home">
            <button>Ingresar</button>
        </NavLink>
        </div>
    )
};