'use strict'
const express = require('express');
var contacts = require('../controllers/contacts');
var router = express.Router()
module.exports = function(app) {

    // route for all contacts
    // app.route('/contacts')
    router.get(contacts.get_contacts);

    // route for single contact - by id    
    // app.route('/contacts/:contactId')
        router.get(contacts.get_contact);
};


