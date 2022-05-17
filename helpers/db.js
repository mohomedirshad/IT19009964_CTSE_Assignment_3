const config = require('config.json');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
const connectionUrl = process.env.MONGODB_URL
mongoose.connect(connectionUrl, () => {}, (error)=>{
    console.log('Mongodb real error: ' + error);
});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../user/model/user.model')
};
