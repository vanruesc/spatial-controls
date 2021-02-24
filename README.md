# Spatial Controls

[![CI](https://badgen.net/github/checks/vanruesc/spatial-controls/main)](https://github.com/vanruesc/spatial-controls/actions)
[![Version](https://badgen.net/npm/v/spatial-controls?color=green)](https://www.npmjs.com/package/spatial-controls)
[![Peer dependencies](https://badgen.net/david/peer/vanruesc/spatial-controls)](https://david-dm.org/vanruesc/spatial-controls?type=peer)

A 3D movement controller that supports multiple control modes and configurable input settings.

*[Demo](https://vanruesc.github.io/spatial-controls/public/demo)&ensp;&middot;&ensp;[Documentation](https://vanruesc.github.io/spatial-controls/public/docs)*


## Installation

This library requires the peer dependency [three](https://github.com/mrdoob/three.js/).

```sh
npm install three spatial-controls
```


## Usage

```js
import { Quaternion, Vector3 } from "three";
import { SpatialControls } from "spatial-controls";

const position = new Vector3();
const quaternion = new Quaternion();
const domElement = document.getElementById("viewport");
const controls = new SpatialControls(position, quaternion, domElement);

requestAnimationFrame(function render(timestamp) {

	requestAnimationFrame(render);
	controls.update(timestamp);

});
```

#### Position, Target and Quaternion

```js
// First person: Sets the position.
// Third person: Sets the target and adjusts the position.
controls.moveTo(x, y, z);
controls.moveTo(point);

// Sets or replaces the position and looks at the target.
controls.setPosition(x, y, z);
controls.setPosition(otherPosition);

// Sets or replaces the target and updates the quaternion.
controls.setTarget(x, y, z);
controls.setTarget(otherTarget);

// Same as setTarget() but doesn't replace the target.
controls.lookAt(x, y, z);
controls.lookAt(target);
```

## Settings

#### Configuration

```js
import { Action, ControlMode, KeyCode } from "spatial-controls";

const settings = controls.settings;
settings.general.setMode(ControlMode.THIRD_PERSON);
settings.zoom.setRange(0.25, 3.0);
settings.rotation.setSensitivity(2.2);
settings.translation.setSensitivity(0.25);

const keyBindings = settings.keyBindings;
keyBindings.delete(KeyCode.X);
keyBindings.set(KeyCode.V, Action.MOVE_DOWN);
```

### Saving and Loading

```js
// JSON round-trip.
const json = JSON.stringify(settings);
settings.fromJSON(json);

// Via local storage.
localStorage.setItem("spatial-controls", JSON.stringify(settings));
settings.fromJSON(localStorage.getItem("spatial-controls"));

// Save as JSON file.
const settingsURL = URL.createObjectURL(settings.toBlob());
const a = document.createElement("a");
a.setAttribute("href", settingsURL);
a.setAttribute("download", "spatial-controls.json");
a.click();
URL.revokeObjectURL(settingsURL);

// Load from JSON file.
fetch("./spatial-controls.json")
	.then(response => response.text())
	.then(data => settings.fromJSON(data))
	.catch(e => console.error(e));
```


## Contributing

Please refer to the [contribution guidelines](https://github.com/vanruesc/spatial-controls/blob/main/.github/CONTRIBUTING.md) for details.
