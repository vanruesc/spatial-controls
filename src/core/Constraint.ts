/**
 * Constrains a given value.
 *
 * @group Core
 * @param T - The type of the value that will be constrained.
 * @param value - The value to constrain.
 * @return The constrained value.
 */

export type Constraint<T> = (value: T) => T;
