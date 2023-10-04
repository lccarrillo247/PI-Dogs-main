import Form from '../../components/form/form';
import styles from './create.module.css';

export default function Create() {
    return (
        <div className={styles.create}>
            <h1>Create</h1>
            <Form />
        </div>
    )
};