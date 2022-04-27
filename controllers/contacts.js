const {ObjectId} = require('mongodb')
const Contacts = require('../models/contacts')
const mongodb = require('../db/connection');

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

module.exports = { 
    get_contacts,
    get_contact
};