// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
// 	e2e: {
// 		setupNodeEvents(on, config) {
// 			// implement node event listeners here
// 		},
// 		experimentalStudio: true,

// 	},
// });

const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
	watchForFileChanges: false,
	chromeWebSecurity: false,
	reporter: "cypress-mochawesome-reporter",
	video: true,
	// videoCompression: 32, // Adjust video compression quality
	e2e: {
		setupNodeEvents(on, config) {
			mochawesome(on); // Setup mochawesome reporter plugin
			// Implement other node event listeners here
		},
	},
});
