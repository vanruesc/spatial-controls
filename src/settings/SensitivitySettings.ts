import { EventDispatcher } from "three";

/**
 * Sensitivity settings.
 */

export class SensitivitySettings extends EventDispatcher {

	/**
	 * The horizontal rotation sensitivity.
	 */

	private rotationX: number;

	/**
	 * The vertical rotation sensitivity.
	 */

	private rotationY: number;

	/**
	 * The translation sensitivity.
	 */

	private translation: number;

	/**
	 * The zoom sensitivity.
	 */

	private zoom: number;

	/**
	 * Constructs new sensitivity settings.
	 */

	constructor() {

		super();

		this.rotationX = 1.0;
		this.rotationY = 1.0;
		this.translation = 1.0;
		this.zoom = 1.0;

	}

	/**
	 * Returns the horizontal rotation sensitivity.
	 *
	 * @return The sensitivity.
	 */

	getRotationX() {

		return this.rotationX;

	}

	/**
	 * Sets the horizontal rotation sensitivity.
	 *
	 * @param value - The sensitivity.
	 */

	setRotationX(value: number) {

		this.rotationX = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the vertical rotation sensitivity.
	 *
	 * @return The sensitivity.
	 */

	getRotationY() {

		return this.rotationY;

	}

	/**
	 * Sets the vertical rotation sensitivity.
	 *
	 * @param value - The sensitivity.
	 */

	setRotationY(value: number) {

		this.rotationY = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Sets the vertical rotation sensitivity.
	 *
	 * @param value - The sensitivity.
	 */

	setRotation(value: number) {

		this.rotationX = this.rotationY = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the translation sensitivity.
	 *
	 * @return The sensitivity.
	 */

	getTranslation() {

		return this.translation;

	}

	/**
	 * Sets the translation sensitivity.
	 *
	 * @param value - The sensitivity.
	 */

	setTranslation(value: number) {

		this.translation = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the zoom sensitivity.
	 *
	 * @return The sensitivity.
	 */

	getZoom() {

		return this.zoom;

	}

	/**
	 * Sets the zoom sensitivity.
	 *
	 * @param value - The sensitivity.
	 */

	setZoom(value: number) {

		this.zoom = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Copies the given sensitivity settings.
	 *
	 * @param settings - Sensitivity settings.
	 * @return This instance.
	 */

	copy(settings: SensitivitySettings): SensitivitySettings {

		this.rotationX = settings.getRotationX();
		this.rotationY = settings.getRotationY();
		this.translation = settings.getTranslation();
		this.zoom = settings.getZoom();

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
