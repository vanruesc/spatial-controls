"use strict";

const ZoomStrategy = require("../../build/delta-controls").ZoomStrategy;

module.exports = {

	"ZoomStrategy": {

		"can be instantiated": function(test) {

			const strategy = new ZoomStrategy();
			test.ok(strategy);
			test.done();

		}

	}

};
