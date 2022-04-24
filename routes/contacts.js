'use strict'
const express = require('express');
var contacts = require('../controllers/contacts');
var router = express.Router();
const app = express;

// route for all contacts

router.get("/", contacts.get_contacts);

// route for single contact - by id   
router.get("/:contactId",contacts.get_contact);

module.exports = router;


