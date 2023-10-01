import { Vector3 } from "three";

/**
 * A collider.
 *
 * @experimental
 * @group Core
 */

export interface Collider {

	/**
	 * Performs a collision check with the given position and view direction.
	 *
	 * @param position - The position.
	 * @param direction - The view direction.
	 * @return The adjusted position.
	 */

	(position: Vector3, direction: Vector3): Vector3;

}
