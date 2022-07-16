const express = require('express');

const router = express.Router();
const peopleController = require('../controller/pepoleController');

router.route('/').get(peopleController.getAllPepoles).post(peopleController.createNewPepole);

router
    .route('/:id')
    .get(peopleController.createNewPepole)
    .patch(peopleController.updatePepole)
    .delete(peopleController.deletePepole);

module.exports = router;
