import { EventTarget } from "synthetic-event";
import { ControlMode } from "../core/ControlMode.js";
import { SettingsEventMap } from "./SettingsEventMap.js";

/**
 * General settings.
 *
 * @group Settings
 */

export class GeneralSettings extends EventTarget<SettingsEventMap> {

	// #region Backing Data

	/**
	 * @see {@link mode}
	 */

	private _mode: ControlMode;

	/**
	 * @see {@link previousMode}
	 */

	private _previousMode: ControlMode;

	// #endegion

	/**
	 * Constructs new general settings.
	 */

	constructor() {

		super();

		this._mode = "first-person";
		this._previousMode = this._mode;

	}

	/**
	 * The previous control mode.
	 *
	 * @internal
	 */

	get previousMode(): ControlMode {

		return this._previousMode;

	}

	/**
	 * The control mode.
	 *
	 * @defaultValue "first-person"
	 */

	get mode(): ControlMode {

		return this._mode;

	}

	set mode(value: ControlMode) {

		if(this._mode !== value) {

			this._mode = value;
			this.dispatchEvent({ type: "change" });
			this._previousMode = value;

		}

	}

	/**
	 * Copies the given general settings.
	 *
	 * @param settings - General settings.
	 * @return This instance.
	 */

	copy(settings: GeneralSettings): GeneralSettings {

		this.mode = settings.mode;
		return this;

	}

	/**
	 * Clones this general settings instance.
	 *
	 * @return The cloned general settings.
	 */

	clone(): GeneralSettings {

		const clone = new GeneralSettings();
		return clone.copy(this);

	}

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: string | GeneralSettings): GeneralSettings {

		if(typeof json === "string") {

			json = JSON.parse(json) as GeneralSettings;

		}

		this.mode = json.mode;
		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			mode: this.mode
		};

	}

}
