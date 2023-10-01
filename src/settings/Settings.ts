import { EventDispatcher } from "three";
import { Action } from "../core/Action.js";
import { KeyCode } from "../input/KeyCode.js";
import { PointerButton } from "../input/PointerButton.js";
import { Bindings } from "./Bindings.js";
import { GeneralSettings } from "./GeneralSettings.js";
import { PointerSettings } from "./PointerSettings.js";
import { RotationSettings } from "./RotationSettings.js";
import { SettingsEventMap } from "./SettingsEventMap.js";
import { TranslationSettings } from "./TranslationSettings.js";
import { ZoomSettings } from "./ZoomSettings.js";

/**
 * Control settings.
 *
 * @group Settings
 */

export class Settings extends EventDispatcher<SettingsEventMap> {

	/**
	 * Triggers when the settings are changed.
	 *
	 * @event
	 */

	static readonly EVENT_CHANGE = "change";

	/**
	 * Key bindings.
	 *
	 * This collection maps {@linkplain KeyCode key codes} to {@linkplain Action actions}.
	 */

	readonly keyBindings: Bindings<KeyCode>;

	/**
	 * Pointer bindings.
	 *
	 * This collection maps {@linkplain PointerButton pointer buttons} to {@linkplain Action actions}.
	 */

	readonly pointerBindings: Bindings<PointerButton>;

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
			[KeyCode.KEY_W, Action.MOVE_FORWARD],
			[KeyCode.ARROW_UP, Action.MOVE_FORWARD],
			[KeyCode.KEY_A, Action.MOVE_LEFT],
			[KeyCode.ARROW_LEFT, Action.MOVE_LEFT],
			[KeyCode.KEY_S, Action.MOVE_BACKWARD],
			[KeyCode.ARROW_DOWN, Action.MOVE_BACKWARD],
			[KeyCode.KEY_D, Action.MOVE_RIGHT],
			[KeyCode.ARROW_RIGHT, Action.MOVE_RIGHT],
			[KeyCode.KEY_X, Action.MOVE_DOWN],
			[KeyCode.SPACE, Action.MOVE_UP],
			[KeyCode.PAGE_DOWN, Action.ZOOM_OUT],
			[KeyCode.PAGE_UP, Action.ZOOM_IN],
			[KeyCode.SHIFT_LEFT, Action.BOOST]
		]));

		this.pointerBindings = new Bindings<PointerButton>();
		this.pointerBindings.setDefault(new Map([
			[PointerButton.MAIN, Action.ROTATE]
		]));

		this.general = new GeneralSettings();
		this.pointer = new PointerSettings();
		this.rotation = new RotationSettings();
		this.translation = new TranslationSettings();
		this.zoom = new ZoomSettings();

		// Forward events.
		this.general.addEventListener(Settings.EVENT_CHANGE, e => this.dispatchEvent(e));
		this.pointer.addEventListener(Settings.EVENT_CHANGE, e => this.dispatchEvent(e));
		this.rotation.addEventListener(Settings.EVENT_CHANGE, e => this.dispatchEvent(e));
		this.translation.addEventListener(Settings.EVENT_CHANGE, e => this.dispatchEvent(e));
		this.zoom.addEventListener(Settings.EVENT_CHANGE, e => this.dispatchEvent(e));

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

		this.dispatchEvent({ type: Settings.EVENT_CHANGE });

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

		this.dispatchEvent({ type: Settings.EVENT_CHANGE });

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
