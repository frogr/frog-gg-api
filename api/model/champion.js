const mongoose = require('mongoose');
// "1": {
//   "title": "the Dark Child",
//   "id": 1,
//   "key": "Annie",
//   "name": "Annie"
const ChampSchema = new mongoose.Schema({
  champId: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Champ', ChampSchema);
