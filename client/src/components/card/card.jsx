import { Link } from 'react-router-dom';
import styles from './card.module.css';

export default function Card({dog}) {

const {id,image,name,height,weight,life_span,Temperaments} = dog;

    return (
        <div className={styles.cardContainer}>
            <Link to={`/detail/${id}`}>
        <img className={styles.cardImage} src={image} alt={name} />
        </Link>
        <div className={styles.cardNameContainer}>
        <h1 className={styles.cardName}>{name}</h1>
        </div>
        <p className={styles.cardWeight}>Peso (en Kg): {weight}</p>
        <p className={styles.cardTemps}>{Temperaments?.map((temp) => temp.name).sort().join(', ')}</p>
        </div>
    )
};