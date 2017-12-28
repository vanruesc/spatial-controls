"use strict";

const MovementStrategy = require("../../build/delta-controls").MovementStrategy;

module.exports = {

	"MovementStrategy": {

		"can be instantiated": function(test) {

			const strategy = new MovementStrategy();
			test.ok(strategy);
			test.done();

		}

	}

};
