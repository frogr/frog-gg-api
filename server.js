const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const server = express();

const port = process.env.PORT;
const uri = process.env.MONGODB_URI || 'mongodb://localhost/champions/';

const routes = require('./api/route/route');
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useMongoClient: true });

server.use(bodyParser.json());

routes(server);

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
