import { startService } from "esbuild";
import { watch } from "chokidar";
import * as path from "path";
import * as yargs from "yargs";
import { configs, srcDirs } from "./esbuild.config";

const { argv } = yargs.options({ watch: { alias: "w", type: "boolean" } });

async function build(changedFile: string = null): Promise<void> {

	const service = await startService();
	const t0 = Date.now();

	if(changedFile !== null) {

		console.clear();

	}

	await Promise.all(configs.map((c) => {

		let p: Promise<void> = null;

		if(path.normalize(c.outfile) !== changedFile) {

			p = service.build(c).then((result) => {

				console.log(`Built ${c.outfile} in ${Date.now() - t0}ms`);
				result.warnings.forEach((w) => console.warn(w.text,
					`${w.location.line}:${w.location.column} ${w.location.file}`));

			}).catch((e) => console.error(`Failed to build ${c.outfile}`));

		}

		return p;

	}));

}

if(argv.watch) {

	console.clear();
	console.log("Watching %s for changes…\n",
		srcDirs.join(", ").replace(/, ([^,]*)$/, " and $1"));

	const watcher = watch(srcDirs);
	watcher.on("change", (f: string) => void build(path.normalize(f)));

}

void build();
