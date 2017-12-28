"use strict";

const MovementState = require("../../build/delta-controls").MovementState;

module.exports = {

	"MovementState": {

		"can be instantiated": function(test) {

			const state = new MovementState();
			test.ok(state);
			test.done();

		}

	}

};
