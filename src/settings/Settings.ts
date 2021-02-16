import { EventDispatcher } from "three";
import { Action } from "../core/Action";
import { KeyCode } from "../input/KeyCode";
import { GeneralSettings } from "./GeneralSettings";
import { KeyBindings } from "./KeyBindings";
import { PointerSettings } from "./PointerSettings";
import { RotationSettings } from "./RotationSettings";
import { SensitivitySettings } from "./SensitivitySettings";
import { TranslationSettings } from "./TranslationSettings";
import { ZoomSettings } from "./ZoomSettings";

/**
 * Control settings.
 */

export class Settings extends EventDispatcher {

	/**
	 * General settings.
	 */

	general: GeneralSettings;

	/**
	 * Key bindings.
	 */

	keyBindings: KeyBindings;

	/**
	 * Pointer settings.
	 */

	pointer: PointerSettings;

	/**
	 * Rotation settings.
	 */

	rotation: RotationSettings;

	/**
	 * Sensitivity settings.
	 */

	sensitivity: SensitivitySettings;

	/**
	 * Translation settings.
	 */

	translation: TranslationSettings;

	/**
	 * Zoom settings.
	 */

	zoom: ZoomSettings;

	/**
	 * Constructs new settings.
	 */

	constructor() {

		super();

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

		this.general = new GeneralSettings();
		this.pointer = new PointerSettings();
		this.rotation = new RotationSettings();
		this.sensitivity = new SensitivitySettings();
		this.translation = new TranslationSettings();
		this.zoom = new ZoomSettings();

		// Forward events.
		this.pointer.addEventListener("change", (event) => this.dispatchEvent(event));
		this.rotation.addEventListener("change", (event) => this.dispatchEvent(event));
		this.sensitivity.addEventListener("change", (event) => this.dispatchEvent(event));
		this.translation.addEventListener("change", (event) => this.dispatchEvent(event));
		this.zoom.addEventListener("change", (event) => this.dispatchEvent(event));

	}

	/**
	 * Copies the given settings.
	 *
	 * @param settings - Settings.
	 * @return This instance.
	 */

	copy(settings: Settings): Settings {

		this.general.copy(settings.general);
		this.keyBindings.copy(settings.keyBindings);
		this.pointer.copy(settings.pointer);
		this.rotation.copy(settings.rotation);
		this.sensitivity.copy(settings.sensitivity);
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
	 * Saves the current settings as a data blob.
	 *
	 * @return An object URL that points to the exported settings.
	 */

	toDataURL(): string {

		return URL.createObjectURL(new Blob([JSON.stringify(this)], {
			type: "text/json"
		}));

	}

}
