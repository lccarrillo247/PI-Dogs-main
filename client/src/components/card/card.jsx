import styles from './card.module.css';

export default function Card({dog}) {

console.log(dog);

const {id,image,name,height,weight,life_span,temperament} = dog;

    return (
        <div className={styles.cardContainer}>
            <h1>{name}</h1>
        <img className={styles.cardImage} src={image} alt={name} />
        <p>Weight: {weight}</p>
        <p>Temperament: {temperament}</p>
        </div>
    )
};