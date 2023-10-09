import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getByName, getDogs } from '../../redux/actions';
import Cards from '../../components/cards/cards';
import Navbar from '../../components/navbar/navbar';
import styles from './home.module.css';

export default function Home() {

const dispatch = useDispatch();
const allDogs = useSelector((state)=>state.allDogs);

const [pagina, setPagina] = useState(1);
const [input, setInput] = useState(1);

// Filtro con el backend
const [searchString, setSearchString] = useState("");

function handleChange(e){
    e.preventDefault()
    setSearchString(e.target.value)
};

function handleSubmit (e) {
    e.preventDefault()
    setPagina(1)
    setInput(1)
    dispatch(getByName(searchString))
};

console.log(allDogs)

// filtro sobre el esado (front, video repaso Gama)
// const [filtered, setFiltered] = useState(allDogs); // intentar después con dogsCopy. Traer por useSelector

// function handleChange(e){
//     e.preventDefault()
//     setSearchString(e.target.value)
// };
// function handleSubmit(e){
//     e.preventDefault();
//     const filtered = allDogs.filter(dog=> dog.name.includes(searchString));
//     setFiltered(filtered);
// };

useEffect(()=>{
    dispatch(getDogs())
},[dispatch]);

    return (
        <div className={styles.home}>
            <div>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
            <div>
            <Cards
            allDogs={allDogs}
            pagina={pagina}
            setPagina={setPagina}
            input={input}
            setInput={setInput}
            />
            </div>
        </div>
    )
};