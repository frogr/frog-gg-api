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
    .select('title')
    .exec()
    .then(champs => {
      if (champs.length === 0 || champs === null) {
        throw new Error();
      }
      res.json(champs);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ '!E': err });
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
  Champs.findOne({ id }, (err, champ) => {
    res.json(champ);
  }).catch(err => {
    res.status(STATUS_USER_ERROR).json({ err });
    return;
  });
};
const addChamp = (req, res) => {
  const { id } = req.params;
  const { title, key, name } = req.body;
  const newChamp = new Champs({ title, key, name });
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
  Champs.findOne({ id }, (err, champ) => {
    res.json({ id: 'found and deleting' });
  })
    .remove()
    .exec()
    .then(champ => {
      res.json({ champ: 'removed' });
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
      return;
    });
};

module.exports = {
  showAllChamps,
  showChamp,
  addChamp,
  delChamp
};
