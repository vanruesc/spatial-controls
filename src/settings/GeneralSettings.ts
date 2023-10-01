import { EventDispatcher } from "three";
import { ControlMode } from "../core/ControlMode.js";
import { SettingsEventMap } from "./SettingsEventMap.js";

/**
 * General settings.
 *
 * @group Settings
 */

export class GeneralSettings extends EventDispatcher<SettingsEventMap> {

	/**
	 * Triggers when the settings are changed.
	 *
	 * @event
	 */

	static readonly EVENT_CHANGE = "change";

	/**
	 * @see {@link mode}
	 */

	private _mode: ControlMode;

	/**
	 * @see {@link previousMode}
	 */

	private _previousMode: ControlMode;

	/**
	 * Constructs new general settings.
	 */

	constructor() {

		super();

		this._mode = ControlMode.FIRST_PERSON;
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
	 */

	get mode(): ControlMode {

		return this._mode;

	}

	set mode(value: ControlMode) {

		if(this._mode !== value) {

			this._mode = value;
			this.dispatchEvent({ type: GeneralSettings.EVENT_CHANGE });
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

	fromJSON(json: GeneralSettings): GeneralSettings {

		this.mode = json.mode;
		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			mode: this.mode
		};

	}

}
