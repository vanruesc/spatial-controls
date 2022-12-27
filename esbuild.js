import { createRequire } from "module";
import alias from "esbuild-plugin-alias";
import esbuild from "esbuild";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const require = createRequire(import.meta.url);
const pkg = require("./package");
const date = new Date();
const banner = `/**
 * ${pkg.name} v${pkg.version} build ${date.toDateString()}
 * ${pkg.homepage}
 * Copyright 2017 ${pkg.author.name}
 * @license ${pkg.license}
 */`;

await esbuild.build({
	entryPoints: ["src/index.ts"],
	outfile: `dist/${pkg.name}.js`,
	external: Object.keys(pkg.peerDependencies || {}),
	banner: { js: banner },
	logLevel: "info",
	format: "esm",
	bundle: true
}).catch(() => process.exit(1));

await esbuild.build({
	entryPoints: ["demo/src/index.ts"],
	outdir: "public/demo",
	minify: process.argv.includes("-m"),
	watch: process.argv.includes("-w"),
	logLevel: "info",
	format: "iife",
	target: "es6",
	bundle: true,
	plugins: [
		alias({
			[pkg.name]: path.resolve(__dirname, "./src/index.ts")
		})
	]
}).catch(() => process.exit(1));
