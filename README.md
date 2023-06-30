# Spatial Controls

[![CI](https://github.com/vanruesc/spatial-controls/actions/workflows/ci.yml/badge.svg)](https://github.com/vanruesc/spatial-controls/actions/workflows/ci.yml)
[![Version](https://badgen.net/npm/v/spatial-controls?color=green)](https://www.npmjs.com/package/spatial-controls)

A movement controller for 3D objects and cameras that supports multiple control modes, smooth interpolation and configurable input settings.

*[Demo](https://vanruesc.github.io/spatial-controls/demo)&ensp;&middot;&ensp;[Documentation](https://vanruesc.github.io/spatial-controls/docs)*


## Installation

This library requires the peer dependency [three](https://github.com/mrdoob/three.js/).

```sh
npm install three spatial-controls
```


## Usage

```js
import { PerspectiveCamera } from "three";
import { SpatialControls } from "spatial-controls";

const camera = new PerspectiveCamera(...);
const { position, quaternion } = camera;
const domElement = document.getElementById("viewport");
const controls = new SpatialControls(position, quaternion, domElement);

requestAnimationFrame(function render(timestamp) {

	requestAnimationFrame(render);
	controls.update(timestamp);

});
```

#### Position, Target and Quaternion

The position, target and quaternion can be modified directly at any time. A subsequent `update()` call synchronizes the internal state of the controls. The `quaternion` has a higher priority than the `target`, meaning that changes to the `quaternion` will always set the `target`. The following methods are provided for convenience:

```js
// Sets or replaces the position vector.
controls.position.set(x, y, z);
controls.position = otherPosition;

// Sets or replaces the target vector.
controls.target.set(x, y, z);
controls.target = otherTarget;

// Sets the target without replacing it and updates the quaternion.
controls.lookAt(x, y, z);
controls.lookAt(target);
```

## Settings

### Configuration

```js
import { Action, ControlMode, KeyCode, PointerButton } from "spatial-controls";

const settings = controls.settings;
settings.general.mode = ControlMode.THIRD_PERSON;
settings.rotation.sensitivity = 2.2;
settings.rotation.damping = 0.05;
settings.translation.sensitivity = 0.25;
settings.translation.damping = 0.1;
settings.zoom.setRange(0.25, 3.0);
settings.zoom.damping = 0.1;

const keyBindings = settings.keyBindings;
keyBindings.delete(KeyCode.KEY_X);
keyBindings.set(KeyCode.KEY_V, Action.MOVE_DOWN);

const pointerBindings = settings.pointerBindings;
pointerBindings.delete(PointerButton.MAIN);
pointerBindings.set(PointerButton.SECONDARY, Action.ROTATE);

// The context menu can be disabled like this:
document.body.addEventListener("contextmenu", e => e.preventDefault());
```

See the [docs](https://vanruesc.github.io/spatial-controls/docs/classes/Settings.html) for more information.

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

## Constraints

Custom constraints are applied to the `position` in 1st person mode and to the `target` in 3rd person mode.

```js
const box = new Box3();
box.min.set(-1, -1, -1);
box.max.set(1, 1, 1);

const boxConstraint = (p: Vector3) => box.clampPoint(p, p);
controls.constraints.add(boxConstraint);
controls.constraints.delete(boxConstraint);
```


## Contributing

Please refer to the [contribution guidelines](https://github.com/vanruesc/spatial-controls/blob/main/.github/CONTRIBUTING.md) for details.
