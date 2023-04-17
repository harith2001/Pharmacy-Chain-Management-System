const express = require("express")

const routes = express.Router()

const harithRouter = require("./harith/routes/router");

routes.use('/', harithRouter)

module.exports = routes
