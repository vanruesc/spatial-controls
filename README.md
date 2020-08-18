# Spatial Controls

[![Build status](https://travis-ci.org/vanruesc/spatial-controls.svg?branch=master)](https://travis-ci.org/vanruesc/spatial-controls)
[![npm version](https://badgen.net/npm/v/spatial-controls?color=green)](https://www.npmjs.com/package/spatial-controls)
[![Peer dependencies](https://david-dm.org/vanruesc/spatial-controls/peer-status.svg)](https://david-dm.org/vanruesc/spatial-controls?type=peer)

A 3D movement controller that supports multiple movement modes and configurable input settings.

*[Demo](https://vanruesc.github.io/spatial-controls/public/demo)&ensp;&middot;&ensp;[Documentation](https://vanruesc.github.io/spatial-controls/public/docs)*


## Installation

This library requires the peer dependency [three](https://github.com/mrdoob/three.js/).

```sh
npm install three spatial-controls
```


## Usage

```javascript
import { Clock, Quaternion, Vector3 } from "three";
import { SpatialControls } from "spatial-controls";

const position = new Vector3();
const rotation = new Quaternion();
const domElement = document.getElementById("viewport");
const controls = new SpatialControls(position, rotation, domElement);

const clock = new Clock();

(function render() {

	requestAnimationFrame(render);
	controls.update(clock.getDelta());

}());
```


## Settings

#### Configuration

```js
import { Action, KeyCode } from "spatial-controls";

const settings = controls.settings;
const keyBindings = settings.keyBindings;

// Activate or deactivate third person controls. Enabled by default.
controls.setOrbitEnabled(true|false);

settings.pointer.hold = true;
settings.rotation.minPolarAngle = 0.125;
settings.sensitivity.rotation = 1.2;
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

Please refer to the [contribution guidelines](https://github.com/vanruesc/spatial-controls/blob/master/.github/CONTRIBUTING.md) for details.
