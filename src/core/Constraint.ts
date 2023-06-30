/**
 * A constraint.
 *
 * @param T - The type of the value that will be constrained.
 */

export interface Constraint<T> {

	/**
	 * Constrains a given value.
	 *
	 * @param value - The value to constrain.
	 * @return The constrained value.
	 */

	(value: T): T;

}
