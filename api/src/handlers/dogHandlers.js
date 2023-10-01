const {createDogDB, getDogByName, getAllDogs, getDogById} = require('../controllers/dogControllers')

const getDogsHandler = async (req, res) => {
    const {name} = req.query;
try {    
    const response = name ? await getDogByName(name) : await getAllDogs();
    res.status(200).json(response);
} catch (error) {
    res.status(400).json({error: error.message});
}
};

const getDogByIdHandler = async (req, res) => {
    const {idRaza} = req.params;
    try {
    const dogById = await getDogById(idRaza);
    res.status(200).json(dogById);
} catch (error) {
    res.status(400).json({error: error.message});
}
};

const postDogHandler = async (req, res) => {
const {image, name, height, weight, life_span, temperament} = req.body; // Por qué no me piden image en el from del front? Validar con asesor
try {
    if (!image || !name || !height || !weight || !life_span) { // Repasar si temperaments es opcional
    res.status(400).json('No se recibieron todos los campos esperados')
    } else {
        const createDog = await createDogDB(image, name, height, weight, life_span, temperament);
    res.status(200).json({createDog})//`Se creó exitosamente la raza ${name} en la base de datos`;
    }
} catch (error) {
    res.status(400).json({error: error.message});
}
}

module.exports ={
    getDogByIdHandler,
    getDogsHandler,
    postDogHandler
}