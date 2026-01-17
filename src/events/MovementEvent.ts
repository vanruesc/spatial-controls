import { Event } from "synthetic-event";

/**
 * A movement event.
 *
 * @group Events
 */

export interface MovementEvent extends Event<"move"> {

	/**
	 * The number of active pointers.
	 */

	pointerCount: number;

	/**
	 * The position change along the X-axis.
	 */

	deltaX: number;

	/**
	 * The position change along the Y-axis.
	 */

	deltaY: number;

	/**
	 * The position on the X-axis.
	 */

	x: number;

	/**
	 * The position on the Y-axis.
	 */

	y: number;

}
