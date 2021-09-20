'use-strict';

module.exports = app => {
   
   const control = require('../controller');
   
   app.route('/').get(control.index)
}