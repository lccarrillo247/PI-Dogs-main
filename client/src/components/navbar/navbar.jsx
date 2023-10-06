import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { useDispatch } from 'react-redux';
import { sortByName, sortByWeight } from '../../redux/actions';

export default function Navbar({handleChange, handleSubmit}) {

    const dispatch = useDispatch();

    function handleOrderName(e) {
        dispatch(sortByName(e.target.value));
    }

    function handleOrderWeight(e) {
        dispatch(sortByWeight(e.target.value));
    }

    function handleFilterOrigin(e) {

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
        <form>
            <select>

            </select>

        </form>
        </div>
        <div>
        <form>
            <select
            placeHolder='Filtrar por origen' onChange={handleFilterOrigin}>
                <option key='API' value={false}>
                    API
                </option>
                <option key='Base de datos' value={true}>
                    Base de datos
                </option>
            </select>
            <button>
                Filtrar
            </button>
        </form>
        </div>
        <div>
        <form>
            <select
            placeHolder='Ordenar por raza' onChange={handleOrderName}
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
        </form>
        </div>
        <div>
        <form>
            <select
            placeHolder='Ordenar por peso' onChange={handleOrderWeight}
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
        </form>
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