"use strict";

const TranslationManager = require("../../build/delta-controls").TranslationManager;

module.exports = {

	"TranslationManager": {

		"can be instantiated": function(test) {

			const manager = new TranslationManager();
			test.ok(manager);
			test.done();

		}

	}

};
