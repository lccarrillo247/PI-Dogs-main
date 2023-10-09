import { Link } from 'react-router-dom';
import styles from './card.module.css';

export default function Card({dog}) {

const {id,image,name,height,weight,life_span,Temperaments} = dog;

    return (
        <Link to={`/detail/${id}`}>
        <div className={styles.cardContainer}>
            <h1>{name}</h1>
        <img className={styles.cardImage} src={image} alt={name} />
        <p>Peso: {weight}</p>
        <p>Temperamento: {Temperaments?.map((temp) => temp.name).sort().join(', ')}</p>
        </div>
        </Link>
    )
};