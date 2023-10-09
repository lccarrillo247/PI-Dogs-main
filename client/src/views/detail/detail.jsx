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
            <div>
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
            <p>Este es el create</p>
            <h1>{id}</h1>
            <img src={image} atl={name} />
            <p>{name}</p>
            <p>{height}</p>
            <p>{weight}</p>
            <p>{Temperaments?.map((temp) => temp.name).sort().join(', ')}</p>
            <p>{life_span}</p>
        </div>
    )
};

// MIN 1:03 FORMS