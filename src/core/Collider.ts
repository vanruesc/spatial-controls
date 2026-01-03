import { Vector3 } from "three";

/**
 * Performs a collision check with the given position and view direction.
 *
 * @ignore
 * @experimental
 * @group Core
 * @param position - The position.
 * @param direction - The view direction.
 * @param velocity - The velocity.
 * @return The adjusted position.
 */

export type Collider = (position: Vector3, direction: Vector3, velocity: number) => Vector3;
