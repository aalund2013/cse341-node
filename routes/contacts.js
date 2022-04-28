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
router.patch("/:contactId", contacts.update_contact);

// route for put
router.put("/:contactId", contacts.put_contact);

// route to delete contact
router.delete("/:contactId", contacts.delete_contact);

module.exports = router;


