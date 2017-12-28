"use strict";

const Settings = require("../../build/delta-controls").Settings;

module.exports = {

	"Settings": {

		"can be instantiated": function(test) {

			const settings = new Settings();
			test.ok(settings);
			test.done();

		},

		"can be cloned": function(test) {

			const settings = new Settings();
			test.ok(settings.clone());
			test.done();

		}

	}

};
