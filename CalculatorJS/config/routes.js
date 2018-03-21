const homeController = require('./../controllers/home');
const calculator = require('../models/Calculator');

module.exports = (app) => {
    app.get('/', homeController.indexGet);
    app.post('/', homeController.indexPost);
};

