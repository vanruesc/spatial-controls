/**
 * Sensitivity settings.
 */

export class SensitivitySettings {

	/**
	 * The horizontal rotation sensitivity.
	 */

	rotationX: number;

	/**
	 * The vertical rotation sensitivity.
	 */

	rotationY: number;

	/**
	 * The translation sensitivity.
	 */

	translation: number;

	/**
	 * The zoom sensitivity.
	 */

	zoom: number;

	/**
	 * Constructs new sensitivity settings.
	 */

	constructor() {

		this.rotationX = 1.0;
		this.rotationY = 1.0;
		this.translation = 1.0;
		this.zoom = 1.0;

	}

	/**
	 * Sets the horizontal and vertical rotation sensitivity.
	 */

	set rotation(value: number) {

		this.rotationX = this.rotationY = value;

	}

	/**
	 * Copies the given sensitivity settings.
	 *
	 * @param settings - Sensitivity settings.
	 * @return This instance.
	 */

	copy(settings: SensitivitySettings): SensitivitySettings {

		this.rotationX = settings.rotationX;
		this.rotationY = settings.rotationY;
		this.translation = settings.translation;
		this.zoom = settings.zoom;

		return this;

	}

	/**
	 * Clones these sensitivity settings.
	 *
	 * @return {SensitivitySettings} The cloned sensitivity settings.
	 */

	clone(): SensitivitySettings {

		const clone = new SensitivitySettings();
		return clone.copy(this);

	}

}
