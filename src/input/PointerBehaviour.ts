/**
 * An enumeration of pointer behaviours.
 */

export enum PointerBehaviour {

	/**
	 * The pointer will not be locked and the pointer button must be held down.
	 */

	DEFAULT = "default",

	/**
	 * Locks the pointer on interaction.
	 */

	LOCK = "lock",

	/**
	 * Locks the pointer on interaction and the pointer button must be held down.
	 */

	LOCK_HOLD = "lock-hold"

}
