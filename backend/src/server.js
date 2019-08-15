// imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

// Create server
const server  = express();

mongoose.connect('mongodb+srv://Gabriel:shinigami@cluster0-njsyd.mongodb.net/tindev?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

server.use(cors());
server.use(express.json());
// Add routes in server
server.use(routes);

// Set port of server
server.listen(3333);