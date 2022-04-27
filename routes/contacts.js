// const express = require('express');
var contacts = require('../controllers/contacts');
var router = require('express').Router();

// GET
// route for all contacts
router.get("/", contacts.get_contacts);

// route for single contact - by id   
router.get("/:contactId",contacts.get_contact);

// POST
// route to create new contact
router.post("/",);
module.exports = router;


