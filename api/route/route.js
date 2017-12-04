const control = reuquire('../control/dataController');
module.exports = app => {
  app.route('/').get(control.showAllChamps);
  app
    .route('/:id')
    .get(control.showChamp);
    .post(control.addChamp);
};
