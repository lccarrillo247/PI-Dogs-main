const { Router } = require('express');
const tempRouter = Router();
const {getTempHandler, getTempFormHandler} = require('../handlers/tempHandlers')

tempRouter.get("/", getTempHandler)

tempRouter.get("/form", getTempFormHandler)

module.exports = tempRouter;