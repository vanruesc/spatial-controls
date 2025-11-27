import { Modifier } from "./Modifier.js";

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

		let flags = 0;

		if(value.includes("Alt")) { flags |= 1; }
		if(value.includes("Ctrl")) { flags |= 2; }
		if(value.includes("Meta")) { flags |= 4; }
		if(value.includes("Shift")) { flags |= 8; }

		this._modifiers = flags;

	}

}
