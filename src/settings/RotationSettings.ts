import { Vector3 } from "three";
import * as axes from "../core/axes.js";

/**
 * Rotation settings.
 */

export class RotationSettings {

	/**
	 * The up vector. Must be normalized.
	 */

	up: Vector3;

	/**
	 * A pivot offset. Only affects third person orbiting.
	 */

	pivotOffset: Vector3;

	/**
	 * The minimum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
	 */

	minAzimuthalAngle: number;

	/**
	 * The maximum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
	 */

	maxAzimuthalAngle: number;

	/**
	 * The minimum polar angle in radians. Range: [0, Math.PI].
	 */

	minPolarAngle: number;

	/**
	 * The maximum polar angle in radians. Range: [0, Math.PI].
	 */

	maxPolarAngle: number;

	/**
	 * Indicates whether the horizontal rotation should be inverted.
	 */

	invertX: boolean;

	/**
	 * Indicates whether the vertical rotation should be inverted.
	 */

	invertY: boolean;

	/**
	 * Constructs new rotation settings.
	 */

	constructor() {

		this.up = new Vector3();
		this.up.copy(axes.y);
		this.pivotOffset = new Vector3();

		this.minAzimuthalAngle = Number.NEGATIVE_INFINITY;
		this.maxAzimuthalAngle = Number.POSITIVE_INFINITY;

		this.minPolarAngle = 0.0;
		this.maxPolarAngle = Math.PI;

		this.invertX = false;
		this.invertY = false;

	}

	/**
	 * Copies the given rotation settings.
	 *
	 * @param settings - Rotation settings.
	 * @return This instance.
	 */

	copy(settings: RotationSettings): RotationSettings {

		this.up.copy(settings.up);
		this.pivotOffset.copy(settings.pivotOffset);

		this.minAzimuthalAngle = settings.minAzimuthalAngle;
		this.maxAzimuthalAngle = settings.maxAzimuthalAngle;

		this.minPolarAngle = settings.minPolarAngle;
		this.maxPolarAngle = settings.maxPolarAngle;

		this.invertX = settings.invertX;
		this.invertY = settings.invertY;

		return this;

	}

	/**
	 * Clones this rotation settings instance.
	 *
	 * @return The cloned rotation settings.
	 */

	clone(): RotationSettings {

		const clone = new RotationSettings();
		return clone.copy(this);

	}

}
