import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getByName, getDogs } from '../../redux/actions';
import Cards from '../../components/cards/cards';
import Navbar from '../../components/navbar/navbar';
import styles from './home.module.css';

export default function Home() {

const dispatch = useDispatch();
const allDogs = useSelector((state)=>state.allDogs);

// Filtro con el backend
const [searchString, setSearchString] = useState("");

function handleChange(e){
    e.preventDefault()
    setSearchString(e.target.value)
};

function handleSubmit (e) {
    e.preventDefault()
    dispatch(getByName(searchString))
}

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
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
            <Cards allDogs={allDogs} />
        </div>
    )
};