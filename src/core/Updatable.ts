/**
 * Describes objects that can be updated.
 */

export interface Updatable {

	/**
	 * Updates this object.
	 *
	 * @param deltaTime - The time since the last update in seconds.
	 */

	update(deltaTime: number): void;

}
