import { useState } from 'react';
import Card from '../card/card';
import styles from './cards.module.css';
import Pagination from '../pagination/pagination';

export default function Cards({allDogs, pagina, setPagina, input, setInput}) {

    //Aquí iba setPagina
    const [porPagina, setPorPagina] = useState(8);

    const maximo = Math.ceil(allDogs.length / porPagina);
    const dogList = allDogs;

    return (
        <div className={styles.cardsContainer}>
        {dogList?.slice(
            (pagina -1) * porPagina,
            (pagina - 1) * porPagina + porPagina
        ).map((dog) => (
            <Card dog={dog} key={dog.id} />
        ))}
        <Pagination
        pagina={pagina}
        setPagina={setPagina}
        maximo={maximo}
        input={input}
        setInput={setInput}
        />
        </div>
    )
};