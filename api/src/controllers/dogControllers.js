const {Dogs, Temperaments, dogsTemperaments} = require('../db')

const createDogDB = async (image, name, height, weight, life_span, temperaments) => {
    
    const getTemps = await Temperaments.findAll({where: {name: temperaments, attributes: id} })

    const resultados = getTemps.map((temp) => ({
        id: temp.id,
    }))

    const newDog = await Dogs.create({
        image: image,
        name: name,
        height: height,
        weight: weight,
        life_span: life_span,
        temperaments: resultados,
    });

    return newDog;
}

// 1:18 video 2

module.exports = {createDogDB};