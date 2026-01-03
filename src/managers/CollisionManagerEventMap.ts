import { BaseEvent } from "three";

/**
 * Events emitted by the collision manager.
 *
 * @group Managers
 */

export interface CollisionManagerEventMap {

	/**
	 * Fires when the spatial is affected by a constraint.
	 */

	constrain: BaseEvent<"constrain">;

	/**
	 * A collision event.
	 */

	collision: BaseEvent<"collision">;

}
