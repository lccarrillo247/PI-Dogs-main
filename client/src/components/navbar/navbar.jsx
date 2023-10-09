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

    console.log(tempFilter)

    return (
        <div className={styles.navbar}>
        <div>
            <NavLink to="/" >
                <button>
                    Inicio
                </button>
            </NavLink>
        </div>
        <div>
        <form onChange={(e) => handleChange(e)}>
        <input placeholder='Ingresa la raza del perro' type='search'/>
            <button type='submit' onClick={handleSubmit}>
            Buscar
            </button>
        </form>
        </div>
        <div>
            <select
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
            <button onClick={handleSubmitFT}>Filtrar</button>
        </div>
        <div>
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
        <div>
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
        <div>

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