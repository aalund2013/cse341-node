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
    try{
        console.log(req.body)
    } catch(err){
        res.json({message:err});
    };
};

module.exports = { 
    get_contacts,
    get_contact,
    add_contact
};