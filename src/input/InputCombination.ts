import { Modifier } from "./Modifier.js";

/**
 * Maps {@linkplain Modifier modifiers} to bit flags.
 */

const modifierFlags = new Map<Modifier, number>([
	["Alt", 1],
	["Ctrl", 2],
	["Meta", 4],
	["Shift", 8]
]);

/**
 * An input combination with additional modifiers.
 */

export class InputCombination<T> {

	/**
	 * @see {@link value}
	 */

	private _value: T;

	/**
	 * @see {@link modifiers}
	 */

	private _modifiers: number;

	/**
	 * Constructs a new input combination.
	 *
	 * @param value - The primary input value.
	 * @param modifiers - Additional input modifiers.
	 */

	constructor(value: T, modifiers: Modifier[] | null = null) {

		this._value = value;
		this._modifiers = 0;

		this.value = value;
		this.modifiers = modifiers;

	}

	/**
	 * The input value.
	 */

	get value(): T {

		return this._value;

	}

	set value(value: T) {

		this._value = value;

	}

	/**
	 * The modifiers, stored as a bitmask.
	 */

	get modifiers(): number {

		return this._modifiers;

	}

	set modifiers(value: Modifier[] | number | null) {

		if(typeof value === "number") {

			this._modifiers = value;

		} else if(value !== null && value.length > 0) {

			this._modifiers = value.reduce((a, b) => a | modifierFlags.get(b)!, 0);

		} else {

			this._modifiers = 0;

		}

	}

	/**
	 * Sets the modifiers based on a given event.
	 *
	 * @param event - The event.
	 */

	setModifiersFromEvent(event: MouseEvent | KeyboardEvent): void {

		let flags = 0;

		if(event.altKey) { flags |= 1; }
		if(event.ctrlKey) { flags |= 2; }
		if(event.metaKey) { flags |= 4; }
		if(event.shiftKey) { flags |= 8; }

		this._modifiers = flags;

	}

}
