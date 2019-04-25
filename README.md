# &Delta;c&omicron;n&tau;r&omicron;&iota;s

[![Build status](https://travis-ci.org/vanruesc/delta-controls.svg?branch=master)](https://travis-ci.org/vanruesc/delta-controls)
[![npm version](https://badgen.net/npm/v/delta-controls?color=green)](https://www.npmjs.com/package/delta-controls)
[![Peer dependencies](https://david-dm.org/vanruesc/delta-controls/peer-status.svg)](https://david-dm.org/vanruesc/delta-controls?type=peer)

A 3D movement controller that supports multiple movement modes and configurable input settings.

*[Demo](https://vanruesc.github.io/delta-controls/public/demo)&ensp;&middot;&ensp;[API Reference](https://vanruesc.github.io/delta-controls/public/docs)*


## Installation

This library requires the peer dependency [math-ds](https://github.com/vanruesc/math-ds).

```sh
npm install math-ds delta-controls
```


## Usage

Note: This library is compatible with the math classes from [three.js](https://threejs.org).

```javascript
import { Quaternion, Vector3 } from "math-ds";
import { DeltaControls } from "delta-controls";

const position = new Vector3();
const rotation = new Quaternion();
const domElement = document.getElementById("viewport");
const controls = new DeltaControls(position, rotation, domElement);

let t0 = performance.now();

(function render(t) {

	requestAnimationFrame(render);
	controls.update(t0 - t);
	t0 = t;

	// Render things.

}());
```


## Settings

#### Configuration

```js
import { Action, KeyCode } from "delta-controls";

const settings = controls.settings;
const keyBindings = settings.keyBindings;

// Activate or deactivate third person controls. Enabled by default.
controls.setOrbitEnabled(true|false);

settings.pointer.hold = true;
settings.rotation.minPolarAngle = 0.125;
settings.sensitivity.rotation = 0.075;
settings.translation.enabled = true;
settings.zoom.minDistance = 1.0;

keyBindings.delete(KeyCode.X);
keyBindings.set(KeyCode.V, Action.MOVE_DOWN);

```

#### Saving

```js
const settingsURL = settings.toDataURL();
const a = document.createElement("a");
a.href = settingsURL;
a.setAttribute("download", "controls.json");
a.click();
URL.revokeObjectURL(settingsURL);
```

#### Loading

```js
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", function() {

	if(this.readyState === 4 && this.status === 200) {

		controls.settings.copy(JSON.parse(this.responseText));

	}

});

request.open("GET", "./controls.json");
request.send();
```


## Contributing

Please refer to the [contribution guidelines](https://github.com/vanruesc/delta-controls/blob/master/.github/CONTRIBUTING.md) for details.
