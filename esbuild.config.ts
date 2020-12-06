import { BuildOptions } from "esbuild";
import * as pkg from "./package.json";

const date = (new Date()).toDateString();
const production = (process.env.NODE_ENV === "production");
const external = Object.keys(pkg.peerDependencies);

const banner = `/**
 * ${pkg.name} v${pkg.version} build ${date}
 * ${pkg.homepage}
 * Copyright ${date.slice(-4)} ${pkg.author.name}
 * @license ${pkg.license}
 */`;

const ext = new Map([
	["esm", ".esm.js"],
	["iife", ".js"],
	["min", ".min.js"]
]);

function config(id: string, format: string, minify = false): BuildOptions {

	const lib = (id === "lib");
	const extKey = minify ? "min" : format;
	const fileName = lib ? pkg.name : "index";
	const outDir = lib ? "build" : "public/demo";

	return {
		entryPoints: lib ? ["src/index.ts"] : ["demo/src/index.ts"],
		outfile: `${outDir}/${fileName}${ext.get(extKey)}`,
		globalName: lib ? pkg.name.replace(/-/g, "").toUpperCase() : "",
		external: lib ? external : [],
		banner: lib ? banner : "",
		minify,
		format
	} as BuildOptions;

}

export default production ? [
	config("lib", "esm"),
	config("lib", "iife"),
	config("lib", "iife", true),
	config("demo", "iife"),
	config("demo", "iife", true)
] : [
	config("demo", "iife")
];
