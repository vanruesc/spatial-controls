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
	 * Triggers when the position or quaternion is changed.
	 *
	 * @event
	 */

	static readonly EVENT_UPDATE = "update";

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

	private settings: Settings;

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

	}

	update(timestamp: number): void {

	}

}
