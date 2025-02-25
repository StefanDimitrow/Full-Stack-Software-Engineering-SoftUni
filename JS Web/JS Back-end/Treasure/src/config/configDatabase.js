const mongoose = require('mongoose');
require('../models/User');
require('../models/Stone')

//TODO: IMPORT MODELS;


async function configDatabase(){
    //TODO: SET DATABASE NAME;
    const connectionString = 'mongodb://localhost:27017/earth-treasure'

    await mongoose.connect(connectionString);

    console.log('Database connected');

}

module.exports = {configDatabase}