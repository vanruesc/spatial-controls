import { EventTarget } from "synthetic-event";
import { Action } from "../core/Action.js";
import { Input } from "../input/Input.js";
import { KeyCode } from "../input/KeyCode.js";
import { PointerButton } from "../input/PointerButton.js";
import { WheelRotation } from "../input/WheelRotation.js";
import { Bindings } from "./Bindings.js";
import { PointerSettings } from "./PointerSettings.js";
import { SettingsEventMap } from "./SettingsEventMap.js";

/**
 * Input settings.
 *
 * @group Settings
 */

export class InputSettings extends EventTarget<SettingsEventMap> {

	/**
	 * Key bindings.
	 *
	 * This collection maps {@linkplain KeyCode key codes} to {@linkplain Action actions}.
	 */

	readonly keyBindings: Bindings<KeyCode>;

	/**
	 * Pointer bindings.
	 *
	 * This collection maps {@linkplain PointerButton pointer buttons} and {@linkplain WheelRotation wheel rotations} to
	 * {@linkplain Action actions}.
	 */

	readonly pointerBindings: Bindings<PointerButton | WheelRotation>;

	/**
	 * Pointer settings.
	 */

	readonly pointer: PointerSettings;

	/**
	 * Constructs new pointer settings.
	 */

	constructor() {

		super();

		this.keyBindings = new Bindings<KeyCode>();
		this.keyBindings.setDefault(new Map<KeyCode, Action>([
			["KeyW", "move-forward"],
			["KeyA", "move-left"],
			["KeyS", "move-backward"],
			["KeyD", "move-right"],
			["ArrowUp", "move-forward"],
			["ArrowLeft", "move-left"],
			["ArrowDown", "move-backward"],
			["ArrowRight", "move-right"],
			["KeyX", "move-down"],
			["Space", "move-up"],
			["PageUp", "dolly-in"],
			["PageDown", "dolly-out"],
			["ShiftLeft", "boost"]
		]));

		this.pointerBindings = new Bindings<PointerButton | WheelRotation>();
		this.pointerBindings.setDefault(new Map<Input<PointerButton | WheelRotation>, Action>([
			[new Input(PointerButton.MAIN), "rotate"],
			[new Input(PointerButton.MAIN, { modifiers: ["Ctrl"] }), "truck"],
			[new Input(PointerButton.SECONDARY), "pan"],
			[new Input(WheelRotation.NEGATIVE_Y), "dolly-in"],
			[new Input(WheelRotation.POSITIVE_Y), "dolly-out"]
		]));

		this.pointer = new PointerSettings();
		this.pointer.addEventListener("change", e => this.dispatchEvent(e));

	}

	/**
	 * Copies the given pointer settings.
	 *
	 * @param settings - Pointer settings.
	 * @return This instance.
	 */

	copy(settings: InputSettings): this {

		this.keyBindings.copy(settings.keyBindings);
		this.pointerBindings.copy(settings.pointerBindings);
		this.pointer.copy(settings.pointer);

		return this;

	}

	/**
	 * Clones this pointer settings instance.
	 *
	 * @return The cloned pointer settings.
	 */

	clone(): InputSettings {

		const clone = new InputSettings();
		return clone.copy(this);

	}

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: string | InputSettings): InputSettings {

		if(typeof json === "string") {

			json = JSON.parse(json) as InputSettings;

		}

		this.keyBindings.fromJSON(json.keyBindings);
		this.pointerBindings.fromJSON(json.pointerBindings);
		this.pointer.fromJSON(json.pointer);

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			keyBindings: this.keyBindings,
			pointerBindings: this.pointerBindings,
			pointer: this.pointer
		};

	}

}
