"use strict";

const ZoomSettings = require("../../build/delta-controls").ZoomSettings;

module.exports = {

	"ZoomSettings": {

		"can be instantiated": function(test) {

			const settings = new ZoomSettings();
			test.ok(settings);
			test.done();

		},

		"can be cloned": function(test) {

			const settings = new ZoomSettings();
			test.ok(settings.clone());
			test.done();

		}

	}

};
