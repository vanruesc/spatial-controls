/**
 * spatial-controls v3.0.1 build Fri Aug 28 2020
 * https://github.com/vanruesc/spatial-controls
 * Copyright 2020 Raoul van Rüschen
 * @license Zlib
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
    typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SPATIALCONTROLS = {}, global.THREE));
}(this, (function (exports, three) { 'use strict';

    (function (Action) {
        Action[Action["MOVE_FORWARD"] = 0] = "MOVE_FORWARD";
        Action[Action["MOVE_LEFT"] = 1] = "MOVE_LEFT";
        Action[Action["MOVE_BACKWARD"] = 2] = "MOVE_BACKWARD";
        Action[Action["MOVE_RIGHT"] = 3] = "MOVE_RIGHT";
        Action[Action["MOVE_DOWN"] = 4] = "MOVE_DOWN";
        Action[Action["MOVE_UP"] = 5] = "MOVE_UP";
        Action[Action["ZOOM_OUT"] = 6] = "ZOOM_OUT";
        Action[Action["ZOOM_IN"] = 7] = "ZOOM_IN";
    })(exports.Action || (exports.Action = {}));

    (function (PointerButton) {
        PointerButton[PointerButton["MAIN"] = 0] = "MAIN";
        PointerButton[PointerButton["AUXILIARY"] = 1] = "AUXILIARY";
        PointerButton[PointerButton["SECONDARY"] = 2] = "SECONDARY";
    })(exports.PointerButton || (exports.PointerButton = {}));

    var MovementState = function MovementState() {
        this.reset();
    };
    MovementState.prototype.reset = function reset () {
        this.left = false;
        this.right = false;
        this.forward = false;
        this.backward = false;
        this.up = false;
        this.down = false;
        return this;
    };

    var TWO_PI = Math.PI * 2;
    var v = new three.Vector3();
    var m = new three.Matrix4();
    var RotationManager = function RotationManager(position, quaternion, target, settings) {
        this.position = position;
        this.quaternion = quaternion;
        this.target = target;
        this.settings = settings;
        this.spherical = new three.Spherical();
    };
    RotationManager.prototype.setPosition = function setPosition (position) {
        this.position = position;
        return this;
    };
    RotationManager.prototype.setQuaternion = function setQuaternion (quaternion) {
        this.quaternion = quaternion;
        return this;
    };
    RotationManager.prototype.setTarget = function setTarget (target) {
        this.target = target;
        return this;
    };
    RotationManager.prototype.updateQuaternion = function updateQuaternion () {
        var settings = this.settings;
        var rotation = settings.rotation;
        if (settings.general.orbit) {
            m.lookAt(v.subVectors(this.position, this.target), rotation.pivotOffset, rotation.up);
        }
        else {
            m.lookAt(v.set(0, 0, 0), this.target.setFromSpherical(this.spherical), rotation.up);
        }
        this.quaternion.setFromRotationMatrix(m);
        return this;
    };
    RotationManager.prototype.adjustSpherical = function adjustSpherical (theta, phi) {
        var settings = this.settings;
        var orbit = settings.general.orbit;
        var rotation = settings.rotation;
        var s = this.spherical;
        s.theta = !rotation.invertX ? s.theta - theta : s.theta + theta;
        s.phi = ((orbit || rotation.invertY) && !(orbit && rotation.invertY)) ? s.phi - phi : s.phi + phi;
        s.theta = Math.min(Math.max(s.theta, rotation.minAzimuthalAngle), rotation.maxAzimuthalAngle);
        s.phi = Math.min(Math.max(s.phi, rotation.minPolarAngle), rotation.maxPolarAngle);
        s.theta %= TWO_PI;
        s.makeSafe();
        if (orbit) {
            this.position.setFromSpherical(s).add(this.target);
        }
        return this;
    };
    RotationManager.prototype.zoom = function zoom (sign) {
        var settings = this.settings;
        var general = settings.general;
        var sensitivity = settings.sensitivity;
        var zoom = settings.zoom;
        var s = this.spherical;
        if (general.orbit && zoom.enabled) {
            var amount = sign * sensitivity.zoom;
            if (zoom.invert) {
                amount = -amount;
            }
            var min = Math.max(zoom.minDistance, 1e-6);
            var max = Math.min(zoom.maxDistance, Number.POSITIVE_INFINITY);
            s.radius = Math.min(Math.max(s.radius + amount, min), max);
            this.position.setFromSpherical(s).add(this.target);
        }
        return this;
    };
    RotationManager.prototype.update = function update (deltaTime) { };
    RotationManager.prototype.lookAt = function lookAt (point) {
        var spherical = this.spherical;
        var position = this.position;
        var target = this.target;
        target.copy(point);
        if (this.settings.general.orbit) {
            v.subVectors(position, target);
        }
        else {
            v.subVectors(target, position).normalize();
        }
        spherical.setFromVector3(v);
        spherical.radius = Math.max(spherical.radius, 1e-6);
        this.updateQuaternion();
        return this;
    };
    RotationManager.prototype.getViewDirection = function getViewDirection (view) {
        view.setFromSpherical(this.spherical).normalize();
        if (this.settings.general.orbit) {
            view.negate();
        }
        return view;
    };

    var x = new three.Vector3(1, 0, 0);
    var y = new three.Vector3(0, 1, 0);
    var z = new three.Vector3(0, 0, 1);

    var v$1 = new three.Vector3();
    var TranslationManager = function TranslationManager(position, quaternion, target, settings) {
        this.position = position;
        this.quaternion = quaternion;
        this.target = target;
        this.settings = settings;
        this.movementState = new MovementState();
    };
    TranslationManager.prototype.setPosition = function setPosition (position) {
        this.position = position;
        return this;
    };
    TranslationManager.prototype.setQuaternion = function setQuaternion (quaternion) {
        this.quaternion = quaternion;
        return this;
    };
    TranslationManager.prototype.setTarget = function setTarget (target) {
        this.target = target;
        return this;
    };
    TranslationManager.prototype.translateOnAxis = function translateOnAxis (axis, distance) {
        v$1.copy(axis).applyQuaternion(this.quaternion).multiplyScalar(distance);
        this.position.add(v$1);
        if (this.settings.general.orbit) {
            this.target.add(v$1);
        }
    };
    TranslationManager.prototype.translate = function translate (deltaTime) {
        var sensitivity = this.settings.sensitivity;
        var state = this.movementState;
        var step = deltaTime * sensitivity.translation;
        if (state.backward) {
            this.translateOnAxis(z, step);
        }
        else if (state.forward) {
            this.translateOnAxis(z, -step);
        }
        if (state.right) {
            this.translateOnAxis(x, step);
        }
        else if (state.left) {
            this.translateOnAxis(x, -step);
        }
        if (state.up) {
            this.translateOnAxis(y, step);
        }
        else if (state.down) {
            this.translateOnAxis(y, -step);
        }
    };
    TranslationManager.prototype.update = function update (deltaTime) {
        if (this.settings.translation.enabled) {
            this.translate(deltaTime);
        }
    };
    TranslationManager.prototype.moveTo = function moveTo (position) {
        if (this.settings.general.orbit) {
            this.target.copy(position);
        }
        else {
            this.position.copy(position);
        }
        return this;
    };

    (function (KeyCode) {
        KeyCode[KeyCode["BACKSPACE"] = 8] = "BACKSPACE";
        KeyCode[KeyCode["TAB"] = 9] = "TAB";
        KeyCode[KeyCode["ENTER"] = 13] = "ENTER";
        KeyCode[KeyCode["SHIFT"] = 16] = "SHIFT";
        KeyCode[KeyCode["CTRL"] = 17] = "CTRL";
        KeyCode[KeyCode["ALT"] = 18] = "ALT";
        KeyCode[KeyCode["PAUSE"] = 19] = "PAUSE";
        KeyCode[KeyCode["CAPS_LOCK"] = 20] = "CAPS_LOCK";
        KeyCode[KeyCode["ESCAPE"] = 27] = "ESCAPE";
        KeyCode[KeyCode["SPACE"] = 32] = "SPACE";
        KeyCode[KeyCode["PAGE_UP"] = 33] = "PAGE_UP";
        KeyCode[KeyCode["PAGE_DOWN"] = 34] = "PAGE_DOWN";
        KeyCode[KeyCode["END"] = 35] = "END";
        KeyCode[KeyCode["HOME"] = 36] = "HOME";
        KeyCode[KeyCode["LEFT"] = 37] = "LEFT";
        KeyCode[KeyCode["UP"] = 38] = "UP";
        KeyCode[KeyCode["RIGHT"] = 39] = "RIGHT";
        KeyCode[KeyCode["DOWN"] = 40] = "DOWN";
        KeyCode[KeyCode["INSERT"] = 45] = "INSERT";
        KeyCode[KeyCode["DELETE"] = 46] = "DELETE";
        KeyCode[KeyCode["DIGIT_0"] = 48] = "DIGIT_0";
        KeyCode[KeyCode["DIGIT_1"] = 49] = "DIGIT_1";
        KeyCode[KeyCode["DIGIT_2"] = 50] = "DIGIT_2";
        KeyCode[KeyCode["DIGIT_3"] = 51] = "DIGIT_3";
        KeyCode[KeyCode["DIGIT_4"] = 52] = "DIGIT_4";
        KeyCode[KeyCode["DIGIT_5"] = 53] = "DIGIT_5";
        KeyCode[KeyCode["DIGIT_6"] = 54] = "DIGIT_6";
        KeyCode[KeyCode["DIGIT_7"] = 55] = "DIGIT_7";
        KeyCode[KeyCode["DIGIT_8"] = 56] = "DIGIT_8";
        KeyCode[KeyCode["DIGIT_9"] = 57] = "DIGIT_9";
        KeyCode[KeyCode["A"] = 65] = "A";
        KeyCode[KeyCode["B"] = 66] = "B";
        KeyCode[KeyCode["C"] = 67] = "C";
        KeyCode[KeyCode["D"] = 68] = "D";
        KeyCode[KeyCode["E"] = 69] = "E";
        KeyCode[KeyCode["F"] = 70] = "F";
        KeyCode[KeyCode["G"] = 71] = "G";
        KeyCode[KeyCode["H"] = 72] = "H";
        KeyCode[KeyCode["I"] = 73] = "I";
        KeyCode[KeyCode["J"] = 74] = "J";
        KeyCode[KeyCode["K"] = 75] = "K";
        KeyCode[KeyCode["L"] = 76] = "L";
        KeyCode[KeyCode["M"] = 77] = "M";
        KeyCode[KeyCode["N"] = 78] = "N";
        KeyCode[KeyCode["O"] = 79] = "O";
        KeyCode[KeyCode["P"] = 80] = "P";
        KeyCode[KeyCode["Q"] = 81] = "Q";
        KeyCode[KeyCode["R"] = 82] = "R";
        KeyCode[KeyCode["S"] = 83] = "S";
        KeyCode[KeyCode["T"] = 84] = "T";
        KeyCode[KeyCode["U"] = 85] = "U";
        KeyCode[KeyCode["V"] = 86] = "V";
        KeyCode[KeyCode["W"] = 87] = "W";
        KeyCode[KeyCode["X"] = 88] = "X";
        KeyCode[KeyCode["Y"] = 89] = "Y";
        KeyCode[KeyCode["Z"] = 90] = "Z";
        KeyCode[KeyCode["META_LEFT"] = 91] = "META_LEFT";
        KeyCode[KeyCode["META_RIGHT"] = 92] = "META_RIGHT";
        KeyCode[KeyCode["SELECT"] = 93] = "SELECT";
        KeyCode[KeyCode["NUMPAD_0"] = 96] = "NUMPAD_0";
        KeyCode[KeyCode["NUMPAD_1"] = 97] = "NUMPAD_1";
        KeyCode[KeyCode["NUMPAD_2"] = 98] = "NUMPAD_2";
        KeyCode[KeyCode["NUMPAD_3"] = 99] = "NUMPAD_3";
        KeyCode[KeyCode["NUMPAD_4"] = 100] = "NUMPAD_4";
        KeyCode[KeyCode["NUMPAD_5"] = 101] = "NUMPAD_5";
        KeyCode[KeyCode["NUMPAD_6"] = 102] = "NUMPAD_6";
        KeyCode[KeyCode["NUMPAD_7"] = 103] = "NUMPAD_7";
        KeyCode[KeyCode["NUMPAD_8"] = 104] = "NUMPAD_8";
        KeyCode[KeyCode["NUMPAD_9"] = 105] = "NUMPAD_9";
        KeyCode[KeyCode["MULTIPLY"] = 106] = "MULTIPLY";
        KeyCode[KeyCode["ADD"] = 107] = "ADD";
        KeyCode[KeyCode["SUBTRACT"] = 109] = "SUBTRACT";
        KeyCode[KeyCode["DECIMAL_POINT"] = 110] = "DECIMAL_POINT";
        KeyCode[KeyCode["DIVIDE"] = 111] = "DIVIDE";
        KeyCode[KeyCode["F1"] = 112] = "F1";
        KeyCode[KeyCode["F2"] = 113] = "F2";
        KeyCode[KeyCode["F3"] = 114] = "F3";
        KeyCode[KeyCode["F4"] = 115] = "F4";
        KeyCode[KeyCode["F5"] = 116] = "F5";
        KeyCode[KeyCode["F6"] = 117] = "F6";
        KeyCode[KeyCode["F7"] = 118] = "F7";
        KeyCode[KeyCode["F8"] = 119] = "F8";
        KeyCode[KeyCode["F9"] = 120] = "F9";
        KeyCode[KeyCode["F10"] = 121] = "F10";
        KeyCode[KeyCode["F11"] = 122] = "F11";
        KeyCode[KeyCode["F12"] = 123] = "F12";
        KeyCode[KeyCode["NUM_LOCK"] = 144] = "NUM_LOCK";
        KeyCode[KeyCode["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
        KeyCode[KeyCode["SEMICOLON"] = 186] = "SEMICOLON";
        KeyCode[KeyCode["EQUAL_SIGN"] = 187] = "EQUAL_SIGN";
        KeyCode[KeyCode["COMMA"] = 188] = "COMMA";
        KeyCode[KeyCode["DASH"] = 189] = "DASH";
        KeyCode[KeyCode["PERIOD"] = 190] = "PERIOD";
        KeyCode[KeyCode["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
        KeyCode[KeyCode["GRAVE_ACCENT"] = 192] = "GRAVE_ACCENT";
        KeyCode[KeyCode["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
        KeyCode[KeyCode["BACK_SLASH"] = 220] = "BACK_SLASH";
        KeyCode[KeyCode["CLOSE_BRACKET"] = 221] = "CLOSE_BRACKET";
        KeyCode[KeyCode["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
    })(exports.KeyCode || (exports.KeyCode = {}));

    var GeneralSettings = function GeneralSettings() {
        this.orbit = true;
    };
    GeneralSettings.prototype.copy = function copy (settings) {
        this.orbit = settings.orbit;
        return this;
    };
    GeneralSettings.prototype.clone = function clone () {
        var clone = new GeneralSettings();
        return clone.copy(this);
    };

    var KeyBindings = function KeyBindings() {
        this.defaultActions = new Map();
        this.actions = new Map();
    };
    KeyBindings.prototype.reset = function reset () {
        this.actions = new Map(this.defaultActions);
        return this;
    };
    KeyBindings.prototype.setDefault = function setDefault (actions) {
        this.defaultActions = actions;
        return this.reset();
    };
    KeyBindings.prototype.copy = function copy (keyBindings) {
        this.defaultActions = new Map(keyBindings.defaultActions);
        this.actions = new Map(keyBindings.actions);
        return this;
    };
    KeyBindings.prototype.clearDefault = function clearDefault () {
        this.defaultActions.clear();
        return this;
    };
    KeyBindings.prototype.clear = function clear () {
        this.actions.clear();
        return this;
    };
    KeyBindings.prototype.clone = function clone () {
        var clone = new KeyBindings();
        return clone.copy(this);
    };
    KeyBindings.prototype.has = function has (keyCode) {
        return this.actions.has(keyCode);
    };
    KeyBindings.prototype.get = function get (keyCode) {
        return this.actions.get(keyCode);
    };
    KeyBindings.prototype.set = function set (keyCode, action) {
        this.actions.set(keyCode, action);
        return this;
    };
    KeyBindings.prototype.delete = function delete$1 (keyCode) {
        return this.actions.delete(keyCode);
    };
    KeyBindings.prototype.toJSON = function toJSON () {
        return {
            defaultActions: [].concat( this.defaultActions ),
            actions: [].concat( this.actions )
        };
    };

    var PointerSettings = function PointerSettings() {
        this.hold = false;
        this.lock = true;
    };
    PointerSettings.prototype.copy = function copy (settings) {
        this.hold = settings.hold;
        this.lock = settings.lock;
        return this;
    };
    PointerSettings.prototype.clone = function clone () {
        var clone = new PointerSettings();
        return clone.copy(this);
    };

    var RotationSettings = function RotationSettings() {
        this.up = new three.Vector3();
        this.up.copy(y);
        this.pivotOffset = new three.Vector3();
        this.minAzimuthalAngle = Number.NEGATIVE_INFINITY;
        this.maxAzimuthalAngle = Number.POSITIVE_INFINITY;
        this.minPolarAngle = 0.0;
        this.maxPolarAngle = Math.PI;
        this.invertX = false;
        this.invertY = false;
    };
    RotationSettings.prototype.copy = function copy (settings) {
        this.up.copy(settings.up);
        this.pivotOffset.copy(settings.pivotOffset);
        this.minAzimuthalAngle = settings.minAzimuthalAngle;
        this.maxAzimuthalAngle = settings.maxAzimuthalAngle;
        this.minPolarAngle = settings.minPolarAngle;
        this.maxPolarAngle = settings.maxPolarAngle;
        this.invertX = settings.invertX;
        this.invertY = settings.invertY;
        return this;
    };
    RotationSettings.prototype.clone = function clone () {
        var clone = new RotationSettings();
        return clone.copy(this);
    };

    var SensitivitySettings = function SensitivitySettings() {
        this.rotationX = 1.0;
        this.rotationY = 1.0;
        this.translation = 1.0;
        this.zoom = 1.0;
    };

    var prototypeAccessors = { rotation: { configurable: true } };
    prototypeAccessors.rotation.set = function (value) {
        this.rotationX = this.rotationY = value;
    };
    SensitivitySettings.prototype.copy = function copy (settings) {
        this.rotationX = settings.rotationX;
        this.rotationY = settings.rotationY;
        this.translation = settings.translation;
        this.zoom = settings.zoom;
        return this;
    };
    SensitivitySettings.prototype.clone = function clone () {
        var clone = new SensitivitySettings();
        return clone.copy(this);
    };

    Object.defineProperties( SensitivitySettings.prototype, prototypeAccessors );

    var TranslationSettings = function TranslationSettings() {
        this.enabled = true;
    };
    TranslationSettings.prototype.copy = function copy (settings) {
        this.enabled = settings.enabled;
        return this;
    };
    TranslationSettings.prototype.clone = function clone () {
        var clone = new TranslationSettings();
        return clone.copy(this);
    };

    var ZoomSettings = function ZoomSettings() {
        this.enabled = true;
        this.invert = false;
        this.minDistance = 1e-6;
        this.maxDistance = Infinity;
    };
    ZoomSettings.prototype.copy = function copy (settings) {
        this.enabled = settings.enabled;
        this.invert = settings.invert;
        this.minDistance = settings.minDistance;
        this.maxDistance = settings.maxDistance;
        return this;
    };
    ZoomSettings.prototype.clone = function clone () {
        var clone = new ZoomSettings();
        return clone.copy(this);
    };

    var Settings = function Settings() {
        this.general = new GeneralSettings();
        this.keyBindings = new KeyBindings();
        this.keyBindings.setDefault(new Map([
            [exports.KeyCode.W, exports.Action.MOVE_FORWARD],
            [exports.KeyCode.UP, exports.Action.MOVE_FORWARD],
            [exports.KeyCode.A, exports.Action.MOVE_LEFT],
            [exports.KeyCode.LEFT, exports.Action.MOVE_LEFT],
            [exports.KeyCode.S, exports.Action.MOVE_BACKWARD],
            [exports.KeyCode.DOWN, exports.Action.MOVE_BACKWARD],
            [exports.KeyCode.D, exports.Action.MOVE_RIGHT],
            [exports.KeyCode.RIGHT, exports.Action.MOVE_RIGHT],
            [exports.KeyCode.X, exports.Action.MOVE_DOWN],
            [exports.KeyCode.SPACE, exports.Action.MOVE_UP],
            [exports.KeyCode.PAGE_DOWN, exports.Action.ZOOM_OUT],
            [exports.KeyCode.PAGE_UP, exports.Action.ZOOM_IN]
        ]));
        this.pointer = new PointerSettings();
        this.rotation = new RotationSettings();
        this.sensitivity = new SensitivitySettings();
        this.translation = new TranslationSettings();
        this.zoom = new ZoomSettings();
    };
    Settings.prototype.copy = function copy (settings) {
        this.general.copy(settings.general);
        this.keyBindings.copy(settings.keyBindings);
        this.pointer.copy(settings.pointer);
        this.rotation.copy(settings.rotation);
        this.sensitivity.copy(settings.sensitivity);
        this.translation.copy(settings.translation);
        this.zoom.copy(settings.zoom);
        return this;
    };
    Settings.prototype.clone = function clone () {
        var clone = new Settings();
        return clone.copy(this);
    };
    Settings.prototype.toDataURL = function toDataURL () {
        return URL.createObjectURL(new Blob([JSON.stringify(this)], {
            type: "text/json"
        }));
    };

    var MovementStrategy = function MovementStrategy(movementState, direction) {
        this.movementState = movementState;
        this.direction = direction;
    };
    MovementStrategy.prototype.execute = function execute (flag) {
        var state = this.movementState;
        switch (this.direction) {
            case exports.Direction.FORWARD:
                state.forward = flag;
                break;
            case exports.Direction.LEFT:
                state.left = flag;
                break;
            case exports.Direction.BACKWARD:
                state.backward = flag;
                break;
            case exports.Direction.RIGHT:
                state.right = flag;
                break;
            case exports.Direction.DOWN:
                state.down = flag;
                break;
            case exports.Direction.UP:
                state.up = flag;
                break;
        }
    };
    (function (Direction) {
        Direction[Direction["FORWARD"] = 0] = "FORWARD";
        Direction[Direction["LEFT"] = 1] = "LEFT";
        Direction[Direction["BACKWARD"] = 2] = "BACKWARD";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
        Direction[Direction["DOWN"] = 4] = "DOWN";
        Direction[Direction["UP"] = 5] = "UP";
    })(exports.Direction || (exports.Direction = {}));

    var ZoomStrategy = function ZoomStrategy(rotationManager, zoomIn) {
        this.rotationManager = rotationManager;
        this.zoomIn = zoomIn;
    };
    ZoomStrategy.prototype.execute = function execute (flag) {
        if (flag) {
            this.rotationManager.zoom(this.zoomIn ? -1 : 1);
        }
    };

    var SpatialControls = function SpatialControls(position, quaternion, domElement) {
        if ( position === void 0 ) position = null;
        if ( quaternion === void 0 ) quaternion = null;
        if ( domElement === void 0 ) domElement = document.body;

        this.domElement = domElement;
        this.position = position;
        this.quaternion = quaternion;
        this.target = new three.Vector3();
        this.settings = new Settings();
        this.rotationManager = new RotationManager(position, quaternion, this.target, this.settings);
        this.translationManager = new TranslationManager(position, quaternion, this.target, this.settings);
        var movementState = this.translationManager.movementState;
        this.strategies = new Map([
            [exports.Action.MOVE_FORWARD, new MovementStrategy(movementState, exports.Direction.FORWARD)],
            [exports.Action.MOVE_LEFT, new MovementStrategy(movementState, exports.Direction.LEFT)],
            [exports.Action.MOVE_BACKWARD, new MovementStrategy(movementState, exports.Direction.BACKWARD)],
            [exports.Action.MOVE_RIGHT, new MovementStrategy(movementState, exports.Direction.RIGHT)],
            [exports.Action.MOVE_DOWN, new MovementStrategy(movementState, exports.Direction.DOWN)],
            [exports.Action.MOVE_UP, new MovementStrategy(movementState, exports.Direction.UP)],
            [exports.Action.ZOOM_OUT, new ZoomStrategy(this.rotationManager, false)],
            [exports.Action.ZOOM_IN, new ZoomStrategy(this.rotationManager, true)]
        ]);
        this.lastScreenPosition = new three.Vector2();
        this.dragging = false;
        this.enabled = false;
        if (position !== null && quaternion !== null) {
            this.lookAt(this.target);
            if (domElement !== null) {
                this.setEnabled();
            }
        }
    };
    SpatialControls.prototype.getDomElement = function getDomElement () {
        return this.domElement;
    };
    SpatialControls.prototype.setDomElement = function setDomElement (domElement) {
        var enabled = this.enabled;
        if (domElement !== null) {
            if (enabled) {
                this.setEnabled(false);
            }
            this.domElement = domElement;
            this.setEnabled(enabled);
        }
        return this;
    };
    SpatialControls.prototype.getPosition = function getPosition () {
        return this.position;
    };
    SpatialControls.prototype.setPosition = function setPosition (position) {
        this.position = position;
        this.rotationManager.setPosition(position);
        this.translationManager.setPosition(position);
        return this.lookAt(this.target);
    };
    SpatialControls.prototype.getQuaternion = function getQuaternion () {
        return this.quaternion;
    };
    SpatialControls.prototype.setQuaternion = function setQuaternion (quaternion) {
        this.quaternion = quaternion;
        this.rotationManager.setQuaternion(quaternion);
        this.translationManager.setQuaternion(quaternion);
        return this.lookAt(this.target);
    };
    SpatialControls.prototype.getTarget = function getTarget (target) {
        target.copy(this.target);
        if (!this.settings.general.orbit) {
            target.add(this.position);
        }
        return target;
    };
    SpatialControls.prototype.setTarget = function setTarget (target) {
        this.target = target;
        this.rotationManager.setTarget(target);
        this.translationManager.setTarget(target);
        return this.lookAt(this.target);
    };
    SpatialControls.prototype.getViewDirection = function getViewDirection (view) {
        return this.rotationManager.getViewDirection(view);
    };
    SpatialControls.prototype.setOrbitEnabled = function setOrbitEnabled (orbit) {
        var general = this.settings.general;
        if (general.orbit !== orbit) {
            this.getTarget(this.target);
            general.orbit = orbit;
            this.lookAt(this.target);
        }
        return this;
    };
    SpatialControls.prototype.copy = function copy (controls) {
        this.domElement = controls.getDomElement();
        this.position = controls.getPosition();
        this.quaternion = controls.getQuaternion();
        this.target = controls.getTarget(new three.Vector3());
        this.settings.copy(controls.settings);
        this.rotationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);
        this.translationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);
        return this.lookAt(this.target);
    };
    SpatialControls.prototype.clone = function clone () {
        var clone = new SpatialControls();
        return clone.copy(this);
    };
    SpatialControls.prototype.handlePointerMoveEvent = function handlePointerMoveEvent (event) {
        var settings = this.settings;
        var pointer = settings.pointer;
        var sensitivity = settings.sensitivity;
        var rotationManager = this.rotationManager;
        var lastScreenPosition = this.lastScreenPosition;
        if (document.pointerLockElement === this.domElement) {
            if (!pointer.hold || this.dragging) {
                rotationManager.adjustSpherical(event.movementX * 0.001 * sensitivity.rotationX, event.movementY * 0.001 * sensitivity.rotationY).updateQuaternion();
            }
        }
        else {
            var movementX = event.screenX - lastScreenPosition.x;
            var movementY = event.screenY - lastScreenPosition.y;
            lastScreenPosition.set(event.screenX, event.screenY);
            rotationManager.adjustSpherical(movementX * 0.001 * sensitivity.rotationX, movementY * 0.001 * sensitivity.rotationY).updateQuaternion();
        }
    };
    SpatialControls.prototype.handleTouchMoveEvent = function handleTouchMoveEvent (event) {
        var sensitivity = this.settings.sensitivity;
        var rotationManager = this.rotationManager;
        var lastScreenPosition = this.lastScreenPosition;
        var touch = event.touches[0];
        var movementX = touch.screenX - lastScreenPosition.x;
        var movementY = touch.screenY - lastScreenPosition.y;
        lastScreenPosition.set(touch.screenX, touch.screenY);
        event.preventDefault();
        rotationManager.adjustSpherical(movementX * 0.001 * sensitivity.rotationX, movementY * 0.001 * sensitivity.rotationY).updateQuaternion();
    };
    SpatialControls.prototype.handleMainPointerButton = function handleMainPointerButton (event, pressed) {
        this.dragging = pressed;
        if (this.settings.pointer.lock) {
            this.setPointerLocked();
        }
        else {
            if (pressed) {
                this.lastScreenPosition.set(event.screenX, event.screenY);
                this.domElement.addEventListener("mousemove", this);
            }
            else {
                this.domElement.removeEventListener("mousemove", this);
            }
        }
    };
    SpatialControls.prototype.handleAuxiliaryPointerButton = function handleAuxiliaryPointerButton (event, pressed) { };
    SpatialControls.prototype.handleSecondaryPointerButton = function handleSecondaryPointerButton (event, pressed) { };
    SpatialControls.prototype.handlePointerButtonEvent = function handlePointerButtonEvent (event, pressed) {
        event.preventDefault();
        switch (event.button) {
            case exports.PointerButton.MAIN:
                this.handleMainPointerButton(event, pressed);
                break;
            case exports.PointerButton.AUXILIARY:
                this.handleAuxiliaryPointerButton(event, pressed);
                break;
            case exports.PointerButton.SECONDARY:
                this.handleSecondaryPointerButton(event, pressed);
                break;
        }
    };
    SpatialControls.prototype.handleTouchEvent = function handleTouchEvent (event, start) {
        var touch = event.touches[0];
        event.preventDefault();
        if (start) {
            this.lastScreenPosition.set(touch.screenX, touch.screenY);
            this.domElement.addEventListener("touchmove", this);
        }
        else {
            this.domElement.removeEventListener("touchmove", this);
        }
    };
    SpatialControls.prototype.handleKeyboardEvent = function handleKeyboardEvent (event, pressed) {
        var keyBindings = this.settings.keyBindings;
        if (keyBindings.has(event.keyCode)) {
            event.preventDefault();
            this.strategies.get(keyBindings.get(event.keyCode)).execute(pressed);
        }
    };
    SpatialControls.prototype.handleWheelEvent = function handleWheelEvent (event) {
        this.rotationManager.zoom(Math.sign(event.deltaY));
    };
    SpatialControls.prototype.handlePointerLockEvent = function handlePointerLockEvent () {
        if (document.pointerLockElement === this.domElement) {
            this.domElement.addEventListener("mousemove", this);
        }
        else {
            this.domElement.removeEventListener("mousemove", this);
        }
    };
    SpatialControls.prototype.handleEvent = function handleEvent (event) {
        switch (event.type) {
            case "mousemove":
                this.handlePointerMoveEvent(event);
                break;
            case "touchmove":
                this.handleTouchMoveEvent(event);
                break;
            case "mousedown":
                this.handlePointerButtonEvent(event, true);
                break;
            case "mouseup":
                this.handlePointerButtonEvent(event, false);
                break;
            case "touchstart":
                this.handleTouchEvent(event, true);
                break;
            case "touchend":
                this.handleTouchEvent(event, false);
                break;
            case "keydown":
                this.handleKeyboardEvent(event, true);
                break;
            case "keyup":
                this.handleKeyboardEvent(event, false);
                break;
            case "wheel":
                this.handleWheelEvent(event);
                break;
            case "pointerlockchange":
                this.handlePointerLockEvent();
                break;
        }
    };
    SpatialControls.prototype.update = function update (deltaTime) {
        this.rotationManager.update(deltaTime);
        this.translationManager.update(deltaTime);
    };
    SpatialControls.prototype.moveTo = function moveTo (position) {
        this.translationManager.moveTo(position);
        return this;
    };
    SpatialControls.prototype.lookAt = function lookAt (point) {
        this.rotationManager.lookAt(point);
        return this;
    };
    SpatialControls.prototype.setPointerLocked = function setPointerLocked (locked) {
            if ( locked === void 0 ) locked = true;

        if (locked) {
            if (document.pointerLockElement !== this.domElement &&
                this.domElement.requestPointerLock !== undefined) {
                this.domElement.requestPointerLock();
            }
        }
        else if (document.exitPointerLock !== undefined) {
            document.exitPointerLock();
        }
    };
    SpatialControls.prototype.setEnabled = function setEnabled (enabled) {
            if ( enabled === void 0 ) enabled = true;

        var domElement = this.domElement;
        this.translationManager.movementState.reset();
        if (enabled && !this.enabled) {
            document.addEventListener("pointerlockchange", this);
            document.body.addEventListener("keyup", this);
            document.body.addEventListener("keydown", this);
            domElement.addEventListener("mousedown", this);
            domElement.addEventListener("mouseup", this);
            domElement.addEventListener("touchstart", this);
            domElement.addEventListener("touchend", this);
            domElement.addEventListener("wheel", this);
        }
        else if (!enabled && this.enabled) {
            document.removeEventListener("pointerlockchange", this);
            document.body.removeEventListener("keyup", this);
            document.body.removeEventListener("keydown", this);
            domElement.removeEventListener("mousedown", this);
            domElement.removeEventListener("mouseup", this);
            domElement.removeEventListener("touchstart", this);
            domElement.removeEventListener("touchend", this);
            domElement.removeEventListener("wheel", this);
            domElement.removeEventListener("mousemove", this);
            domElement.removeEventListener("touchmove", this);
        }
        this.setPointerLocked(false);
        this.enabled = enabled;
        return this;
    };
    SpatialControls.prototype.dispose = function dispose () {
        this.setEnabled(false);
    };

    exports.GeneralSettings = GeneralSettings;
    exports.KeyBindings = KeyBindings;
    exports.MovementState = MovementState;
    exports.MovementStrategy = MovementStrategy;
    exports.PointerSettings = PointerSettings;
    exports.RotationManager = RotationManager;
    exports.RotationSettings = RotationSettings;
    exports.SensitivitySettings = SensitivitySettings;
    exports.Settings = Settings;
    exports.SpatialControls = SpatialControls;
    exports.TranslationManager = TranslationManager;
    exports.TranslationSettings = TranslationSettings;
    exports.ZoomSettings = ZoomSettings;
    exports.ZoomStrategy = ZoomStrategy;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
