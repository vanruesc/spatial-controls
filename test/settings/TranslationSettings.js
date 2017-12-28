"use strict";

const TranslationSettings = require("../../build/delta-controls").TranslationSettings;

module.exports = {

	"TranslationSettings": {

		"can be instantiated": function(test) {

			const settings = new TranslationSettings();
			test.ok(settings);
			test.done();

		},

		"can be cloned": function(test) {

			const settings = new TranslationSettings();
			test.ok(settings.clone());
			test.done();

		}

	}

};
