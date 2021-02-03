import { BuildOptions } from "esbuild";
import * as pkg from "./package.json";

const date = (new Date()).toDateString();
const production = (process.env.NODE_ENV === "production");
const globalName = pkg.name.replace(/-/g, "").toUpperCase();
const external = Object.keys(pkg.peerDependencies);

const banner = `/**
 * ${pkg.name} v${pkg.version} build ${date}
 * ${pkg.homepage}
 * Copyright ${date.slice(-4)} ${pkg.author.name}
 * @license ${pkg.license}
 */`;

const requireShim = `if(typeof window === "object"&&!window.require)window.require=()=>window.THREE;`;
const footer = `if(typeof module==="object"&&module.exports)module.exports=${globalName};`;

function config(infile: string, outfile: string, format: string, minify = false): BuildOptions {

	const lib = (infile === "src/index.ts");
	const iife = (format === "iife");
	const header = (!lib || !iife) ? banner : banner + "\n" + requireShim;

	return {
		entryPoints: [infile],
		external: lib ? external : [],
		globalName: lib ? globalName : "",
		banner: lib ? header : "",
		footer: (lib && iife) ? footer : "",
		bundle: true,
		outfile,
		minify,
		format
	} as BuildOptions;

}

const demoConfigs = [
	config("demo/src/index.ts", "public/demo/index.js", "iife", production)
];

const libConfigs = production ? [
	config("src/index.ts", `build/${pkg.name}.esm.js`, "esm"),
	config("src/index.ts", `build/${pkg.name}.js`, "iife"),
	config("src/index.ts", `build/${pkg.name}.min.js`, "iife", true)
] : [];

export const sourceDirectories = ["src", "demo/src"];
export const configLists = [demoConfigs, libConfigs];
