import { Action } from "./Action.js";

/**
 * A bound action with optional modifiers.
 *
 * @internal
 */

export interface BoundAction {

	/**
	 * The action.
	 */

	readonly action: Action;

	/**
	 * Required modifiers stored as a bitmask.
	 */

	readonly modifiers: number;

}
