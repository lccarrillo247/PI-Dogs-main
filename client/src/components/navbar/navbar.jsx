import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, getTemps, sortByName, sortByWeight, filterByOrigin, filterByTemp } from '../../redux/actions';
import { useEffect, useState } from 'react';

export default function Navbar({handleChange, handleSubmit}) {

    const dispatch = useDispatch();
    const temps = useSelector((state) => state.temps);

    const [tempFilter, setTempFilter] = useState({
        tempArray: [],
    })

    useEffect( async () => {
        dispatch(getTemps())
    }, [])

    function handleOrderName(e) {
        dispatch(sortByName(e.target.value));
    }

    function handleOrderWeight(e) {
        dispatch(sortByWeight(e.target.value));
    }

    function handleFilterOrigin(e) {
        dispatch(filterByOrigin(e.target.value));
    }

    function handleFilterTemps(e) {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
        option.value)
        setTempFilter({
            ...tempFilter,
            tempArray: selectedOptions,
        })
    }
    
    function handleSubmitFT() {
        dispatch(filterByTemp(tempFilter.tempArray));
    }

    function handleReset() {
        dispatch(getDogs());
    }

    // console.log(tempFilter)

    return (
        <div className={styles.navbar}>
        <div>
            <NavLink to="/" >
                <button>
                    Inicio
                </button>
            </NavLink>
        </div>
        <form onChange={(e) => handleChange(e)}>
        <div className={styles.searchContainer}>
            <label className={styles.searchLabel}>Busca el perro por raza:</label>
        <input className={styles.searchInput}placeholder='Ingresa la raza del perro' type='search'/>
            <button type='submit' onClick={handleSubmit}>
            Buscar
            </button>
        </div>
        </form>
        <div>
            <div className={styles.searchContainer}>
        <label className={styles.filterLabel}>Filtra por temperamento:</label>
            </div>
            <div className={styles.tempFilterContainer}>
            <select className={styles.navbarFilterTemps}
            multiple
            placeholder='Filtrar por temperamento'
            onChange={handleFilterTemps}
            >
                <option>Todos</option>
            {temps?.map((temp) => (
                <option key={temp.id} value={temp.name}>
                    {temp.name}
                </option>
            ))}
            </select>
            <button className={styles.tempFilterButton} onClick={handleSubmitFT}>Filtrar</button>
            </div>
        </div>
        <div className={styles.searchContainer}>
            <label className={styles.filterLabel}>Filtra por origen:</label>
            <select
            placeholder='Filtrar por origen'
            onChange={handleFilterOrigin}
            >
                <option key='Todos' value='Todos'>
                    Todos
                </option>
                <option key='API' value='API'>
                    API
                </option>
                <option key='Base de datos' value='Base de datos'>
                    Base de datos
                </option>
            </select>
            {/* <button>Filtrar</button> */}
        </div>
        <div className={styles.searchContainer}>
        <label className={styles.filterLabel}>Ordena por raza:</label>
            <select
            placeholder='Ordenar por raza' onChange={handleOrderName}
            >
            {["Ascendente", "Descendente"].map(order => (
                <option key={order} value={order}>
                    {order}
                </option>
            ))}
            </select>
            {/* <button>Ordenar</button> */}
        </div>
        <div className={styles.searchContainer}>
        <label className={styles.filterLabel}>Ordena por peso:</label>
            <select
            placeholder='Ordenar por peso' onChange={handleOrderWeight}
            >
            {["Ascendente", "Descendente"].map(order => (
                <option key={order} value={order}>
                    {order}
                </option>
            ))}
            </select>
            {/* <button>Ordenar</button> */}

        </div>
        <div>
            <button onClick={handleReset}>
                Reiniciar filtros
            </button>
        </div>
        <div>
            <NavLink to="/create" >
                <button>
                    ¡Crea tu perro!
                </button>
            </NavLink>
        </div>
        </div>
    )
};