import { Vector3 } from "three";

/**
 * Performs a collision check with the given position and view direction.
 *
 * @experimental
 * @group Core
 * @param position - The position.
 * @param direction - The view direction.
 * @return The adjusted position.
 */

export type Collider = (position: Vector3, direction: Vector3) => Vector3;
