const Contacts = require('../models/contacts');
// const { post } = require('../routes/contacts');

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
            birthday: req.body.birthday,
            eyeColor: req.body.eyeColor,
            hairColor: req.body.hairColor,
            residesIn: req.body.residesIn
        });
        try {
            const newContact = await contact.save();
            res.json(newContact);
        } catch (err) {
            res.json({ message: err });
        }
    };

const update_contact = async (req, res) => {
    try{
        // const contactId = new ObjectId(req.params.contactId);
        const contact = await Contacts.findById(req.params.contactId);

        if (req.body.firstName) {
            contact.firstName = req.body.firstName
        };

        if (req.body.lastName) {
            contact.lastName = req.body.lastName
        };

        if (req.body.email) {
            contact.email = req.body.email
        };

        if (req.body.favoriteColor) {
            contact.favoriteColor = req.body.favoriteColor
        };

        if (req.body.birthday) {
            contact.birthday = req.body.birthday
        };
        
        if (req.body.eyeColor) {
            contact.eyeColor = req.body.eyeColor
        };

        if (req.body.hairColor) {
            contact.hairColor = req.body.hairColor
        };

        if (req.body.residesIn) {
            contact.residesIn = req.body.residesIn
        };

        await contact.save();
        res.send(contact);

    } catch {
        res.status(404);
        res.send({ error: "Contact doesn't exist." });
    }
};

const put_contact = async (req, res) => {
    try{
        // const contactId = new ObjectId(req.params.contactId);
        const contact = await Contacts.findById(req.params.contactId);

        if (req.body.firstName) {
            contact.firstName = req.body.firstName
        };

        if (req.body.lastName) {
            contact.lastName = req.body.lastName
        };

        if (req.body.email) {
            contact.email = req.body.email
        };

        if (req.body.favoriteColor) {
            contact.favoriteColor = req.body.favoriteColor
        };

        if (req.body.birthday) {
            contact.birthday = req.body.birthday
        };

        if (req.body.eyeColor) {
            contact.eyeColor = req.body.eyeColor
        };

        if (req.body.hairColor) {
            contact.hairColor = req.body.hairColor
        };

        if (req.body.residesIn) {
            contact.residesIn = req.body.residesIn
        };

        await contact.save();
        res.send(contact);

    } catch {
        res.status(404);
        res.send({ error: "Contact doesn't exist." });
    }
};

const delete_contact = async (req, res) => {
    try {
        const removedContact = await Contacts.deleteOne({_id: req.params.contactId});
        res.json(removedContact);
    } catch (err) {
        res.json({ message: err });
    }
};

module.exports = { 
    get_contacts,
    get_contact,
    add_contact,
    update_contact,
    delete_contact,
    put_contact
};