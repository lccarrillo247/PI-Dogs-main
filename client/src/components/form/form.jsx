import { useState, useEffect } from 'react';
import styles from './form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTemps } from '../../redux/actions';
import axios from 'axios';

export default function Form() {

    const dispatch = useDispatch();
    const temps = useSelector((state) => state.temps)

    const [input, setInput] = useState({
        name: "",
        minheight: "",
        maxheight: "",
        minweight: "",
        maxweight: "",
        life_span: "",
        image: "",
        temperament: [],
    })

    const [errors, setErrors] = useState({
        name: "",
        minheight: "",
        maxheight: "",
        minweight: "",
        maxweight: "",
        life_span: "",
        image: "",
        temperament: "",
    })

    useEffect( async () => {
        dispatch(getTemps())
    }, [])
    
    const validate=(input)=>{
        
        let errors = {};
        const regexLetters = /^[A-Za-z\s]+$/;
        // const regexURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/; // Revisar por qué no sirve
        
        if (!input.name) {
            errors.name = 'Ingresa el nombre de la raza'
        } else if (!regexLetters.test(input.name)) {
            errors.name = "Ingresa un nombre de solo letras"
        }
        
        if(!input.minheight) {
            errors.minheight = 'Ingresa la altura mínima del perro'
        } else if (input.minheight < 1 || input.minheight.length > 2) {
            errors.minheight = "Ingresa una altura mínima entre 1 y 99"
        }
        
        if(!input.maxheight) {
            errors.maxheight = 'Ingresa la altura máxima del perro'
        } else if (input.maxheight < 1 || input.maxheight.length > 2) {
            errors.maxheight = "Ingresa una altura máxima entre 1 y 99"
        } // Validar que max sea mayor que min

    if(!input.minweight) {
        errors.minweight = 'Ingresa el peso mínimo del perro'
    } else if (input.minweight < 1 || input.minweight.length > 2) {
        errors.minweight = "Ingresa un peso mínimo entre 1 y 99"
    }

    if(!input.maxweight) {
        errors.maxweight = 'Ingresa el peso máximo del perro'
    } else if (input.maxweight < 1 || input.maxweight.length > 2) {
        errors.maxweight = "Ingresa un peso máximo entre 1 y 99"
    } // validar que max sea mayor que min

    if(!input.life_span) {
        errors.life_span = 'Ingresa los años de vida del perro'
    } else if (input.life_span < 1 || input.life_span.length > 2) {
        errors.life_span = "Ingresa unos años de vida entre 1 y 99"
    }
    
    if (!input.image) {
        errors.image = 'Ingresa una URL de la imagen del perro'
    } 
    // else if (!regexURL.test(input.image)) {errors.image = "Ingresa una URL válida"} // validar si es viable usar
    
    return errors;
    
}

function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    });
    
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value,
    }));
}

function handleChangeTemps(e){
    const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
    parseInt(option.value)
    );
    setInput({
        ...input,
        temperament: selectedOptions,
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.name || errors.image || errors.life_span || errors.maxheight || errors.maxweight || errors.minheight || errors.minweight || errors.name) {
        alert('Completa los campos de forma correcta para crear el perro')
    } else {

    let newDog = {
        image: input.image,
        name: input.name,
        height: `${input.minheight} - ${input.maxheight}`,
        weight: `${input.minweight} - ${input.maxweight}`,
        life_span: `${input.life_span} years`,
        temperament: input.temperament,
    }

    try {
        const response = await axios.post('http://localhost:3001/dogs/', newDog)
        alert(`Se ha creado la raza ${input.name} exitosamente`)
        // e.target.reset() Revisar por qué no funciona. La idea es limpiar los campos al enviar
    } catch (error) {
        alert(`Ha habido un error al crear la raza ${input.name}`) // Ajustar detalle de errores acá y en el back
    }
    }
};

// console.log(temps)
// console.log(input)
// console.log(errors)

return (
    <div className={styles.form}>
        <h3 className={styles.formTitle}>Completa los campos del formulario para crear tu perro</h3>
        <form onSubmit={handleSubmit}>
            <div className={styles.labelInput}>
        <label>Nombre de la raza:</label>
        <input
        className={styles.formInput}
        type="text"
        name="name" 
        value={input.name}
        onChange={handleChange}/>
        {errors.name && <p className={styles.formError}>{errors.name}</p>}
            </div>
            <div className={styles.doubleInput}>
            <div className={styles.labelInput}>
        <label>Altura mínima (en cm):</label>
        <input 
        className={styles.formInput}
        type="number"
        min="0"
        max="99"
        name="minheight" 
        value={input.minheight} 
        onChange={handleChange}/>
        {errors.minheight && <p className={styles.formError}>{errors.minheight}</p>}
            </div>
            <div className={styles.labelInput}>
        <label>Altura máxima (en cm):</label>
        <input 
        className={styles.formInput}
        type="number"
        min="0"
        max="99"
        name="maxheight" 
        value={input.maxheight} 
        onChange={handleChange}/>
        {errors.maxheight && <p className={styles.formError}>{errors.maxheight}</p>}
            </div>
            </div>
            <div className={styles.doubleInput}>
            <div className={styles.labelInput}>
        <label>Peso mínimo (en kg):</label>
        <input 
        className={styles.formInput}
        type="number"
        min="0"
        max="99"
        name="minweight" 
        value={input.minweight} 
        onChange={handleChange}/>
        {errors.minweight && <p className={styles.formError}>{errors.minweight}</p>}          
            </div>
            <div className={styles.labelInput}>
        <label>Peso máximo (en kg):</label>
        <input 
        className={styles.formInput}
        type="number"
        min="0"
        max="99"
        name="maxweight" 
        value={input.maxweight} 
        onChange={handleChange}/>
        {errors.maxweight && <p className={styles.formError}>{errors.maxweight}</p>}
            </div>
            </div>
            <div className={styles.doubleInput}>
            <div className={styles.labelInput}>
        <label>Años de vida:</label>
        <input 
        className={styles.formInput}
        type="number"
        min="0"
        max="99"
        name="life_span" 
        value={input.life_span} 
        onChange={handleChange}/>
        {errors.life_span && <p className={styles.formError}>{errors.life_span}</p>}
            </div>
            <div className={styles.labelInput}>
            <label>Imagen (url):</label>
            <input 
            className={styles.formInput}
            type="text"
            name="image" 
            value={input.image} 
            onChange={handleChange}/>
            {errors.image && <p className={styles.formError}>{errors.image}</p>}
            </div>
            </div>
            <div className={styles.tempContainer}>
        <label className={styles.tempLabel}>Temperamento:</label>
        <select
        className={styles.tempInput}
        multiple
        id="temperament"
        name="temperament"
        value={input.temperament}
        onChange={handleChangeTemps}>
        {temps?.map((temp) => (
            <option key={temp.id} value={temp.id}>
                {temp.name}
            </option>
        ))}
        </select>
            </div>
            <div className={styles.formButtonContainer}>
        <button className={styles.formButton}type="submit">¡Crear perro!</button>
            </div>
        </form>
        </div>
    )
};