import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export default function Navbar({handleChange, handleSubmit}) {
    return (
        <div className={styles.navbar}>
        <form onChange={(e) => handleChange(e)}>
        <input placeholder='Ingresa la raza del perro, perra' type='search'/>
            <button type='submit' onClick={handleSubmit}>
            Buscar
            </button>
            <NavLink to="/create" >
                <button>
                    ¡Crea tu perro!
                </button>
            </NavLink>
        </form>
        </div>
    )
};