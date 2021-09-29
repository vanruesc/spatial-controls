import { EventDispatcher, Vector3 } from "three";
import * as axes from "../core/axes";

/**
 * JSON representation of rotation settings.
 *
 * @ignore
 */

export interface RotationSettingsJSON {

	up: Vector3;
	pivotOffset: Vector3;
	minAzimuthalAngle: number;
	maxAzimuthalAngle: number;
	minPolarAngle: number;
	maxPolarAngle: number;
	invertedX: boolean;
	invertedY: boolean;
	sensitivityX: number;
	sensitivityY: number;
	damping: number;

}

/**
 * Rotation settings.
 */

export class RotationSettings extends EventDispatcher {

	/**
	 * The up vector. Must be normalized.
	 */

	private up: Vector3;

	/**
	 * A pivot offset. Only affects third person orbiting.
	 */

	private pivotOffset: Vector3;

	/**
	 * The minimum azimuthal angle in radians.
	 */

	private minAzimuthalAngle: number;

	/**
	 * The maximum azimuthal angle in radians.
	 */

	private maxAzimuthalAngle: number;

	/**
	 * The minimum polar angle in radians.
	 */

	private minPolarAngle: number;

	/**
	 * The maximum polar angle in radians.
	 */

	private maxPolarAngle: number;

	/**
	 * Indicates whether the horizontal rotation is inverted.
	 */

	private invertedX: boolean;

	/**
	 * Indicates whether the vertical rotation is inverted.
	 */

	private invertedY: boolean;

	/**
	 * The horizontal rotation sensitivity.
	 */

	private sensitivityX: number;

	/**
	 * The vertical rotation sensitivity.
	 */

	private sensitivityY: number;

	/**
	 * The damping factor. Range is [0.0, +Infinity]. Set to 0 to disable.
	 */

	private damping: number;

	/**
	 * Constructs new rotation settings.
	 */

	constructor() {

		super();

		this.up = new Vector3();
		this.up.copy(axes.y);
		this.pivotOffset = new Vector3();

		this.minAzimuthalAngle = Number.NEGATIVE_INFINITY;
		this.maxAzimuthalAngle = Number.POSITIVE_INFINITY;

		this.minPolarAngle = 0.0;
		this.maxPolarAngle = Math.PI;

		this.invertedX = false;
		this.invertedY = false;

		this.sensitivityX = 1.0;
		this.sensitivityY = 1.0;
		this.damping = 0.0;

	}

	/**
	 * Returns the up vector offset.
	 *
	 * @return The up vector.
	 */

	getUpVector(): Vector3 {

		return this.up;

	}

	/**
	 * Sets the up vector.
	 *
	 * @param value - The up vector.
	 */

	setUpVector(value: Vector3): void {

		this.up = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the pivot offset.
	 *
	 * @return The offset.
	 */

	getPivotOffset(): Vector3 {

		return this.pivotOffset;

	}

	/**
	 * Sets the pivot offset.
	 *
	 * @param value - The offset.
	 */

	setPivotOffset(value: Vector3): void {

		this.pivotOffset = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the minimum azimuthal angle in radians.
	 *
	 * @return The angle.
	 */

	getMinAzimuthalAngle(): number {

		return this.minAzimuthalAngle;

	}

	/**
	 * Sets the minimum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
	 *
	 * @param value - The angle.
	 */

	setMinAzimuthalAngle(value: number): void {

		this.minAzimuthalAngle = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the maximum azimuthal angle in radians.
	 *
	 * @return The angle.
	 */

	getMaxAzimuthalAngle(): number {

		return this.maxAzimuthalAngle;

	}

	/**
	 * Sets the maximum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
	 *
	 * @param value - The angle.
	 */

	setMaxAzimuthalAngle(value: number): void {

		this.maxAzimuthalAngle = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the minimum polar angle in radians.
	 *
	 * @return The angle.
	 */

	getMinPolarAngle(): number {

		return this.minPolarAngle;

	}

	/**
	 * Sets the minimum polar angle in radians. Range: [0, Math.PI].
	 *
	 * @param value - The angle.
	 */

	setMinPolarAngle(value: number): void {

		this.minPolarAngle = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the maximum polar angle in radians.
	 *
	 * @return The angle.
	 */

	getMaxPolarAngle(): number {

		return this.maxPolarAngle;

	}

	/**
	 * Sets the maximum polar angle in radians. Range: [0, Math.PI].
	 *
	 * @param value - The angle.
	 */

	setMaxPolarAngle(value: number): void {

		this.maxPolarAngle = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Indicates whether the horizontal rotation is inverted.
	 *
	 * @return Whether the horizontal rotation is inverted.
	 */

	isInvertedX(): boolean {

		return this.invertedX;

	}

	/**
	 * Defines whether the horizontal rotation should be inverted.
	 *
	 * @param value - The value.
	 */

	setInvertedX(value: boolean): void {

		this.invertedX = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Indicates whether the vertical rotation is inverted.
	 *
	 * @return Whether the vertical rotation is inverted.
	 */

	isInvertedY(): boolean {

		return this.invertedY;

	}

	/**
	 * Defines whether the vertical rotation should be inverted.
	 *
	 * @param value - The value.
	 */

	setInvertedY(value: boolean): void {

		this.invertedY = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the horizontal rotation sensitivity.
	 *
	 * @return The sensitivity.
	 */

	getSensitivityX(): number {

		return this.sensitivityX;

	}

	/**
	 * Sets the horizontal rotation sensitivity.
	 *
	 * @param value - The sensitivity.
	 */

	setSensitivityX(value: number): void {

		this.sensitivityX = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the vertical rotation sensitivity.
	 *
	 * @return The sensitivity.
	 */

	getSensitivityY(): number {

		return this.sensitivityY;

	}

	/**
	 * Sets the vertical rotation sensitivity.
	 *
	 * @param value - The sensitivity.
	 */

	setSensitivityY(value: number): void {

		this.sensitivityY = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Sets the rotation sensitivity.
	 *
	 * @param value - The sensitivity.
	 */

	setSensitivity(value: number): void {

		this.sensitivityX = this.sensitivityY = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the damping factor.
	 *
	 * @return The damping factor.
	 */

	getDamping(): number {

		return this.damping;

	}

	/**
	 * Sets the damping factor.
	 *
	 * @param value - The damping factor.
	 */

	setDamping(value: number): void {

		this.damping = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Copies the given rotation settings.
	 *
	 * @param settings - Rotation settings.
	 * @return This instance.
	 */

	copy(settings: RotationSettings): RotationSettings {

		this.up.copy(settings.getUpVector());
		this.pivotOffset.copy(settings.getPivotOffset());

		this.minAzimuthalAngle = settings.getMinAzimuthalAngle();
		this.maxAzimuthalAngle = settings.getMaxAzimuthalAngle();

		this.minPolarAngle = settings.getMinPolarAngle();
		this.maxPolarAngle = settings.getMaxPolarAngle();

		this.invertedX = settings.isInvertedX();
		this.invertedY = settings.isInvertedY();

		this.sensitivityX = settings.getSensitivityX();
		this.sensitivityY = settings.getSensitivityY();
		this.damping = settings.getDamping();

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

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: RotationSettingsJSON): RotationSettings {

		this.up.copy(json.up);
		this.pivotOffset.copy(json.pivotOffset);

		this.minAzimuthalAngle = (json.minAzimuthalAngle !== null) ?
			json.minAzimuthalAngle : Number.NEGATIVE_INFINITY;
		this.maxAzimuthalAngle = (json.maxAzimuthalAngle !== null) ?
			json.maxAzimuthalAngle : Number.POSITIVE_INFINITY;

		this.minPolarAngle = (json.minPolarAngle !== null) ?
			json.minPolarAngle : Number.NEGATIVE_INFINITY;
		this.maxPolarAngle = (json.maxPolarAngle !== null) ?
			json.maxPolarAngle : Number.POSITIVE_INFINITY;

		this.invertedX = json.invertedX;
		this.invertedY = json.invertedY;

		this.sensitivityX = json.sensitivityX;
		this.sensitivityY = json.sensitivityY;
		this.damping = json.damping;

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			up: this.up,
			pivotOffset: this.pivotOffset,
			minAzimuthalAngle: this.minAzimuthalAngle,
			maxAzimuthalAngle: this.maxAzimuthalAngle,
			minPolarAngle: this.minPolarAngle,
			maxPolarAngle: this.maxPolarAngle,
			invertedX: this.invertedX,
			invertedY: this.invertedY,
			sensitivityX: this.sensitivityX,
			sensitivityY: this.sensitivityY,
			damping: this.damping
		};

	}

}
