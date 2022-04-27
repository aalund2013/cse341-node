const {ObjectId} = require('mongodb')
const mongodb = require('../db/connection');

const get_contacts = async (req, res) => {
    const client = mongodb.getDb();
    const result = await client.db('Data').collection('Contacts').find();
    const contacts = await result.toArray()
    return res.json(contacts);
    // result.toArray().then((lists) => {    });
};

const get_contact = async (req, res) => {
    const {contactId} = req.params
    console.log(contactId)
    const client = mongodb.getDb();
    const result = await client.db('Data').collection('Contacts').findOne({"_id": new ObjectId(contactId)});
    return res.json(result);
};

module.exports = { 
    get_contacts,
    get_contact
};