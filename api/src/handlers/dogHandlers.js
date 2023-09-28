const {createDogDB} = require('../controllers/dogControllers')

const getDogsHandler = (req, res) => {
    res.status(200).send('Vamos meeelooooos');
};

const getDogByIdHandler = (req, res) => {
    res.status(200).send('Trae el perro según el id de su raza');
};

const postDogHandler = async (req, res) => {

const {image, name, height, weight, life_span, temperaments} = req.body; // Por qué no me piden image en el from del front? Validar con asesor

try {
    if (!image || !name || !height || !weight || !life_span) { // Repasar si temperaments es opcional
    res.status(400).json('No se recibieron todos los campos esperados')
    } else {
        const createDog = await createDogDB(image, name, height, weight, life_span, temperaments);
    res.status(200).json({createDog})//`Se creó exitosamente la raza ${name} en la base de datos`;
    }
} catch (error) {
    res.status(500).json({error: error.message});
}

}

module.exports ={
    getDogByIdHandler,
    getDogsHandler,
    postDogHandler
}