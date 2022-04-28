const Contacts = require('../models/contacts')

const get_contacts = async (req, res) => {
    try{
        const contacts = await Contacts.find();
        res.json(contacts)
    } catch(err){
        res.json({message:err});
    };
};

const get_contact = async (req, res) => {
    try{
    const contacts = await Contacts.findById(req.params.contactId);
    res.json(contacts);
    } catch(err){
        res.json({message:err});
    };
};

const add_contact = async (req, res) => {
        const contact = new Contacts({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        });
        try {
            NewContact = await contact.save();
            res.json(NewContact);
        } catch (err) {
            res.json({ message: err });
        }
    };

const update_contact = async (req, res) => {

};

module.exports = { 
    get_contacts,
    get_contact,
    add_contact,
    update_contact
};