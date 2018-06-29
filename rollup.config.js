import babel from "rollup-plugin-babel";
import minify from "rollup-plugin-babel-minify";
import resolve from "rollup-plugin-node-resolve";

const pkg = require("./package.json");
const date = (new Date()).toDateString();

const banner = `/**
 * ${pkg.name} v${pkg.version} build ${date}
 * ${pkg.homepage}
 * Copyright ${date.slice(-4)} ${pkg.author.name}, ${pkg.license}
 */`;

const lib = {

	input: pkg.module,
	output: {
		file: "build/bundle.js",
		format: "umd",
		name: pkg.name.replace(/-/g, "").toUpperCase(),
		banner: banner
	},

	plugins: [resolve()].concat(process.env.BABEL_ENV === "production" ?
		[babel(), minify({
			bannerNewLine: true,
			sourceMap: false,
			comments: false
		})] : []
	)

};

const demo = {

	input: "demo/src/index.js",
	output: {
		file: "public/demo/index.js",
		format: "iife",
		globals: {
			"dat.gui": "dat",
			"stats.js": "Stats",
			"three": "THREE"
		}
	},

	external: ["dat.gui", "stats.js", "three"],

	plugins: [resolve()].concat(process.env.BABEL_ENV === "production" ?
		[babel(), minify({
			sourceMap: false,
			comments: false
		})] : []
	)

};

export default [lib, demo];
