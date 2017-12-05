const control = require('../control/dataController');
module.exports = app => {
  app.route('/').get(control.showAllChamps);
  app
    .route('/:name')
    .get(control.showChamp)
    .post(control.addChamp);
};
