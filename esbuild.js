import esbuild from "esbuild";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { watch } from "chokidar";
import { configs, srcDirs } from "./esbuild.config.js";

const { argv } = yargs(hideBin(process.argv))
	.option("watch", { alias: "w", type: "boolean" });

async function build(f) {

	const t0 = Date.now();

	await Promise.all(configs.map(c => {

		return (path.normalize(c.outfile) === f) ? null : esbuild.build(c)
			.then(r => console.log(`Built ${c.outfile} in ${Date.now() - t0}ms`))
			.catch(() => process.exit(1));

	}));

}

if(argv.watch) {

	console.clear();
	console.log("Watching %s for changes…\n",
		srcDirs.join(", ").replace(/, ([^,]*)$/, " and $1"));

	watch(srcDirs).on("change", f => {

		console.clear();
		void build(path.normalize(f))

	});

}

void build();
