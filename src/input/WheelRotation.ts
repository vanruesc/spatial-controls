/**
 * An enumeration of wheel rotations.
 *
 * @group Input
 */

export enum WheelRotation {

	/**
	 * A negative horizontal wheel rotation, i.e. scrolling left.
	 */

	NEGATIVE_X = "-x",

	/**
	 * A positive horizontal wheel rotation, i.e. scrolling right.
	 */

	POSITIVE_X = "+x",

	/**
	 * A negative vertical wheel rotation, i.e. scrolling up.
	 */

	NEGATIVE_Y = "-y",

	/**
	 * A positive vertical wheel rotation, i.e. scrolling down.
	 */

	POSITIVE_Y = "+y"

}

/**
 * Retrieves the wheel rotation from a given wheel event.
 *
 * @param event - The event.
 * @return The rotation, or undefined if there is no delta information.
 */

export function getWheelRotation(event: WheelEvent): WheelRotation | undefined {

	// Check Y first since it's more common.
	if(event.deltaY !== 0.0) {

		return (event.deltaY < 0.0) ? WheelRotation.NEGATIVE_Y : WheelRotation.POSITIVE_Y;

	} else if(event.deltaX !== 0.0) {

		return (event.deltaX < 0.0) ? WheelRotation.NEGATIVE_X : WheelRotation.POSITIVE_X;

	}

	return undefined;

}
