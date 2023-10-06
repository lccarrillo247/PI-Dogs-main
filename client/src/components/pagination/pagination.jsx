import { useState } from 'react';
import styles from './pagination.module.css';

export default function Pagination({pagina, setPagina, maximo, input, setInput}) {

const prevPage = () => {
    setInput (parseInt(input) -1);
    setPagina (parseInt(pagina) -1);
};

const nextPage = () => {
    setInput (parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
};

const onKeyDown = e => {
    if (e.keyCode == 13) {
    setPagina (parseInt(e.target.value))
    if (
    parseInt(e.target.value < 1) ||
    parseInt(e.target.value) > Math.ceil (maximo) ||
    isNaN(parseInt(e.target.value))
    ) {
        setPagina(1);
        setInput(1);
    } else {
    setPagina(parseInt(e.target.value));
    }
}
};

const onChange = (e) => {
    setInput(e.target.value);
}

    return (
        <div>
        <button className={styles.pagButton} disabled={pagina < 2} onClick={prevPage}>anterior</button>
        <input 
        onChange={(e) => onChange(e)}
        onKeyDown={e => onKeyDown(e)} 
        type="text" 
        name="page" 
        autoComplete='off' 
        value={input} />
        <p> de {maximo} </p>
        <button className={styles.pagButton} disabled={pagina >= maximo} onClick={nextPage}>siguiente</button>
        </div>
    )
}

// investigar opción SVG para diseño de botones