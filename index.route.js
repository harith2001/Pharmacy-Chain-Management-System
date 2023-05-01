const express = require("express")

const routes = express.Router()

const harithRouter = require("./harith/routes/router");
const shehaniRouter = require("./shehani/routes/FinanceDetails");
const jenoRouter = require ("./Jeno/routes/distributor");
const kavithRouter = require("./Kavith/routes/router");
const ranmini = require("./Ranmini/routes/router");
const hirushi = require("./Hirushi/routes/medicine");
const nafeel = require("./Nafeel/routes/emp");
const nawodya = require("./Nawodya/routes/customer");

routes.use('/',nawodya)
routes.use('/',nafeel)
routes.use('/',hirushi)
routes.use('/', harithRouter)
routes.use('/', shehaniRouter)
routes.use('/',jenoRouter)
routes.use('/',kavithRouter)
routes.use('/',ranmini)

module.exports = routes
