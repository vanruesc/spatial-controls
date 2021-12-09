import { PerspectiveCamera, sRGBEncoding, WebGLRenderer } from "three";
import { calculateVerticalFoV, DemoManager, DemoManagerEvent } from "three-demo";
import { SpatialControlsDemo } from "./demos/SpatialControlsDemo";

window.addEventListener("load", (event: Event) => {

	const debug = (window.location.href.indexOf("localhost") !== -1);
	const viewport = document.getElementById("viewport");

	const renderer = new WebGLRenderer({
		powerPreference: "high-performance",
		antialias: true,
		stencil: false,
		alpha: false,
		depth: true
	});

	renderer.outputEncoding = sRGBEncoding;
	renderer.debug.checkShaderErrors = debug;
	renderer.setSize(viewport.clientWidth, viewport.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setClearColor(0x000000, 0.0);

	const manager = new DemoManager(viewport, {
		aside: document.getElementById("aside"),
		renderer
	});

	manager.addEventListener("change", (event: DemoManagerEvent) => {

		document.querySelector(".loading").classList.remove("hidden");

	});

	manager.addEventListener("load", (event: DemoManagerEvent) => {

		document.querySelector(".loading").classList.add("hidden");

	});

	manager.addDemo(new SpatialControlsDemo());

	window.addEventListener("resize", (event: Event) => {

		const width = window.innerWidth;
		const height = window.innerHeight;
		const demo = manager.getCurrentDemo();

		if(demo !== null) {

			const camera = demo.getCamera() as PerspectiveCamera;
			const aspect = Math.max(width / height, 16 / 9);
			const vFoV = calculateVerticalFoV(90, aspect);
			camera.fov = vFoV;

		}

		manager.setSize(width, height);

	});

	requestAnimationFrame(function render(timestamp: number): void {

		requestAnimationFrame(render);
		manager.render(timestamp);

	});

});

document.addEventListener("DOMContentLoaded", (event: Event) => {

	const img = document.querySelector(".info img");
	const div = document.querySelector(".info div");

	if(img !== null && div !== null) {

		img.addEventListener("click", (event: Event) => {

			div.classList.toggle("hidden");

		});

	}

});

document.addEventListener("keyup", (event: KeyboardEvent) => {

	if(event.key === "h") {

		const aside = document.querySelector("aside");
		const footer = document.querySelector("footer");

		event.preventDefault();
		aside.classList.toggle("hidden");
		footer.classList.toggle("hidden");

	}

});
