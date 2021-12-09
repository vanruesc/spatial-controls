import { EventDispatcher } from "three";
import { Action } from "../core/Action";
import { KeyCode, PointerButton } from "../input";

import { GeneralSettings, GeneralSettingsJSON } from "./GeneralSettings";
import { Bindings, BindingsJSON } from "./Bindings";
import { PointerSettings, PointerSettingsJSON } from "./PointerSettings";
import { RotationSettings, RotationSettingsJSON } from "./RotationSettings";
import { TranslationSettings, TranslationSettingsJSON } from "./TranslationSettings";
import { ZoomSettings, ZoomSettingsJSON } from "./ZoomSettings";

/**
 * JSON representation of control settings.
 */

interface SettingsJSON {

	keyBindings: BindingsJSON<KeyCode>;
	pointerBindings: BindingsJSON<PointerButton>;
	general: GeneralSettingsJSON;
	pointer: PointerSettingsJSON;
	rotation: RotationSettingsJSON;
	translation: TranslationSettingsJSON;
	zoom: ZoomSettingsJSON;

}

/**
 * Control settings.
 */

export class Settings extends EventDispatcher {

	/**
	 * Key bindings.
	 */

	readonly keyBindings: Bindings<KeyCode>;

	/**
	 * Key bindings.
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
			[KeyCode.PAGE_UP, Action.ZOOM_IN],

			[KeyCode.SHIFT, Action.BOOST]

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

		const settings = JSON.parse(json) as SettingsJSON;
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
