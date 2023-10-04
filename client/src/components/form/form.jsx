import { useState } from 'react';
import styles from './form.module.css';
import { useDispatch } from 'react-redux';

export default function Form() {

    const dispatch = useDispatch;

    const [input, setInput] = useState({
        image: "",
        name: "",
        minheight: "",
        maxheight: "",
        minweight: "",
        maxweight: "",
        life_span: "",
        temperament: "",
    })

    const [errors, setErrors] = useState({
        image: "",
        name: "",
        minheight: "",
        maxheight: "",
        minweight: "",
        maxweight: "",
        life_span: "",
        temperament: "",
    })

    const validate=(input)=>{

    let errors = {};
    const regexLetters = /^[A-Za-z\s]+$/;

    if (!input.name) {
        errors.name = 'Ingresa el nombre de la raza'
    } else if (!regexLetters.test(input.name)) {
        errors.name = "Ingresa un nombre de solo letras"
    }

    // Terminar validaciones

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

    function handleSubmit(){
        // hacer dispatch con action que lleva esto al back con los datos juntos
        // Si hay errores, tirar alert
        // si no hay errores, hacer axios post convirtiendo los datos
    }

    console.log(input)

    return (
        <div className={styles.form}>
        <h3>Completa la información del formulario para crear tu perro</h3>
        <form onSubmit={""}>
        <label>Nombre de la raza:</label>
        <input
        type="text"
        name="name" 
        value={input.value}
        onChange={handleChange}/>
        {errors.name && <p>{errors.name}</p>}
        <label>Altura mínima (en cm):</label>
        <input 
        type="number"
        name="minheight" 
        value={input.value} 
        onChange={handleChange}/>
        <label>Altura máxima (en cm):</label>
        <input 
        type="number"
        name="maxheight" 
        value={input.value} 
        onChange={handleChange}/>
        <label>Peso mínimo (en kg):</label>
        <input 
        type="number"
        name="minweight" 
        value={input.value} 
        onChange={handleChange}/>
        <label>Peso máximo (en kg):</label>
        <input 
        type="number"
        name="maxweight" 
        value={input.value} 
        onChange={handleChange}/>
        <label>Años de vida:</label>
        <input 
        type="number"
        name="life_span" 
        value={input.value} 
        onChange={handleChange}/>
        <label>Temperamento:</label>
        <input 
        type="text"
        name="temperament" 
        value={input.value} 
        onChange={handleChange}/>
        <label>Imagen</label>
        <input 
        type="text"
        name="image" 
        value={input.value} 
        onChange={handleChange}/>

        <button type="submit">¡Crear perro!</button>
        </form>
        </div>
    )
};