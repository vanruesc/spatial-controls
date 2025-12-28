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
	 * The position change along the X-Axis.
	 */

	x: number;

	/**
	 * The position change along the Y-Axis.
	 */

	y: number;

}
