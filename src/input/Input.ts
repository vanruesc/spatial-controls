import { Modifier } from "./Modifier.js";

/**
 * Converts the given modifiers into a bitmask.
 *
 * @param modifiers - A list of modifiers.
 * @return The modifiers as a bitmask.
 */

function modifiersToBitmask(modifiers: Modifier[]): number {

	let flags = 0;

	if(modifiers.includes("Alt")) { flags = (flags | 1) >>> 0; }
	if(modifiers.includes("Ctrl")) { flags = (flags | 2) >>> 0; }
	if(modifiers.includes("Meta")) { flags = (flags | 4) >>> 0; }
	if(modifiers.includes("Shift")) { flags = (flags | 8) >>> 0; }

	return flags;

}

/**
 * Input options.
 */

export interface InputOptions {

	/**
	 * A list of required modifers.
	 */

	modifiers?: Modifier[];

}

/**
 * Input data.
 *
 * @group Input
 */

export class Input<T = unknown> {

	/**
	 * @see {@link value}
	 */

	_value: T;

	/**
	 * @see {@link modifers}
	 */

	_modifiers: number;

	/**
	 * Constructs new input data.
	 *
	 * @param value - The primary input value.
	 * @param options - Additional options.
	 */

	constructor(value: T, { modifiers }: InputOptions = {}) {

		this._value = value;
		this._modifiers = 0;

		if(modifiers !== undefined) {

			this.modifiers = modifiers;

		}

	}

	/**
	 * The primary input value.
	 */

	get value(): T {

		return this._value;

	}

	set value(value: T) {

		this._value = value;

	}

	/**
	 * The required modifiers, stored as a bitmask.
	 *
	 * Modifiers can be set directly as a bitmask or as a list of modifier keys.
	 */

	get modifiers(): number {

		return this._modifiers;

	}

	set modifiers(value: number | Modifier[]) {

		if(typeof value === "number") {

			this._modifiers = value;
			return;

		}

		this._modifiers = modifiersToBitmask(value);

	}

}
