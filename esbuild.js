import esbuild from "esbuild";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { watch } from "chokidar";
import { configs, srcDirs } from "./esbuild.config.js";

const { argv } = yargs(hideBin(process.argv))
	.option("watch", { alias: "w", type: "boolean" });

async function build(changedFile = null) {

	if(changedFile !== null) {

		console.clear();

	}

	const t0 = Date.now();

	await Promise.all(configs.map((c) => {

		let p = null;

		if(path.normalize(c.outfile) !== changedFile) {

			p = esbuild.build(c).then((result) => {

				console.log(`Built ${c.outfile} in ${Date.now() - t0}ms`);
				result.warnings.forEach((w) => console.warn(w.text,
					`${w.location.line}:${w.location.column} ${w.location.file}`));

			}).catch(() => process.exit(1));

		}

		return p;

	}));

}

if(argv.watch) {

	console.clear();
	console.log("Watching %s for changes…\n",
		srcDirs.join(", ").replace(/, ([^,]*)$/, " and $1"));

	const watcher = watch(srcDirs);
	watcher.on("change", (f) => void build(path.normalize(f)));

}

void build();
