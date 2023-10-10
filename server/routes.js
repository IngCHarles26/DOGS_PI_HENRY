const router = require('express').Router();

const getDogs = require('./controllers/getDogs');
const getDogById = require('./controllers/getDogbyId');
const getDogsbyName = require('./controllers/getDogsbyName');
const postDogs = require('./controllers/postDogs');
const getTemperaments = require('./controllers/getTemperaments');

router.get('/dogs',getDogs);
router.get('/dogs/name',getDogsbyName);
router.get('/dogs/:idDog',getDogById);
router.post('/dogs',postDogs);
router.get('/temperaments',getTemperaments);

module.exports = router;
