"use strict";

const Strategy = require("../../build/delta-controls").Strategy;

module.exports = {

	"Strategy": {

		"can be instantiated": function(test) {

			const strategy = new Strategy();
			test.ok(strategy);
			test.done();

		}

	}

};
