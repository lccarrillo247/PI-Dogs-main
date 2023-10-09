import { useDispatch, useSelector } from 'react-redux';
import styles from './detail.module.css';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getById, resetId } from '../../redux/actions';


export default function Detail() {

    const idRaza = (useParams()).id;
    const dispatch = useDispatch();
    const dogId = useSelector((state)=> state.dogId);

    useEffect(()=>{
        dispatch(getById(idRaza));
        return ()=>{dispatch(resetId())};
    },[dispatch]);

    console.log(dogId);

    const {id, image,name,height,weight,life_span,Temperaments} = dogId;

    return (
        <div className={styles.detail}>
            <div className={styles.detailNav}>
                <NavLink to="/home" >
                    <button>
                    Regresar
                    </button>
                </NavLink> 
                <NavLink to="/create" >
                    <button>
                    ¡Crea tu perro!
                    </button>
                </NavLink>
            </div>
            <div className={styles.nameContainer}>
            <h1 className={styles.detailName}>{name}</h1>
            </div>
            <div className={styles.detailContainer}>
            <div className={styles.imageContainer}>
            <img className={styles.detailImage} src={image} atl={name} />
            </div>
            <div className={styles.infoContainer}>
            <h2>¡Consulta aquí toda la información de tu perro!</h2>
            <h3>- Altura (en cm): {height}</h3>
            <h3>- Peso (en Kg): {weight}</h3>
            <h3>- Años de vida: {life_span}</h3>
            <h3>- Temperamento: {Temperaments?.map((temp) => temp.name).sort().join(', ')}</h3>
            <p className={styles.detailID}>ID: {id}</p>
            </div>
            </div>
        </div>
    )
};

// MIN 1:03 FORMS