var contacts = require('../controllers/contacts');
var router = require('express').Router();


// GET
// route for all contacts
router.get("/", contacts.get_contacts);

// route for single contact - by id   
router.get("/:contactId",contacts.get_contact);

// route to create new contact
router.post("/", contacts.add_contact);

// route for update contact
router.put("/", contacts.update_contact);

module.exports = router;


