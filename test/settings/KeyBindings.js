"use strict";

const KeyBindings = require("../../build/delta-controls").KeyBindings;

module.exports = {

	"KeyBindings": {

		"can be instantiated": function(test) {

			const settings = new KeyBindings();
			test.ok(settings);
			test.done();

		},

		"can be cloned": function(test) {

			const settings = new KeyBindings();
			test.ok(settings.clone());
			test.done();

		}

	}

};
