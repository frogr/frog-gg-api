const mongoose = require('mongoose');
// "1": {
//   "title": "the Dark Child",
//   "id": 1,
//   "key": "Annie",
//   "name": "Annie"
const ChampSchema = new mongoose.Schema({
  id: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    key: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model('Champ', ChampSchema);
