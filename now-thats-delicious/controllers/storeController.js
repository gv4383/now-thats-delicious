const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
  const store = new Store(req.body);

  // fires off connection to MDB, save data, and come
  // back with either the store itself or an error
  await store.save();
  res.redirect('/');
};
