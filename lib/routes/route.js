const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.home);

router.get('/contact', contactController.getContacts);
router.post('/contact', controller.addNewContact);

router.get('/contact/:contactId', controller.getContactWithID);
router.put('/contact/:contactId', controller.updateContact);
router.delete('/contact/:contactId', controller.deleteContact);

module.exports = router;