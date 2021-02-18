/**
 * Describes objects that can be updated.
 */

export interface Updatable {

	/**
	 * Updates this object.
	 *
	 * @param timestamp - The current time in milliseconds.
	 */

	update(timestamp: number): void;

}
