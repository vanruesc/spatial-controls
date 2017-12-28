module.exports = {

	assets: {
		files: [{
			expand: true,
			cwd: "demo/assets",
			src: "**",
			dest: "public/demo",
			filter: "isFile"
		}]
	}

};
