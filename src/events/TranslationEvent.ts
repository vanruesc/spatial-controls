import { BaseEvent } from "three";

/**
 * A translation event.
 */

export interface TranslationEvent extends BaseEvent<"translate"> {

	/**
	 * The positional change along the X-axis.
	 */

	deltaX: number;

	/**
	 * The positional change along the Y-axis.
	 */

	deltaY: number;

	/**
	 * The positional change along the Z-axis.
	 */

	deltaZ: number;

}
