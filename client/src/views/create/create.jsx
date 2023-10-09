import Form from '../../components/form/form';
import styles from './create.module.css';
import { NavLink } from 'react-router-dom';

export default function Create() {
    return (
        <div className={styles.create}>
                        <div>
                <NavLink to="/home" >
                    <button>
                    Regresar
                    </button>
                </NavLink> 
            </div>
            <h1>Create</h1>
            <Form />
        </div>
    )
};