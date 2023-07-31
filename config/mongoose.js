const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sociodb');

const db = mongoose.connection;

console.log('db Connected')

module.exports = db;