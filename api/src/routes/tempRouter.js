const { Router } = require('express');
const tempRouter = Router();
const {getTempHandler} = require('../handlers/tempHandlers')

tempRouter.get("/", getTempHandler)

module.exports = tempRouter;