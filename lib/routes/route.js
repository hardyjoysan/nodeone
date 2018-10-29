const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../controllers/controller');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', controller.home);

router.get('/contact', controller.getContacts);
router.post('/contact', controller.addNewContact);

router.get('/contact/:contactId', controller.getContactWithID);
router.put('/contact/:contactId', controller.updateContact);
router.delete('/contact/:contactId', controller.deleteContact);

module.exports = router;