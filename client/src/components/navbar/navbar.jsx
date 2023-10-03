import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <h1>Navbar</h1>
        <input placeholder='Ingresa la raza del perro, perra'/>
        <button>Buscar</button>
        </div>
    )
};