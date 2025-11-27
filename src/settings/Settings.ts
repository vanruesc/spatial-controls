import { EventDispatcher } from "three";
import { Action } from "../core/Action.js";
import { Input } from "../input/Input.js";
import { KeyCode } from "../input/KeyCode.js";
import { PointerButton } from "../input/PointerButton.js";
import { Bindings } from "./Bindings.js";
import { GeneralSettings } from "./GeneralSettings.js";
import { PointerSettings } from "./PointerSettings.js";
import { RotationSettings } from "./RotationSettings.js";
import { SettingsEventMap } from "./SettingsEventMap.js";
import { TranslationSettings } from "./TranslationSettings.js";
import { ZoomSettings } from "./ZoomSettings.js";
import { WheelRotation } from "../input/WheelRotation.js";

/**
 * Control settings.
 *
 * @group Settings
 */

export class Settings extends EventDispatcher<SettingsEventMap> {

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
	 * General settings.
	 */

	readonly general: GeneralSettings;

	/**
	 * Pointer settings.
	 */

	readonly pointer: PointerSettings;

	/**
	 * Rotation settings.
	 */

	readonly rotation: RotationSettings;

	/**
	 * Translation settings.
	 */

	readonly translation: TranslationSettings;

	/**
	 * Zoom settings.
	 */

	readonly zoom: ZoomSettings;

	/**
	 * Constructs new settings.
	 */

	constructor() {

		super();

		this.keyBindings = new Bindings<KeyCode>();
		this.keyBindings.setDefault(new Map<KeyCode, Action>([
			["KeyW", Action.MOVE_FORWARD],
			["KeyA", Action.MOVE_LEFT],
			["KeyS", Action.MOVE_BACKWARD],
			["KeyD", Action.MOVE_RIGHT],
			["ArrowUp", Action.MOVE_FORWARD],
			["ArrowLeft", Action.MOVE_LEFT],
			["ArrowDown", Action.MOVE_BACKWARD],
			["ArrowRight", Action.MOVE_RIGHT],
			["KeyX", Action.MOVE_DOWN],
			["Space", Action.MOVE_UP],
			["PageDown", Action.DOLLY_OUT],
			["PageUp", Action.DOLLY_IN],
			["ShiftLeft", Action.BOOST]
		]));

		this.pointerBindings = new Bindings<PointerButton | WheelRotation>();
		this.pointerBindings.setDefault(new Map<Input<PointerButton | WheelRotation>, Action>([
			[new Input<PointerButton>(PointerButton.MAIN), Action.ROTATE],
			[new Input<PointerButton>(PointerButton.MAIN, { modifiers: ["Ctrl"] }), Action.MOVE_PLANAR],
			[new Input<PointerButton>(PointerButton.SECONDARY), Action.PAN],
			[new Input<WheelRotation>(WheelRotation.NEGATIVE_Y), Action.DOLLY_OUT],
			[new Input<WheelRotation>(WheelRotation.POSITIVE_Y), Action.DOLLY_IN]
		]));

		this.general = new GeneralSettings();
		this.pointer = new PointerSettings();
		this.rotation = new RotationSettings();
		this.translation = new TranslationSettings();
		this.zoom = new ZoomSettings();

		// Forward events.
		this.general.addEventListener("change", e => this.dispatchEvent(e));
		this.pointer.addEventListener("change", e => this.dispatchEvent(e));
		this.rotation.addEventListener("change", e => this.dispatchEvent(e));
		this.translation.addEventListener("change", e => this.dispatchEvent(e));
		this.zoom.addEventListener("change", e => this.dispatchEvent(e));

	}

	/**
	 * Copies the given settings.
	 *
	 * @param settings - Settings.
	 * @return This instance.
	 */

	copy(settings: Settings): Settings {

		this.keyBindings.copy(settings.keyBindings);
		this.pointerBindings.copy(settings.pointerBindings);
		this.general.copy(settings.general);
		this.pointer.copy(settings.pointer);
		this.rotation.copy(settings.rotation);
		this.translation.copy(settings.translation);
		this.zoom.copy(settings.zoom);

		this.dispatchEvent({ type: "change" });

		return this;

	}

	/**
	 * Clones these settings.
	 *
	 * @return The cloned settings.
	 */

	clone(): Settings {

		const clone = new Settings();
		return clone.copy(this);

	}

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data string.
	 * @return This instance.
	 */

	fromJSON(json: string): Settings {

		const settings = JSON.parse(json) as Settings;
		this.keyBindings.fromJSON(settings.keyBindings);
		this.pointerBindings.fromJSON(settings.pointerBindings);
		this.general.fromJSON(settings.general);
		this.pointer.fromJSON(settings.pointer);
		this.rotation.fromJSON(settings.rotation);
		this.translation.fromJSON(settings.translation);
		this.zoom.fromJSON(settings.zoom);

		this.dispatchEvent({ type: "change" });

		return this;

	}

	/**
	 * Exports these settings as a data blob.
	 *
	 * @return The settings blob.
	 */

	toBlob(): Blob {

		return new Blob([JSON.stringify(this)], {
			type: "text/json"
		});

	}

	toJSON(): Record<string, unknown> {

		return {
			keyBindings: this.keyBindings,
			pointerBindings: this.pointerBindings,
			general: this.general,
			pointer: this.pointer,
			rotation: this.rotation,
			translation: this.translation,
			zoom: this.zoom
		};

	}

}
