import { Action } from "./Action.js";

/**
 * Counts the number of enabled flags in the given bitmask.
 *
 * @param bitmask - A bitmask.
 * @return The number of enabled flags.
 * @internal
 */

function getEnabledFlagCount(bitmask: number): number {

	let n = bitmask - ((bitmask >>> 1) & 0x55555555);
	n = (n & 0x33333333) + ((n >>> 2) & 0x33333333);
	return ((n + (n >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;

}

/**
 * A bound action with optional modifiers.
 *
 * @group Core
 * @internal
 */

export class BoundAction {

	/**
	 * The action.
	 */

	readonly action: Action;

	/**
	 * Required modifiers stored as a bitmask.
	 */

	readonly modifiers: number;

	/**
	 * The number of enabled modifier flags.
	 */

	readonly modifierCount: number;

	/**
	 * Constructs a new bound action.
	 *
	 * @param action - An action.
	 * @param modifiers - Required modifiers stored as a bitmask.
	 */

	constructor(action: Action, modifiers: number) {

		this.action = action;
		this.modifiers = modifiers;
		this.modifierCount = getEnabledFlagCount(modifiers);

	}

}
