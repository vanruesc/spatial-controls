/**
 * spatial-controls v3.0.4 build Sun Dec 06 2020
 * https://github.com/vanruesc/spatial-controls
 * Copyright 2020 Raoul van Rüschen
 * @license Zlib
 */
var SPATIALCONTROLS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    Action: () => Action,
    Direction: () => Direction,
    GeneralSettings: () => GeneralSettings,
    KeyBindings: () => KeyBindings,
    KeyCode: () => KeyCode,
    MovementState: () => MovementState,
    MovementStrategy: () => MovementStrategy,
    PointerButton: () => PointerButton,
    PointerSettings: () => PointerSettings,
    RotationManager: () => RotationManager,
    RotationSettings: () => RotationSettings,
    SensitivitySettings: () => SensitivitySettings,
    Settings: () => Settings,
    SpatialControls: () => SpatialControls,
    TranslationManager: () => TranslationManager,
    TranslationSettings: () => TranslationSettings,
    ZoomSettings: () => ZoomSettings,
    ZoomStrategy: () => ZoomStrategy
  });

  // src/core/Action.ts
  var Action;
  (function(Action4) {
    Action4[Action4["MOVE_FORWARD"] = 0] = "MOVE_FORWARD";
    Action4[Action4["MOVE_LEFT"] = 1] = "MOVE_LEFT";
    Action4[Action4["MOVE_BACKWARD"] = 2] = "MOVE_BACKWARD";
    Action4[Action4["MOVE_RIGHT"] = 3] = "MOVE_RIGHT";
    Action4[Action4["MOVE_DOWN"] = 4] = "MOVE_DOWN";
    Action4[Action4["MOVE_UP"] = 5] = "MOVE_UP";
    Action4[Action4["ZOOM_OUT"] = 6] = "ZOOM_OUT";
    Action4[Action4["ZOOM_IN"] = 7] = "ZOOM_IN";
  })(Action || (Action = {}));

  // src/core/SpatialControls.ts
  var three5 = __toModule(require("three"));

  // src/input/PointerButton.ts
  var PointerButton;
  (function(PointerButton3) {
    PointerButton3[PointerButton3["MAIN"] = 0] = "MAIN";
    PointerButton3[PointerButton3["AUXILIARY"] = 1] = "AUXILIARY";
    PointerButton3[PointerButton3["SECONDARY"] = 2] = "SECONDARY";
  })(PointerButton || (PointerButton = {}));

  // src/managers/MovementState.ts
  var MovementState = class {
    constructor() {
      this.reset();
    }
    reset() {
      this.left = false;
      this.right = false;
      this.forward = false;
      this.backward = false;
      this.up = false;
      this.down = false;
      return this;
    }
  };

  // src/managers/RotationManager.ts
  var three = __toModule(require("three"));
  var TWO_PI = Math.PI * 2;
  var v = new three.Vector3();
  var m = new three.Matrix4();
  var RotationManager = class {
    constructor(position, quaternion, target, settings) {
      this.position = position;
      this.quaternion = quaternion;
      this.target = target;
      this.settings = settings;
      this.spherical = new three.Spherical();
    }
    setPosition(position) {
      this.position = position;
      return this;
    }
    setQuaternion(quaternion) {
      this.quaternion = quaternion;
      return this;
    }
    setTarget(target) {
      this.target = target;
      return this;
    }
    updateQuaternion() {
      const settings = this.settings;
      const rotation = settings.rotation;
      if (settings.general.orbit) {
        m.lookAt(v.subVectors(this.position, this.target), rotation.pivotOffset, rotation.up);
      } else {
        m.lookAt(v.set(0, 0, 0), this.target.setFromSpherical(this.spherical), rotation.up);
      }
      this.quaternion.setFromRotationMatrix(m);
      return this;
    }
    adjustSpherical(theta, phi) {
      const settings = this.settings;
      const orbit = settings.general.orbit;
      const rotation = settings.rotation;
      const s = this.spherical;
      s.theta = !rotation.invertX ? s.theta - theta : s.theta + theta;
      s.phi = (orbit || rotation.invertY) && !(orbit && rotation.invertY) ? s.phi - phi : s.phi + phi;
      s.theta = Math.min(Math.max(s.theta, rotation.minAzimuthalAngle), rotation.maxAzimuthalAngle);
      s.phi = Math.min(Math.max(s.phi, rotation.minPolarAngle), rotation.maxPolarAngle);
      s.theta %= TWO_PI;
      s.makeSafe();
      if (orbit) {
        this.position.setFromSpherical(s).add(this.target);
      }
      return this;
    }
    zoom(sign) {
      const settings = this.settings;
      const general = settings.general;
      const sensitivity = settings.sensitivity;
      const zoom = settings.zoom;
      const s = this.spherical;
      if (general.orbit && zoom.enabled) {
        let amount = sign * sensitivity.zoom;
        if (zoom.invert) {
          amount = -amount;
        }
        const min = Math.max(zoom.minDistance, 1e-6);
        const max = Math.min(zoom.maxDistance, Number.POSITIVE_INFINITY);
        s.radius = Math.min(Math.max(s.radius + amount, min), max);
        this.position.setFromSpherical(s).add(this.target);
      }
      return this;
    }
    update(deltaTime) {
    }
    lookAt(point) {
      const spherical = this.spherical;
      const position = this.position;
      const target = this.target;
      target.copy(point);
      if (this.settings.general.orbit) {
        v.subVectors(position, target);
      } else {
        v.subVectors(target, position).normalize();
      }
      spherical.setFromVector3(v);
      spherical.radius = Math.max(spherical.radius, 1e-6);
      this.updateQuaternion();
      return this;
    }
    getViewDirection(view) {
      view.setFromSpherical(this.spherical).normalize();
      if (this.settings.general.orbit) {
        view.negate();
      }
      return view;
    }
  };

  // src/managers/TranslationManager.ts
  var three3 = __toModule(require("three"));

  // src/core/axes.ts
  var three2 = __toModule(require("three"));
  var x = new three2.Vector3(1, 0, 0);
  var y = new three2.Vector3(0, 1, 0);
  var z = new three2.Vector3(0, 0, 1);

  // src/managers/TranslationManager.ts
  var v2 = new three3.Vector3();
  var TranslationManager = class {
    constructor(position, quaternion, target, settings) {
      this.position = position;
      this.quaternion = quaternion;
      this.target = target;
      this.settings = settings;
      this.movementState = new MovementState();
    }
    setPosition(position) {
      this.position = position;
      return this;
    }
    setQuaternion(quaternion) {
      this.quaternion = quaternion;
      return this;
    }
    setTarget(target) {
      this.target = target;
      return this;
    }
    translateOnAxis(axis, distance) {
      v2.copy(axis).applyQuaternion(this.quaternion).multiplyScalar(distance);
      this.position.add(v2);
      if (this.settings.general.orbit) {
        this.target.add(v2);
      }
    }
    translate(deltaTime) {
      const sensitivity = this.settings.sensitivity;
      const state = this.movementState;
      const step = deltaTime * sensitivity.translation;
      if (state.backward) {
        this.translateOnAxis(z, step);
      } else if (state.forward) {
        this.translateOnAxis(z, -step);
      }
      if (state.right) {
        this.translateOnAxis(x, step);
      } else if (state.left) {
        this.translateOnAxis(x, -step);
      }
      if (state.up) {
        this.translateOnAxis(y, step);
      } else if (state.down) {
        this.translateOnAxis(y, -step);
      }
    }
    update(deltaTime) {
      if (this.settings.translation.enabled) {
        this.translate(deltaTime);
      }
    }
    moveTo(position) {
      if (this.settings.general.orbit) {
        this.target.copy(position);
      } else {
        this.position.copy(position);
      }
      return this;
    }
  };

  // src/input/KeyCode.ts
  var KeyCode;
  (function(KeyCode3) {
    KeyCode3[KeyCode3["BACKSPACE"] = 8] = "BACKSPACE";
    KeyCode3[KeyCode3["TAB"] = 9] = "TAB";
    KeyCode3[KeyCode3["ENTER"] = 13] = "ENTER";
    KeyCode3[KeyCode3["SHIFT"] = 16] = "SHIFT";
    KeyCode3[KeyCode3["CTRL"] = 17] = "CTRL";
    KeyCode3[KeyCode3["ALT"] = 18] = "ALT";
    KeyCode3[KeyCode3["PAUSE"] = 19] = "PAUSE";
    KeyCode3[KeyCode3["CAPS_LOCK"] = 20] = "CAPS_LOCK";
    KeyCode3[KeyCode3["ESCAPE"] = 27] = "ESCAPE";
    KeyCode3[KeyCode3["SPACE"] = 32] = "SPACE";
    KeyCode3[KeyCode3["PAGE_UP"] = 33] = "PAGE_UP";
    KeyCode3[KeyCode3["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KeyCode3[KeyCode3["END"] = 35] = "END";
    KeyCode3[KeyCode3["HOME"] = 36] = "HOME";
    KeyCode3[KeyCode3["LEFT"] = 37] = "LEFT";
    KeyCode3[KeyCode3["UP"] = 38] = "UP";
    KeyCode3[KeyCode3["RIGHT"] = 39] = "RIGHT";
    KeyCode3[KeyCode3["DOWN"] = 40] = "DOWN";
    KeyCode3[KeyCode3["INSERT"] = 45] = "INSERT";
    KeyCode3[KeyCode3["DELETE"] = 46] = "DELETE";
    KeyCode3[KeyCode3["DIGIT_0"] = 48] = "DIGIT_0";
    KeyCode3[KeyCode3["DIGIT_1"] = 49] = "DIGIT_1";
    KeyCode3[KeyCode3["DIGIT_2"] = 50] = "DIGIT_2";
    KeyCode3[KeyCode3["DIGIT_3"] = 51] = "DIGIT_3";
    KeyCode3[KeyCode3["DIGIT_4"] = 52] = "DIGIT_4";
    KeyCode3[KeyCode3["DIGIT_5"] = 53] = "DIGIT_5";
    KeyCode3[KeyCode3["DIGIT_6"] = 54] = "DIGIT_6";
    KeyCode3[KeyCode3["DIGIT_7"] = 55] = "DIGIT_7";
    KeyCode3[KeyCode3["DIGIT_8"] = 56] = "DIGIT_8";
    KeyCode3[KeyCode3["DIGIT_9"] = 57] = "DIGIT_9";
    KeyCode3[KeyCode3["A"] = 65] = "A";
    KeyCode3[KeyCode3["B"] = 66] = "B";
    KeyCode3[KeyCode3["C"] = 67] = "C";
    KeyCode3[KeyCode3["D"] = 68] = "D";
    KeyCode3[KeyCode3["E"] = 69] = "E";
    KeyCode3[KeyCode3["F"] = 70] = "F";
    KeyCode3[KeyCode3["G"] = 71] = "G";
    KeyCode3[KeyCode3["H"] = 72] = "H";
    KeyCode3[KeyCode3["I"] = 73] = "I";
    KeyCode3[KeyCode3["J"] = 74] = "J";
    KeyCode3[KeyCode3["K"] = 75] = "K";
    KeyCode3[KeyCode3["L"] = 76] = "L";
    KeyCode3[KeyCode3["M"] = 77] = "M";
    KeyCode3[KeyCode3["N"] = 78] = "N";
    KeyCode3[KeyCode3["O"] = 79] = "O";
    KeyCode3[KeyCode3["P"] = 80] = "P";
    KeyCode3[KeyCode3["Q"] = 81] = "Q";
    KeyCode3[KeyCode3["R"] = 82] = "R";
    KeyCode3[KeyCode3["S"] = 83] = "S";
    KeyCode3[KeyCode3["T"] = 84] = "T";
    KeyCode3[KeyCode3["U"] = 85] = "U";
    KeyCode3[KeyCode3["V"] = 86] = "V";
    KeyCode3[KeyCode3["W"] = 87] = "W";
    KeyCode3[KeyCode3["X"] = 88] = "X";
    KeyCode3[KeyCode3["Y"] = 89] = "Y";
    KeyCode3[KeyCode3["Z"] = 90] = "Z";
    KeyCode3[KeyCode3["META_LEFT"] = 91] = "META_LEFT";
    KeyCode3[KeyCode3["META_RIGHT"] = 92] = "META_RIGHT";
    KeyCode3[KeyCode3["SELECT"] = 93] = "SELECT";
    KeyCode3[KeyCode3["NUMPAD_0"] = 96] = "NUMPAD_0";
    KeyCode3[KeyCode3["NUMPAD_1"] = 97] = "NUMPAD_1";
    KeyCode3[KeyCode3["NUMPAD_2"] = 98] = "NUMPAD_2";
    KeyCode3[KeyCode3["NUMPAD_3"] = 99] = "NUMPAD_3";
    KeyCode3[KeyCode3["NUMPAD_4"] = 100] = "NUMPAD_4";
    KeyCode3[KeyCode3["NUMPAD_5"] = 101] = "NUMPAD_5";
    KeyCode3[KeyCode3["NUMPAD_6"] = 102] = "NUMPAD_6";
    KeyCode3[KeyCode3["NUMPAD_7"] = 103] = "NUMPAD_7";
    KeyCode3[KeyCode3["NUMPAD_8"] = 104] = "NUMPAD_8";
    KeyCode3[KeyCode3["NUMPAD_9"] = 105] = "NUMPAD_9";
    KeyCode3[KeyCode3["MULTIPLY"] = 106] = "MULTIPLY";
    KeyCode3[KeyCode3["ADD"] = 107] = "ADD";
    KeyCode3[KeyCode3["SUBTRACT"] = 109] = "SUBTRACT";
    KeyCode3[KeyCode3["DECIMAL_POINT"] = 110] = "DECIMAL_POINT";
    KeyCode3[KeyCode3["DIVIDE"] = 111] = "DIVIDE";
    KeyCode3[KeyCode3["F1"] = 112] = "F1";
    KeyCode3[KeyCode3["F2"] = 113] = "F2";
    KeyCode3[KeyCode3["F3"] = 114] = "F3";
    KeyCode3[KeyCode3["F4"] = 115] = "F4";
    KeyCode3[KeyCode3["F5"] = 116] = "F5";
    KeyCode3[KeyCode3["F6"] = 117] = "F6";
    KeyCode3[KeyCode3["F7"] = 118] = "F7";
    KeyCode3[KeyCode3["F8"] = 119] = "F8";
    KeyCode3[KeyCode3["F9"] = 120] = "F9";
    KeyCode3[KeyCode3["F10"] = 121] = "F10";
    KeyCode3[KeyCode3["F11"] = 122] = "F11";
    KeyCode3[KeyCode3["F12"] = 123] = "F12";
    KeyCode3[KeyCode3["NUM_LOCK"] = 144] = "NUM_LOCK";
    KeyCode3[KeyCode3["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
    KeyCode3[KeyCode3["SEMICOLON"] = 186] = "SEMICOLON";
    KeyCode3[KeyCode3["EQUAL_SIGN"] = 187] = "EQUAL_SIGN";
    KeyCode3[KeyCode3["COMMA"] = 188] = "COMMA";
    KeyCode3[KeyCode3["DASH"] = 189] = "DASH";
    KeyCode3[KeyCode3["PERIOD"] = 190] = "PERIOD";
    KeyCode3[KeyCode3["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
    KeyCode3[KeyCode3["GRAVE_ACCENT"] = 192] = "GRAVE_ACCENT";
    KeyCode3[KeyCode3["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
    KeyCode3[KeyCode3["BACK_SLASH"] = 220] = "BACK_SLASH";
    KeyCode3[KeyCode3["CLOSE_BRACKET"] = 221] = "CLOSE_BRACKET";
    KeyCode3[KeyCode3["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
  })(KeyCode || (KeyCode = {}));

  // src/settings/GeneralSettings.ts
  var GeneralSettings = class {
    constructor() {
      this.orbit = true;
    }
    copy(settings) {
      this.orbit = settings.orbit;
      return this;
    }
    clone() {
      const clone = new GeneralSettings();
      return clone.copy(this);
    }
  };

  // src/settings/KeyBindings.ts
  var KeyBindings = class {
    constructor() {
      this.defaultActions = new Map();
      this.actions = new Map();
    }
    reset() {
      this.actions = new Map(this.defaultActions);
      return this;
    }
    setDefault(actions) {
      this.defaultActions = actions;
      return this.reset();
    }
    copy(keyBindings) {
      this.defaultActions = new Map(keyBindings.defaultActions);
      this.actions = new Map(keyBindings.actions);
      return this;
    }
    clearDefault() {
      this.defaultActions.clear();
      return this;
    }
    clear() {
      this.actions.clear();
      return this;
    }
    clone() {
      const clone = new KeyBindings();
      return clone.copy(this);
    }
    has(keyCode) {
      return this.actions.has(keyCode);
    }
    get(keyCode) {
      return this.actions.get(keyCode);
    }
    set(keyCode, action) {
      this.actions.set(keyCode, action);
      return this;
    }
    delete(keyCode) {
      return this.actions.delete(keyCode);
    }
    toJSON() {
      return {
        defaultActions: [...this.defaultActions],
        actions: [...this.actions]
      };
    }
  };

  // src/settings/PointerSettings.ts
  var PointerSettings = class {
    constructor() {
      this.hold = false;
      this.lock = true;
    }
    copy(settings) {
      this.hold = settings.hold;
      this.lock = settings.lock;
      return this;
    }
    clone() {
      const clone = new PointerSettings();
      return clone.copy(this);
    }
  };

  // src/settings/RotationSettings.ts
  var three4 = __toModule(require("three"));
  var RotationSettings = class {
    constructor() {
      this.up = new three4.Vector3();
      this.up.copy(y);
      this.pivotOffset = new three4.Vector3();
      this.minAzimuthalAngle = Number.NEGATIVE_INFINITY;
      this.maxAzimuthalAngle = Number.POSITIVE_INFINITY;
      this.minPolarAngle = 0;
      this.maxPolarAngle = Math.PI;
      this.invertX = false;
      this.invertY = false;
    }
    copy(settings) {
      this.up.copy(settings.up);
      this.pivotOffset.copy(settings.pivotOffset);
      this.minAzimuthalAngle = settings.minAzimuthalAngle;
      this.maxAzimuthalAngle = settings.maxAzimuthalAngle;
      this.minPolarAngle = settings.minPolarAngle;
      this.maxPolarAngle = settings.maxPolarAngle;
      this.invertX = settings.invertX;
      this.invertY = settings.invertY;
      return this;
    }
    clone() {
      const clone = new RotationSettings();
      return clone.copy(this);
    }
  };

  // src/settings/SensitivitySettings.ts
  var SensitivitySettings = class {
    constructor() {
      this.rotationX = 1;
      this.rotationY = 1;
      this.translation = 1;
      this.zoom = 1;
    }
    set rotation(value) {
      this.rotationX = this.rotationY = value;
    }
    copy(settings) {
      this.rotationX = settings.rotationX;
      this.rotationY = settings.rotationY;
      this.translation = settings.translation;
      this.zoom = settings.zoom;
      return this;
    }
    clone() {
      const clone = new SensitivitySettings();
      return clone.copy(this);
    }
  };

  // src/settings/TranslationSettings.ts
  var TranslationSettings = class {
    constructor() {
      this.enabled = true;
    }
    copy(settings) {
      this.enabled = settings.enabled;
      return this;
    }
    clone() {
      const clone = new TranslationSettings();
      return clone.copy(this);
    }
  };

  // src/settings/ZoomSettings.ts
  var ZoomSettings = class {
    constructor() {
      this.enabled = true;
      this.invert = false;
      this.minDistance = 1e-6;
      this.maxDistance = Infinity;
    }
    copy(settings) {
      this.enabled = settings.enabled;
      this.invert = settings.invert;
      this.minDistance = settings.minDistance;
      this.maxDistance = settings.maxDistance;
      return this;
    }
    clone() {
      const clone = new ZoomSettings();
      return clone.copy(this);
    }
  };

  // src/settings/Settings.ts
  var Settings = class {
    constructor() {
      this.general = new GeneralSettings();
      this.keyBindings = new KeyBindings();
      this.keyBindings.setDefault(new Map([
        [KeyCode.W, Action.MOVE_FORWARD],
        [KeyCode.UP, Action.MOVE_FORWARD],
        [KeyCode.A, Action.MOVE_LEFT],
        [KeyCode.LEFT, Action.MOVE_LEFT],
        [KeyCode.S, Action.MOVE_BACKWARD],
        [KeyCode.DOWN, Action.MOVE_BACKWARD],
        [KeyCode.D, Action.MOVE_RIGHT],
        [KeyCode.RIGHT, Action.MOVE_RIGHT],
        [KeyCode.X, Action.MOVE_DOWN],
        [KeyCode.SPACE, Action.MOVE_UP],
        [KeyCode.PAGE_DOWN, Action.ZOOM_OUT],
        [KeyCode.PAGE_UP, Action.ZOOM_IN]
      ]));
      this.pointer = new PointerSettings();
      this.rotation = new RotationSettings();
      this.sensitivity = new SensitivitySettings();
      this.translation = new TranslationSettings();
      this.zoom = new ZoomSettings();
    }
    copy(settings) {
      this.general.copy(settings.general);
      this.keyBindings.copy(settings.keyBindings);
      this.pointer.copy(settings.pointer);
      this.rotation.copy(settings.rotation);
      this.sensitivity.copy(settings.sensitivity);
      this.translation.copy(settings.translation);
      this.zoom.copy(settings.zoom);
      return this;
    }
    clone() {
      const clone = new Settings();
      return clone.copy(this);
    }
    toDataURL() {
      return URL.createObjectURL(new Blob([JSON.stringify(this)], {
        type: "text/json"
      }));
    }
  };

  // src/strategies/MovementStrategy.ts
  var MovementStrategy = class {
    constructor(movementState, direction) {
      this.movementState = movementState;
      this.direction = direction;
    }
    execute(flag) {
      const state = this.movementState;
      switch (this.direction) {
        case Direction.FORWARD:
          state.forward = flag;
          break;
        case Direction.LEFT:
          state.left = flag;
          break;
        case Direction.BACKWARD:
          state.backward = flag;
          break;
        case Direction.RIGHT:
          state.right = flag;
          break;
        case Direction.DOWN:
          state.down = flag;
          break;
        case Direction.UP:
          state.up = flag;
          break;
      }
    }
  };
  var Direction;
  (function(Direction2) {
    Direction2[Direction2["FORWARD"] = 0] = "FORWARD";
    Direction2[Direction2["LEFT"] = 1] = "LEFT";
    Direction2[Direction2["BACKWARD"] = 2] = "BACKWARD";
    Direction2[Direction2["RIGHT"] = 3] = "RIGHT";
    Direction2[Direction2["DOWN"] = 4] = "DOWN";
    Direction2[Direction2["UP"] = 5] = "UP";
  })(Direction || (Direction = {}));

  // src/strategies/ZoomStrategy.ts
  var ZoomStrategy = class {
    constructor(rotationManager, zoomIn) {
      this.rotationManager = rotationManager;
      this.zoomIn = zoomIn;
    }
    execute(flag) {
      if (flag) {
        this.rotationManager.zoom(this.zoomIn ? -1 : 1);
      }
    }
  };

  // src/core/SpatialControls.ts
  var SpatialControls = class {
    constructor(position = null, quaternion = null, domElement = document.body) {
      this.domElement = domElement;
      this.position = position;
      this.quaternion = quaternion;
      this.target = new three5.Vector3();
      this.settings = new Settings();
      this.rotationManager = new RotationManager(position, quaternion, this.target, this.settings);
      this.translationManager = new TranslationManager(position, quaternion, this.target, this.settings);
      const movementState = this.translationManager.movementState;
      this.strategies = new Map([
        [Action.MOVE_FORWARD, new MovementStrategy(movementState, Direction.FORWARD)],
        [Action.MOVE_LEFT, new MovementStrategy(movementState, Direction.LEFT)],
        [Action.MOVE_BACKWARD, new MovementStrategy(movementState, Direction.BACKWARD)],
        [Action.MOVE_RIGHT, new MovementStrategy(movementState, Direction.RIGHT)],
        [Action.MOVE_DOWN, new MovementStrategy(movementState, Direction.DOWN)],
        [Action.MOVE_UP, new MovementStrategy(movementState, Direction.UP)],
        [Action.ZOOM_OUT, new ZoomStrategy(this.rotationManager, false)],
        [Action.ZOOM_IN, new ZoomStrategy(this.rotationManager, true)]
      ]);
      this.lastScreenPosition = new three5.Vector2();
      this.dragging = false;
      this.enabled = false;
      if (position !== null && quaternion !== null) {
        this.lookAt(this.target);
        if (domElement !== null) {
          this.setEnabled();
        }
      }
    }
    getDomElement() {
      return this.domElement;
    }
    setDomElement(domElement) {
      const enabled = this.enabled;
      if (domElement !== null) {
        if (enabled) {
          this.setEnabled(false);
        }
        this.domElement = domElement;
        this.setEnabled(enabled);
      }
      return this;
    }
    getPosition() {
      return this.position;
    }
    setPosition(position) {
      this.position = position;
      this.rotationManager.setPosition(position);
      this.translationManager.setPosition(position);
      return this.lookAt(this.target);
    }
    getQuaternion() {
      return this.quaternion;
    }
    setQuaternion(quaternion) {
      this.quaternion = quaternion;
      this.rotationManager.setQuaternion(quaternion);
      this.translationManager.setQuaternion(quaternion);
      return this.lookAt(this.target);
    }
    getTarget(target) {
      target.copy(this.target);
      if (!this.settings.general.orbit) {
        target.add(this.position);
      }
      return target;
    }
    setTarget(target) {
      this.target = target;
      this.rotationManager.setTarget(target);
      this.translationManager.setTarget(target);
      return this.lookAt(this.target);
    }
    getViewDirection(view) {
      return this.rotationManager.getViewDirection(view);
    }
    setOrbitEnabled(orbit) {
      const general = this.settings.general;
      if (general.orbit !== orbit) {
        this.getTarget(this.target);
        general.orbit = orbit;
        this.lookAt(this.target);
      }
      return this;
    }
    copy(controls) {
      this.domElement = controls.getDomElement();
      this.position = controls.getPosition();
      this.quaternion = controls.getQuaternion();
      this.target = controls.getTarget(new three5.Vector3());
      this.settings.copy(controls.settings);
      this.rotationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);
      this.translationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);
      return this.lookAt(this.target);
    }
    clone() {
      const clone = new SpatialControls();
      return clone.copy(this);
    }
    handlePointerMoveEvent(event) {
      const settings = this.settings;
      const pointer = settings.pointer;
      const sensitivity = settings.sensitivity;
      const rotationManager = this.rotationManager;
      const lastScreenPosition = this.lastScreenPosition;
      if (document.pointerLockElement === this.domElement) {
        if (!pointer.hold || this.dragging) {
          rotationManager.adjustSpherical(event.movementX * 1e-3 * sensitivity.rotationX, event.movementY * 1e-3 * sensitivity.rotationY).updateQuaternion();
        }
      } else {
        const movementX = event.screenX - lastScreenPosition.x;
        const movementY = event.screenY - lastScreenPosition.y;
        lastScreenPosition.set(event.screenX, event.screenY);
        rotationManager.adjustSpherical(movementX * 1e-3 * sensitivity.rotationX, movementY * 1e-3 * sensitivity.rotationY).updateQuaternion();
      }
    }
    handleTouchMoveEvent(event) {
      const sensitivity = this.settings.sensitivity;
      const rotationManager = this.rotationManager;
      const lastScreenPosition = this.lastScreenPosition;
      const touch = event.touches[0];
      const movementX = touch.screenX - lastScreenPosition.x;
      const movementY = touch.screenY - lastScreenPosition.y;
      lastScreenPosition.set(touch.screenX, touch.screenY);
      event.preventDefault();
      rotationManager.adjustSpherical(movementX * 1e-3 * sensitivity.rotationX, movementY * 1e-3 * sensitivity.rotationY).updateQuaternion();
    }
    handleMainPointerButton(event, pressed) {
      this.dragging = pressed;
      if (this.settings.pointer.lock) {
        this.setPointerLocked();
      } else {
        if (pressed) {
          this.lastScreenPosition.set(event.screenX, event.screenY);
          this.domElement.addEventListener("mousemove", this);
        } else {
          this.domElement.removeEventListener("mousemove", this);
        }
      }
    }
    handleAuxiliaryPointerButton(event, pressed) {
    }
    handleSecondaryPointerButton(event, pressed) {
    }
    handlePointerButtonEvent(event, pressed) {
      event.preventDefault();
      switch (event.button) {
        case PointerButton.MAIN:
          this.handleMainPointerButton(event, pressed);
          break;
        case PointerButton.AUXILIARY:
          this.handleAuxiliaryPointerButton(event, pressed);
          break;
        case PointerButton.SECONDARY:
          this.handleSecondaryPointerButton(event, pressed);
          break;
      }
    }
    handleTouchEvent(event, start) {
      const touch = event.touches[0];
      event.preventDefault();
      if (start) {
        this.lastScreenPosition.set(touch.screenX, touch.screenY);
        this.domElement.addEventListener("touchmove", this);
      } else {
        this.domElement.removeEventListener("touchmove", this);
      }
    }
    handleKeyboardEvent(event, pressed) {
      const keyBindings = this.settings.keyBindings;
      if (keyBindings.has(event.keyCode)) {
        event.preventDefault();
        this.strategies.get(keyBindings.get(event.keyCode)).execute(pressed);
      }
    }
    handleWheelEvent(event) {
      this.rotationManager.zoom(Math.sign(event.deltaY));
    }
    handlePointerLockEvent() {
      if (document.pointerLockElement === this.domElement) {
        this.domElement.addEventListener("mousemove", this);
      } else {
        this.domElement.removeEventListener("mousemove", this);
      }
    }
    handleEvent(event) {
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
    }
    update(deltaTime) {
      this.rotationManager.update(deltaTime);
      this.translationManager.update(deltaTime);
    }
    moveTo(position) {
      this.translationManager.moveTo(position);
      return this;
    }
    lookAt(point) {
      this.rotationManager.lookAt(point);
      return this;
    }
    setPointerLocked(locked = true) {
      if (locked) {
        if (document.pointerLockElement !== this.domElement && this.domElement.requestPointerLock !== void 0) {
          this.domElement.requestPointerLock();
        }
      } else if (document.exitPointerLock !== void 0) {
        document.exitPointerLock();
      }
    }
    setEnabled(enabled = true) {
      const domElement = this.domElement;
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
      } else if (!enabled && this.enabled) {
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
    }
    dispose() {
      this.setEnabled(false);
    }
  };
  return src_exports;
})();
