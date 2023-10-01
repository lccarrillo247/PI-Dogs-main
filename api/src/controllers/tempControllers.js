const axios = require('axios');
const {Temperaments} = require('../db')
const {API_KEY} = process.env;

const getAllTemps = async () => {

    const tempsBD = await Temperaments.findAll();

    if (tempsBD.length === 0) {

        let temps = [];        
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        response.data.map((dog) => temps.push(dog.temperament))

        const sinNull = temps.filter((temp) => temp !== null);
        const soloStrings = sinNull.join(",").trim().split(",");
        const sinEspacios = soloStrings.map(temp => temp.trim());
        const sinRepetidos = [...new Set(sinEspacios)];
        const finalTemps = sinRepetidos.filter(temp => temp !== "").sort();
  
        finalTemps.forEach(temp => {
            Temperaments.findOrCreate({where: {name: temp}})
        })

    } else {
        throw new Error('La base de datos de Temperaments ya existe')
    }
};

module.exports ={
    getAllTemps,
}