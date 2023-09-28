const { Router } = require('express');
const dogRouter = Router();
const {getDogsHandler, getDogByIdHandler, postDogHandler} =require('../handlers/dogHandlers')

dogRouter.get("/", getDogsHandler)

dogRouter.get("/:idRaza", getDogByIdHandler)

dogRouter.post("/", postDogHandler)

module.exports = dogRouter;