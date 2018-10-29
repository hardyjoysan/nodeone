const Contact = require('../models/model');

module.exports = {
    home: function(req, res, next) {
        res.status(200).send({
            message: 'Integrator API 1.0 index'
        })
    },
    getContacts: function(req, res, next) {
        Contact.find({}, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    },
    addNewContact: function(req, res, next) {
        let newContact = new Contact(req.body);

        newContact.save((err, result) => {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(result);
        })
    },
    getContactWithID: function(req, res, next) {
        Contact.findById(req.params.contactId, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    },
    updateContact: function(req, res, next) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    },
    deleteContact: function(req, res, next) {
        Contact.deleteOne({ _id: req.params.contactId }, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    },
}