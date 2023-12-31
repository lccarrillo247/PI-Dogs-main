const {Dogs, Temperaments, dogsTemperaments} = require('../db')
const {API_KEY} = process.env;
const axios = require('axios');
const {Op} =require('sequelize')

const getAllDogs = async () => {
    const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const allDogsApi = data.map((dog) => ({ // Buena práctica: Esta función de limpiar info se puede guardar en carpeta utils dentro de src para usarla en los controllers
        id: dog.id,
        image: dog.image.url,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        Temperaments: dog.temperament?.split(', ').map((temp) => ({
            "name": temp
        })),
        created: false, //sirve para diferenciar si vino de la API o si fue creado desde la BD. También se podría con isNan id (?)
    }))

    const allDogsDb = await Dogs.findAll({
        include: {
            model: Temperaments,
            attributes: ["name"],
            through: {
                attributes: []
            },
        },
    });

    return [...allDogsDb,...allDogsApi];
};

const getDogByName = async (name) => {
    const dogsApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const dogApi = dogsApi.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase())).map((dog) => ({
        id: dog.id,
        image: dog.image.url,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        Temperaments: dog.temperament?.split(', ').map((temp) => ({
            "name": temp
        })),
        created: false,
    }))
    const dogDb = await Dogs.findAll({where: {name: {
        [Op.iLike]: `%${name}%`
    }
},
        include: {
            model: Temperaments,
            attributes: ["name"],
            through: {
                attributes: []
            },
        },
    });
    if (dogApi.length === 0 && dogDb.length === 0) {
        throw new Error(`La raza ${name} no existe en la base de datos`)
    } else {
        return [...dogDb,...dogApi];
    }
}

const getDogById = async (idRaza) => {
    console.log(idRaza)
    if (Number.isNaN(Number(idRaza))) {
    const dog = await Dogs.findByPk(idRaza, {
        include: {
            model: Temperaments,
            attributes: ["name"],
            through: {
                attributes: []
            },
        },
    });
    return dog;
    } else {
    const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const dog = data.filter((dog) => dog.id === Number(idRaza)); // No me trae imagen cuando uso el ID en el endpoint, por lo cual hago esto como 2da opción
    const dogByIdApi = dog.map((dog) => ({
        id: dog.id,
        image: dog.image.url,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        Temperaments: dog.temperament?.split(', ').map((temp) => ({
            "name": temp
        })),
        created: false,
    }))
    return dogByIdApi.pop();
    }
}

const createDogDB = async (image, name, height, weight, life_span, temperaments) => {
    
    const check = await Dogs.findAll({where: {name: name}});

    if (!check.length) {

        const newDog = await Dogs.create({
            image: image,
            name: name,
            height: height,
            weight: weight,
            life_span: life_span,
        });
        
        await newDog.addTemperaments(temperaments);
        
        return `Se creó exitosamente la raza ${name} en la base de datos`;
    } else {
        throw new Error(`Error: La raza ${name} ya existe en la base de datos`)
    }
};

module.exports = {
    createDogDB,
    getDogByName,
    getAllDogs,
    getDogById,
};