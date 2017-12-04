const mongoose = require('mongoose');

const Champs = require('../models/champion');
// app.route('/').get(control.showAllChamps);
// app
//   .route('/:id')
//   .get(control.showChamp);
//   .post(control.addChamp);
const showAllChamps = (req, res) => {};
const showChamp = (req, res) => {};
const addChamp = (req, res) => {};

module.exports = {
  showAllChamps,
  showChamp,
  addChamp
};
