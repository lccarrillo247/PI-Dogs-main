const axios = require('axios');
const {Temperaments} = require('../db')

const getAllTemps = async () => {

    const datos = await Temperaments.findAll();

    if (datos.length === 0) {

        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    
        let temps = [];
    
        response.data.map((dog) => temps.push(dog.temperament) )
    
        temps = temps.filter(temp => temp !== null).join("").split(", ");

        const uniqueTemps = [...new Set(temps)];

        const uniqueTempsObject = uniqueTemps.map((name) => ({name: name}));

        await Temperaments.bulkCreate(uniqueTempsObject)
    }

};

module.exports ={
    getAllTemps,
}