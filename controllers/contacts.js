'use strict';
const mongodb = require('../db/connection');

const get_contacts = async (req, res) => {
    const result = await mongodb.getDb('Data').collection('Contacts');
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const get_contact = async (req, res, next) => {
  const result = await mongodb.getDb().db('Data').collection('Contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); // we just need the first one (the only one)
  });
};

module.exports = { getData };