import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("./package");
const date = (new Date()).toDateString();
const production = (process.env.NODE_ENV === "production");
const external = Object.keys(pkg.peerDependencies);

const banner = `/**
 * ${pkg.name} v${pkg.version} build ${date}
 * ${pkg.homepage}
 * Copyright ${date.slice(-4)} ${pkg.author.name}
 * @license ${pkg.license}
 */`;

const demo = {
	entryPoints: ["demo/src/index.ts"],
	outfile: "public/demo/index.js",
	format: "iife",
	bundle: true,
	minify: production
};

const lib = {
	entryPoints: ["src/index.ts"],
	outfile: `dist/${pkg.name}.js`,
	format: "esm",
	bundle: true,
	external,
	banner
};

export const srcDirs = ["src", "demo/src"];
export const configs = production ? [demo, lib] : [demo];
