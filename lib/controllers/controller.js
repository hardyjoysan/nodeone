//var express = require('express');

module.exports = {
    home: function(req, res, next) {
        res.status(200).send({
            message: 'Integrator API 1.0 index'
        })
    },
    authenticate: function(req, res, next) {
    
    },
}