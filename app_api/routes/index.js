var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');

/* Locations API */
router.get('/locations', ctrlLocations.locationsListByDistance);//optenemos la lista de lugares
router.post('/locations', ctrlLocations.locationsCreate);//creaar lugares
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);//motrar un lugar en especifico
router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);// actualizar un lugar en especifico
router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne); //deliminar  un lugar en especifico

/* Reviews API */
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);//crear un comenetario
router.get('/locations/:locationid/reviews/:reviewid',ctrlReviews.reviewsReadOne);//leer un comentario
router.put('/locations/:locationid/reviews/:reviewid',ctrlReviews.reviewsUpdateOne);//actualizar
router.delete('/locations/:locationid/reviews/:reviewid',ctrlReviews.reviewsDeleteOne);//eliminar

module.exports = router;
