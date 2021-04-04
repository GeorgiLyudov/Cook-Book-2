const router = require('express').Router();
const homeController = require('./controllers/homeController')
var cors = require("cors");


router.use(cors())
router.use('/', homeController);
module.exports = router;