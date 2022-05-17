// require('rootpath')();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");
const dotenv = require("dotenv");
const {ROUTES} = require("./routes");
const {setupProxies} = require("./proxy");
const axios = require('axios')

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

setupProxies(app, ROUTES);

app.use('/users', require('./user/controller/user.controller'));

app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ?
 (process.env.PORT || 80) : 4000;

const server = app.listen(port, function(){
    console.log('Server is running on port ' + port);
});

