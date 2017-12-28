import { GeneralSettings } from "./GeneralSettings.js";
import { KeyBindings } from "./KeyBindings.js";
import { PointerSettings } from "./PointerSettings.js";
import { RotationSettings } from "./RotationSettings.js";
import { SensitivitySettings } from "./SensitivitySettings.js";
import { TranslationSettings } from "./TranslationSettings.js";
import { ZoomSettings } from "./ZoomSettings.js";

/**
 * Control settings.
 */

export class Settings {

	/**
	 * Constructs new settings.
	 */

	constructor() {

		/**
		 * General settings.
		 *
		 * @type {GeneralSettings}
		 */

		this.general = new GeneralSettings();

		/**
		 * Key bindings.
		 *
		 * @type {KeyBindings}
		 */

		this.keyBindings = new KeyBindings();

		/**
		 * Pointer settings.
		 *
		 * @type {PointerSettings}
		 */

		this.pointer = new PointerSettings();

		/**
		 * Rotation settings.
		 *
		 * @type {RotationSettings}
		 */

		this.rotation = new RotationSettings();

		/**
		 * Sensitivity settings.
		 *
		 * @type {SensitivitySettings}
		 */

		this.sensitivity = new SensitivitySettings();

		/**
		 * Translation settings.
		 *
		 * @type {TranslationSettings}
		 */

		this.translation = new TranslationSettings();

		/**
		 * Zoom settings.
		 *
		 * @type {ZoomSettings}
		 */

		this.zoom = new ZoomSettings();

	}

	/**
	 * Copies the given settings.
	 *
	 * @param {Settings} settings - Settings.
	 * @return {Settings} This instance.
	 */

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

	/**
	 * Clones these settings.
	 *
	 * @return {Settings} The cloned settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

	/**
	 * Saves the current settings in the form of a JSON blob.
	 *
	 * @return {DOMString} A URL to the exported settings.
	 */

	toDataURL() {

		return URL.createObjectURL(new Blob([JSON.stringify(this)], { type: "text/json" }));

	}

}
