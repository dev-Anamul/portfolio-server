const express = require('express');

const router = express.Router();
const contactController = require('../controller/contactController');

router.route('/').get(contactController.getAllContacts).post(contactController.createNewContact);

router
    .route('/:id')
    .get(contactController.getSingleContact)
    .patch(contactController.updateContact)
    .delete(contactController.deleteContact);

module.exports = router;
