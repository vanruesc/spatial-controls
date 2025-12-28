import { Quaternion, Vector3 } from "three";

/**
 * Spatial transformation data.
 *
 * @group Core
 */

export interface Spatial {

	/**
	 * The position.
	 */

	position: Vector3;

	/**
	 * The rotation.
	 */

	quaternion: Quaternion;

	/**
	 * The scale.
	 */

	scale: Vector3;

}
