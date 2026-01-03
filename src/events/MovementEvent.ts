import { BaseEvent } from "three";

/**
 * A movement event.
 *
 * @group Events
 */

export interface MovementEvent extends BaseEvent<"move"> {

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
