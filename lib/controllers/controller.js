const Contact = require('../models/model');

module.exports = {
    home: function(req, res, next) {
        res.status(200).send({
            message: 'Integrator API 1.0 index'
        })
    },
    getContacts: function(req, res, next) {
        Contact.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    },
    addNewContact: function(req, res, next) {
        let newContact = new Contact(req.body);

        newContact.save((err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        })
    },
    getContactWithID: function(req, res, next) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    },
    updateContact: function(req, res, next) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    },
    deleteContact: function(req, res, next) {
        Contact.deleteOne({ _id: req.params.contactId }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    },
}