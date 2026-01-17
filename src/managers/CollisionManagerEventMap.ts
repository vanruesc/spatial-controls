import { Event } from "synthetic-event";

/**
 * Events emitted by the collision manager.
 *
 * @group Managers
 */

export interface CollisionManagerEventMap {

	/**
	 * Fires when the spatial is affected by a constraint.
	 */

	constrain: Event<"constrain">;

	/**
	 * A collision event.
	 */

	collision: Event<"collision">;

}
