import { EventTarget } from "synthetic-event";
import { DollySettings } from "./DollySettings.js";
import { GeneralSettings } from "./GeneralSettings.js";
import { InputSettings } from "./InputSettings.js";
import { RotationSettings } from "./RotationSettings.js";
import { SettingsEventMap } from "./SettingsEventMap.js";
import { TranslationSettings } from "./TranslationSettings.js";

/**
 * Control settings.
 *
 * @group Settings
 */

export class Settings extends EventTarget<SettingsEventMap> {

	/**
	 * General settings.
	 */

	readonly general: GeneralSettings;

	/**
	 * Input settings.
	 */

	readonly input: InputSettings;

	/**
	 * Rotation settings.
	 */

	readonly rotation: RotationSettings;

	/**
	 * Translation settings.
	 */

	readonly translation: TranslationSettings;

	/**
	 * Dolly settings.
	 */

	readonly dolly: DollySettings;

	/**
	 * Constructs new settings.
	 */

	constructor() {

		super();

		this.general = new GeneralSettings();
		this.input = new InputSettings();
		this.rotation = new RotationSettings();
		this.translation = new TranslationSettings();
		this.dolly = new DollySettings();

		// Propagate events.
		this.general.addEventListener("change", e => this.dispatchEvent(e));
		this.input.addEventListener("change", e => this.dispatchEvent(e));
		this.rotation.addEventListener("change", e => this.dispatchEvent(e));
		this.translation.addEventListener("change", e => this.dispatchEvent(e));
		this.dolly.addEventListener("change", e => this.dispatchEvent(e));

	}

	/**
	 * Copies the given settings.
	 *
	 * @param settings - Settings.
	 * @return This instance.
	 */

	copy(settings: Settings): this {

		this.general.copy(settings.general);
		this.input.copy(settings.input);
		this.rotation.copy(settings.rotation);
		this.translation.copy(settings.translation);
		this.dolly.copy(settings.dolly);

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

	fromJSON(json: string | Settings): this {

		if(typeof json === "string") {

			json = JSON.parse(json) as Settings;

		}

		this.general.fromJSON(json.general);
		this.input.fromJSON(json.input);
		this.rotation.fromJSON(json.rotation);
		this.translation.fromJSON(json.translation);
		this.dolly.fromJSON(json.dolly);

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
			general: this.general,
			input: this.input,
			rotation: this.rotation,
			translation: this.translation,
			dolly: this.dolly
		};

	}

}
