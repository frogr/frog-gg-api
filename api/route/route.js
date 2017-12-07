const control = require('../control/dataController');
module.exports = app => {
  app
    .route('/')
    .get(control.showAllChamps)
    .post(control.addChamp);
  app
    .route('/:id')
    .get(control.showChamp)
    .delete(control.delChamp);
};
