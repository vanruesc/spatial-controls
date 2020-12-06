import { BuildOptions, startService } from "esbuild";
import { watch } from "chokidar";
import { Stats } from "stats";
import * as path from "path";
import * as yargs from "yargs";
import configs from "./esbuild.config";

const argv = yargs.options({
	watch: { alias: "w", type: "boolean", default: false }
}).argv;

async function build(changedFile: string) {

	const service = await startService();
	const t0 = Date.now();

	try {

		for(const config of configs) {

			if(config.outfile !== changedFile) {

				await service.build(Object.assign({ bundle: true }, config));
				console.log(`Built ${config.outfile} in ${Date.now() - t0}ms`);

			}

		}

	} catch(e: Error) {

		console.error(e);

	} finally {

		service.stop();

	}

}

if(argv.watch) {

	const entryPoints: string[] = configs.reduce((a: string[], b: BuildOptions) => a.concat(b.entryPoints), []);
	const directories = Array.from(new Set(entryPoints.map((f: string) => path.dirname(f))));
	console.log(`Watching ${directories.join(", ").replace(/,\s([^,]*)$/, " and $1")} for changes…\n`);

	const watcher = watch(directories);
	watcher.on("change", (f: string) => void build(f));

}

void build(null);
