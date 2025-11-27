/**
 * An enumeration of control actions.
 *
 * @group Core
 */

export enum Action {

	/**
	 * Moves forward.
	 */

	MOVE_FORWARD,

	/**
	 * Moves left.
	 */

	MOVE_LEFT,

	/**
	 * Moves backward.
	 */

	MOVE_BACKWARD,

	/**
	 * Moves right.
	 */

	MOVE_RIGHT,

	/**
	 * Moves down.
	 */

	MOVE_DOWN,

	/**
	 * Moves up.
	 */

	MOVE_UP,

	/**
	 * Modulates the translation amount based on the configured `boostMultiplier`.
	 */

	BOOST,

	/**
	 * Dollying away from the subject.
	 */

	DOLLY_OUT,

	/**
	 * Dollying towards the subject.
	 */

	DOLLY_IN,

	/**
	 * Alias for {@link DOLLY_OUT}.
	 */

	ZOOM_OUT = DOLLY_OUT,

	/**
	 * Alias for {@link DOLLY_IN}.
	 */

	ZOOM_IN = DOLLY_IN,

	/**
	 * Spherical rotation in any direction.
	 */

	ROTATE,

	/**
	 * Planar translation relative to the up vector.
	 */

	MOVE_PLANAR,

	/**
	 * Panning relative to the up vector.
	 */

	PAN

}
