/**
 * Zoom settings.
 */

export class ZoomSettings {

	/**
	 * Whether zooming is enabled.
	 */

	enabled: boolean;

	/**
	 * Indicates whether the zoom controls should be inverted.
	 */

	invert: boolean;

	/**
	 * The minimum zoom distance.
	 */

	minDistance: number;

	/**
	 * The maximum zoom distance.
	 */

	maxDistance: number;

	/**
	 * Constructs new zoom settings.
	 */

	constructor() {

		this.enabled = true;
		this.invert = false;
		this.minDistance = 1e-6;
		this.maxDistance = Infinity;

	}

	/**
	 * Copies the given zoom settings.
	 *
	 * @param settings - Zoom settings.
	 * @return This instance.
	 */

	copy(settings: ZoomSettings): ZoomSettings {

		this.enabled = settings.enabled;
		this.invert = settings.invert;
		this.minDistance = settings.minDistance;
		this.maxDistance = settings.maxDistance;

		return this;

	}

	/**
	 * Clones this zoom settings instance.
	 *
	 * @return The cloned zoom settings.
	 */

	clone(): ZoomSettings {

		const clone = new ZoomSettings();
		return clone.copy(this);

	}

}
