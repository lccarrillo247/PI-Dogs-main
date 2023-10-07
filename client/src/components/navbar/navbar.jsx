import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTemps, sortByName, sortByWeight, filterByOrigin } from '../../redux/actions';
import { useEffect } from 'react';

export default function Navbar({handleChange, handleSubmit}) {

    const dispatch = useDispatch();
    const temps = useSelector((state) => state.temps);

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

    return (
        <div className={styles.navbar}>
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
            // onChange={""}
            >
            {temps?.map((temp) => (
                <option key={temp.id} value={temp.name}>
                    {temp.name}
                </option>
            ))}
            </select>
        </div>
        <div>
            <select
            placeholder='Filtrar por origen' onChange={handleFilterOrigin}>
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
            <button>
                Filtrar
            </button>
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
            <button type="submit">
                Ordenar
            </button>

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
            <button>
                Ordenar
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