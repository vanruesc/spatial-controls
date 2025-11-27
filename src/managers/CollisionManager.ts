import { EventDispatcher, Quaternion, Vector3 } from "three";
import { Updatable } from "../core/Updatable.js";
import { Settings } from "../settings/Settings.js";
import { ManagerEventMap } from "./ManagerEventMap.js";

/**
 * A collision manager.
 *
 * @experimental
 * @group Managers
 */

export class CollisionManager extends EventDispatcher<ManagerEventMap> implements Updatable {

	/**
	 * @see {@link position}
	 */

	private _position: Vector3;

	/**
	 * @see {@link quaternion}
	 */

	private _quaternion: Quaternion;

	/**
	 * @see {@link target}
	 */

	private _target: Vector3;

	/**
	 * The settings.
	 */

	private readonly settings: Settings;

	/**
	 * Constructs a new translation manager.
	 *
	 * @param position - The position.
	 * @param quaternion - The quaternion.
	 * @param target - The target.
	 * @param settings - The settings.
	 */

	constructor(
		position: Vector3,
		quaternion: Quaternion,
		target: Vector3,
		settings: Settings
	) {

		super();

		this._position = position;
		this._quaternion = quaternion;
		this._target = target;

		this.settings = settings;

	}

	/**
	 * The position.
	 */

	get position(): Vector3 {

		return this._position;

	}

	set position(value: Vector3) {

		this._position = value;

	}

	/**
	 * The quaternion.
	 */

	get quaternion(): Quaternion {

		return this._quaternion;

	}

	set quaternion(value: Quaternion) {

		this._quaternion = value;

	}

	/**
	 * The target.
	 */

	get target(): Vector3 {

		return this._target;

	}

	set target(value: Vector3) {

		this._target = value;

	}

	/**
	 * Performs collision tests.
	 */

	private collisionTest(): void {

		/*

		if(this.constraints.size === 0) {

			return;

		}

		this.spherical2.copy(this.spherical1);

		const s1 = this.spherical1;
		u.addVectors(this.target, this.settings.rotation.pivotOffset);
		v.setFromSpherical(this.spherical1).add(u);

		const projectedPosition = this.applyConstraints(v);
		const adjustedRadius = projectedPosition.distanceTo(u);

		console.log(projectedPosition, u, adjustedRadius);

		s1.radius = Math.min(adjustedRadius, s1.radius);
		this.restrictRadius();

		*/

	}

	update(timestamp: number): void {

	}

}
