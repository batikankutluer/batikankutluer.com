require('dotenv').config()

const { MongoClient } = require('mongodb');

const { uri } = process.env;

const Mongo = new MongoClient(uri);

module.exports = Mongo;
