import { EventDispatcher, Vector3 } from "three";
import * as axes from "../math/axes.js";
import { SettingsEventMap } from "./SettingsEventMap.js";

/**
 * Rotation settings.
 *
 * @group Settings
 */

export class RotationSettings extends EventDispatcher<SettingsEventMap> {

	// #region Backing Data

	/**
	 * @see {@link enabled}
	 */

	private _enabled: boolean;

	/**
	 * @see {@link up}
	 */

	private readonly _up: Vector3;

	/**
	 * @see {@link pivotOffset}
	 */

	private readonly _pivotOffset: Vector3;

	/**
	 * @see {@link minAzimuthalAngle}
	 */

	private _minAzimuthalAngle: number;

	/**
	 * @see {@link maxAzimuthalAngle}
	 */

	private _maxAzimuthalAngle: number;

	/**
	 * @see {@link minPolarAngle}
	 */

	private _minPolarAngle: number;

	/**
	 * @see {@link maxPolarAngle}
	 */

	private _maxPolarAngle: number;

	/**
	 * @see {@link invertedX}
	 */

	private _invertedX: boolean;

	/**
	 * @see {@link invertedY}
	 */

	private _invertedY: boolean;

	/**
	 * @see {@link sensitivityX}
	 */

	private _sensitivityX: number;

	/**
	 * @see {@link sensitivityY}
	 */

	private _sensitivityY: number;

	/**
	 * @see {@link damping}
	 */

	private _damping: number;

	// #endregion

	/**
	 * Constructs new rotation settings.
	 */

	constructor() {

		super();

		this._enabled = true;
		this._up = new Vector3();
		this._up.copy(axes.y);
		this._pivotOffset = new Vector3();

		this._minAzimuthalAngle = Number.NEGATIVE_INFINITY;
		this._maxAzimuthalAngle = Number.POSITIVE_INFINITY;

		this._minPolarAngle = 0.0;
		this._maxPolarAngle = Math.PI;

		this._invertedX = false;
		this._invertedY = false;

		this._sensitivityX = 1.0;
		this._sensitivityY = 1.0;
		this._damping = 0.0;

	}

	/**
	 * Indicates whether rotation is enabled.
	 */

	get enabled(): boolean {

		return this._enabled;

	}

	set enabled(value: boolean) {

		this._enabled = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * A normalized up vector.
	 *
	 * @see {@link setUp} for changing the up vector.
	 */

	get up(): Readonly<Vector3> {

		return this._up;

	}

	private set up(value: Vector3) {

		this._up.copy(value);
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Sets the up vector components.
	 *
	 * @param x - The X-component.
	 * @param y - The Y-component.
	 * @param z - The Z-component.
	 */

	setUp(x: number, y: number, z: number): void {

		this._up.set(x, y, z);
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The pivot offset.
	 *
	 * @see {@link setPivotOffset} for changing the pivot offset.
	 */

	get pivotOffset(): Readonly<Vector3> {

		return this._pivotOffset;

	}

	private set pivotOffset(value: Vector3) {

		this._pivotOffset.copy(value);
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Sets the pivot offset components.
	 *
	 * @param x - The X-component.
	 * @param y - The Y-component.
	 * @param z - The Z-component.
	 */

	setPivotOffset(x: number, y: number, z: number): void {

		this._pivotOffset.set(x, y, z);
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The minimum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
	 */

	get minAzimuthalAngle(): number {

		return this._minAzimuthalAngle;

	}

	set minAzimuthalAngle(value: number) {

		this._minAzimuthalAngle = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The maximum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
	 */

	get maxAzimuthalAngle(): number {

		return this._maxAzimuthalAngle;

	}

	set maxAzimuthalAngle(value: number) {

		this._maxAzimuthalAngle = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The minimum polar angle in radians. Range: [0, Math.PI].
	 */

	get minPolarAngle(): number {

		return this._minPolarAngle;

	}

	set minPolarAngle(value: number) {

		this._minPolarAngle = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The maximum polar angle in radians. Range: [0, Math.PI].
	 */

	get maxPolarAngle(): number {

		return this._maxPolarAngle;

	}

	set maxPolarAngle(value: number) {

		this._maxPolarAngle = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Indicates whether the horizontal rotation is inverted.
	 */

	get invertedX(): boolean {

		return this._invertedX;

	}

	set invertedX(value: boolean) {

		this._invertedX = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Indicates whether the vertical rotation is inverted.
	 */

	get invertedY(): boolean {

		return this._invertedY;

	}

	set invertedY(value: boolean) {

		this._invertedY = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The horizontal rotation sensitivity.
	 */

	get sensitivityX(): number {

		return this._sensitivityX;

	}

	set sensitivityX(value: number) {

		this._sensitivityX = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The vertical rotation sensitivity.
	 */

	get sensitivityY(): number {

		return this._sensitivityY;

	}

	set sensitivityY(value: number) {

		this._sensitivityY = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Sets the horizontal and vertical rotation sensitivity.
	 */

	set sensitivity(value: number) {

		this._sensitivityX = this._sensitivityY = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The damping factor.
	 */

	get damping(): number {

		return this._damping;

	}

	set damping(value: number) {

		this._damping = value;
		this.dispatchEvent({ type: "change" });

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

		this.invertedX = settings.invertedX;
		this.invertedY = settings.invertedY;

		this.sensitivityX = settings.sensitivityX;
		this.sensitivityY = settings.sensitivityY;
		this.damping = settings.damping;

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

	fromJSON(json: RotationSettings): RotationSettings {

		this.enabled = json.enabled;

		this.up.copy(json.up);
		this.pivotOffset.copy(json.pivotOffset);

		this.minAzimuthalAngle = json.minAzimuthalAngle ?? Number.NEGATIVE_INFINITY;
		this.maxAzimuthalAngle = json.maxAzimuthalAngle ?? Number.POSITIVE_INFINITY;

		this.minPolarAngle = json.minPolarAngle ?? Number.NEGATIVE_INFINITY;
		this.maxPolarAngle = json.maxPolarAngle ?? Number.POSITIVE_INFINITY;

		this.invertedX = json.invertedX;
		this.invertedY = json.invertedY;

		this.sensitivityX = json.sensitivityX;
		this.sensitivityY = json.sensitivityY;
		this.damping = json.damping;

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			enabled: this.enabled,
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
