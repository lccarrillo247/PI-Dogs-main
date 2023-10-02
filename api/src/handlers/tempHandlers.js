const {getAllTemps} = require('../controllers/tempControllers')

const getTempHandler = async (req, res) => {
    try {
        const allTemps = await getAllTemps()
        res.status(200).json(allTemps); // "Se ha creado la BD de Temperaments exitosamente"
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports ={
    getTempHandler,
}