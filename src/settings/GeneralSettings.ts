import { EventDispatcher } from "three";
import { ControlMode } from "../core/ControlMode";

/**
 * General settings.
 */

export class GeneralSettings extends EventDispatcher {

	/**
	 * The control mode.
	 */

	private mode: ControlMode;

	/**
	 * Constructs new general settings.
	 */

	constructor() {

		super();

		this.mode = ControlMode.FIRST_PERSON;

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

		this.mode = value;
		this.dispatchEvent({ type: "change" });

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

}
