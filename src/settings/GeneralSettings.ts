import { EventDispatcher } from "three";
import { ControlMode } from "../core/ControlMode";

/**
 * JSON representation of general settings.
 */

export interface GeneralSettingsJSON {

	mode: ControlMode;

}

/**
 * General settings.
 */

export class GeneralSettings extends EventDispatcher {

	/**
	 * The control mode.
	 */

	private mode: ControlMode;

	/**
	 * The previous control mode.
	 */

	private previousMode: ControlMode;

	/**
	 * Constructs new general settings.
	 */

	constructor() {

		super();

		this.mode = ControlMode.FIRST_PERSON;
		this.previousMode = this.mode;

	}

	/**
	 * Returns the previous control mode.
	 *
	 * @return The mode.
	 */

	getPreviousMode(): ControlMode {

		return this.previousMode;

	}

	/**
	 * Returns the control mode.
	 *
	 * @return The mode.
	 */

	getMode(): ControlMode {

		return this.mode;

	}

	/**
	 * Sets the control mode.
	 *
	 * @param value - The value.
	 */

	setMode(value: ControlMode): void {

		if(this.mode !== value) {

			this.mode = value;
			this.dispatchEvent({ type: "change" });
			this.previousMode = value;

		}

	}

	/**
	 * Copies the given general settings.
	 *
	 * @param settings - General settings.
	 * @return This instance.
	 */

	copy(settings: GeneralSettings): GeneralSettings {

		this.mode = settings.getMode();
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

	fromJSON(json: GeneralSettingsJSON): GeneralSettings {

		this.mode = json.mode;
		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			mode: this.mode
		};

	}

}
