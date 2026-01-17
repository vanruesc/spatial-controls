import { Event } from "synthetic-event";

/**
 * Events emitted by the rotation manager.
 *
 * @group Managers
 */

export interface RotationManagerEventMap {

	/**
	 * A rotation change event.
	 */

	rotate: Event<"rotate">;

	/**
	 * A rotation start event.
	 */

	rotationstart: Event<"rotationstart">;

	/**
	 * A rotation end event.
	 */

	rotationend: Event<"rotationend">;

}
