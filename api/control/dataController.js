const mongoose = require('mongoose');

const Champs = require('../model/champion');
const STATUS_USER_ERROR = 422;
// app.route('/').get(control.showAllChamps);
// app
//   .route('/:id')
//   .get(control.showChamp);
//   .post(control.addChamp);
const showAllChamps = (req, res) => {
  Champs.find({})
    .select('title champId key name')
    .exec()
    .then(champs => {
      if (champs.length === 0 || champs === null) {
        throw new Error();
      }
      res.json(champs);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({
        '!E':
          'there probably are no champions in the db right now. try adding some!'
      });
    });
};
const showChamp = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res
      .status(STATUS_USER_ERROR)
      .json({ '!E': 'no champion found with that ID!' });
    return;
  }
  Champs.findOne({ champId: id }, (err, champ) => {
    if (champ === null) {
      res.json({
        '!E':
          'No champion found with that ID. Remember that the IDs get kind of funky and get up to the 500s.'
      });
    }
    res.json(champ);
  }).catch(err => {
    res.status(STATUS_USER_ERROR).json({ err });
    return;
  });
};
const addChamp = (req, res) => {
  const { id } = req.params;
  const { champId, name, title, key } = req.body;
  const newChamp = new Champs({ champId, name, title, key });
  newChamp.save(newChamp, (err, champ) => {
    if (err) {
      res.status(500).json({ '!E': err });
      return;
    }
    res.json({ 'NEW CHAMP': champ });
  });
};
const delChamp = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res
      .status(STATUS_USER_ERROR)
      .json({ '!E': 'no champion found with that ID!' });
    return;
  }
  Champs.findByIdAndRemove(id, err => {
    if (err) {
      res.json({ '!E': 'error! sorry this message doesnt help much!' });
      return;
    }
    res.json({ success: `${id} removed` });
  });
};

module.exports = {
  showAllChamps,
  showChamp,
  addChamp,
  delChamp
};
