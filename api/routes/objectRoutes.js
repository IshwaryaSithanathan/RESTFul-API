'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/objectController');

	// todoList Routes
	app.route('/object')
		.post(todoList.create_a_obj);

	app.route('/object/:key')
		.get(todoList.read_a_obj);
};
