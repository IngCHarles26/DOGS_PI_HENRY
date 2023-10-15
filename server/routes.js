const router = require('express').Router();

const getDogs = require('./controllers/getDogs');
const getDogById = require('./controllers/getDogbyId');
const getDogsbyName = require('./controllers/getDogsbyName');
const postDogs = require('./controllers/postDogs');
const getTemperaments = require('./controllers/getTemperaments');

router.get('/dogs/names/',getDogsbyName);
router.get('/dogs',getDogs);
router.get('/dogs/:idDog',getDogById);
router.get('/temperaments',getTemperaments);
router.post('/dogs',postDogs);

module.exports = router;
