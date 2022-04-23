'use strict'
module.exports = function(app) {
    var contacts = require('../controllers/contacts');
    // route for all contacts
    app.route('/contacts')
        .get(contacts.get_contacts);
   
    // route for single contact - by id    
    app.route('/contacts/:contactId')
        .get(contacts.get_contact);
};


