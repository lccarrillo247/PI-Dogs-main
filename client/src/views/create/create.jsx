import Form from '../../components/form/form';
import styles from './create.module.css';
import { NavLink } from 'react-router-dom';

export default function Create() {
    return (
        <div className={styles.create}>
                        <div className={styles.createNavbar}>
                <NavLink to="/home" >
                    <button className={styles.createButtonBack}>
                    Regresar
                    </button>
                </NavLink> 
            </div>
            <div className={styles.formContainer}>
            <Form />
            </div>
        </div>
    )
};