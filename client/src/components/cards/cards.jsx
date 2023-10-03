import Card from '../card/card';
import styles from './cards.module.css';

export default function Cards({allDogs}) {
    const dogList = allDogs;

    return (
        <div className={styles.cardsContainer}>
        {dogList?.map((dog) => (
            <Card dog={dog} />
        ))}
        </div>
    )
};