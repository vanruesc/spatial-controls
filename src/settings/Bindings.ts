import { Action } from "../core/Action.js";
import { BoundAction } from "../core/BoundAction.js";
import { Input } from "../input/Input.js";
import { getWheelRotation } from "../input/WheelRotation.js";

/**
 * Extracts active modifiers from a given event and returns them as a bitmask.
 *
 * @param event - An event.
 * @return The modifiers as a bitmask.
 */

function getModifiersFromEvent(event: MouseEvent | KeyboardEvent): number {

	let flags = 0;

	if(event.altKey) { flags = (flags | 1) >>> 0; }
	if(event.ctrlKey) { flags = (flags | 2) >>> 0; }
	if(event.metaKey) { flags = (flags | 4) >>> 0; }
	if(event.shiftKey) { flags = (flags | 8) >>> 0; }

	return flags;

}

/**
 * Input bindings.
 *
 * @group Settings
 * @param TKey - The type of the input values.
 */

export class Bindings<TInput> {

	/**
	 * The default bindings.
	 */

	private defaultActions: Map<TInput, BoundAction[]>;

	/**
	 * A collection that maps inputs to actions.
	 */

	private actions: Map<TInput, BoundAction[]>;

	/**
	 * Constructs new input bindings.
	 */

	constructor() {

		this.defaultActions = new Map();
		this.actions = new Map();

	}

	/**
	 * Resets the current bindings to match the default bindings.
	 *
	 * @return This instance.
	 */

	reset(): this {

		this.actions = new Map(this.defaultActions);
		return this;

	}

	/**
	 * Resets the current bindings and establishes default bindings.
	 *
	 * @param actions - A collection that maps inputs to actions.
	 * @return This instance.
	 */

	setDefault(actions: Map<TInput | Input<TInput>, Action>): this {

		this.actions.clear();

		for(const entry of actions) {

			this.set(entry[0], entry[1]);

		}

		this.defaultActions = new Map(this.actions);
		return this;

	}

	/**
	 * Clears the default bindings.
	 *
	 * @return This instance.
	 */

	clearDefault(): this {

		this.defaultActions.clear();
		return this;

	}

	/**
	 * Clears the current bindings.
	 *
	 * @return This instance.
	 */

	clear(): this {

		this.actions.clear();
		return this;

	}

	/**
	 * Copies the given bindings, including the default bindings.
	 *
	 * @param bindings - Bindings.
	 * @return This instance.
	 */

	copy(bindings: Bindings<TInput>): this {

		this.defaultActions = new Map(bindings.defaultActions);
		this.actions = new Map(bindings.actions);
		return this;

	}

	/**
	 * Clones these bindings.
	 *
	 * @return The cloned bindings.
	 */

	clone(): Bindings<TInput> {

		const clone = new Bindings<TInput>();
		return clone.copy(this);

	}

	/**
	 * Checks if any actions are bound to the given input.
	 *
	 * @param input - An input.
	 * @return Whether the given input is bound to an action.
	 */

	has(input: TInput | Input<TInput>): boolean {

		if(input instanceof Input) {

			const value = input.value;
			const modifiers = input.modifiers;

			return this.actions.get(value)?.some(x => x.modifiers === modifiers) !== undefined;

		}

		return this.actions.has(input);

	}

	/**
	 * Returns the action that exactly matches the given input.
	 *
	 * @param input - An input.
	 * @return The action, or undefined if the input is not bound to any action.
	 */

	get(input: TInput | Input<TInput>): Action | undefined {

		let value = input as TInput;
		let modifiers = 0;

		if(input instanceof Input) {

			value = input.value;
			modifiers = input.modifiers;

		}

		return this.actions.get(value)?.find(x => x.modifiers === modifiers)?.action;

	}

	/**
	 * Binds an action to an input.
	 *
	 * @param input - An input.
	 * @param action - An action.
	 * @return This instance.
	 */

	set(input: TInput | Input<TInput>, action: Action): this {

		let value = input as TInput;
		let modifiers = 0;

		if(input instanceof Input) {

			value = input.value;
			modifiers = input.modifiers;

		}

		if(this.actions.has(value)) {

			const boundActions = this.actions.get(value)!;

			if(!boundActions.some(x => x.action === action && x.modifiers === modifiers)) {

				boundActions.push(new BoundAction(action, modifiers));

			}

		} else {

			this.actions.set(value, [new BoundAction(action, modifiers)]);

		}

		return this;

	}

	/**
	 * Unbinds an action.
	 *
	 * @param input - The input.
	 * @return Whether the binding existed.
	 */

	delete(input: TInput | Input<TInput>): boolean {

		let value = input as TInput;
		let modifiers = 0;

		if(input instanceof Input) {

			value = input.value;
			modifiers = input.modifiers;

		}

		const boundActions = this.actions.get(value);
		const match = boundActions?.find(x => x.modifiers === modifiers);

		if(boundActions === undefined || match === undefined) {

			return false;

		}

		if(boundActions.length === 1) {

			return this.actions.delete(value);

		}

		boundActions.splice(boundActions.indexOf(match), 1);
		return true;

	}

	/**
	 * Returns all actions that match the given mouse event.
	 *
	 * @param event - A mouse event
	 * @return The matching actions, or undefined if the input is not bound to any action.
	 */

	matchMouseEvent(event: MouseEvent): Action[] | undefined {

		const value = event.button as TInput;
		const modifiers = getModifiersFromEvent(event);
		return this.match(value, modifiers);

	}

	/**
	 * Returns all actions that match the given wheel event.
	 *
	 * @param event - A wheel event
	 * @return The matching actions, or undefined if the input is not bound to any action.
	 */

	matchWheelEvent(event: WheelEvent): Action[] | undefined {

		const value = getWheelRotation(event) as TInput;
		const modifiers = getModifiersFromEvent(event);
		return this.match(value, modifiers);

	}

	/**
	 * Returns all actions that match the given keyboard event.
	 *
	 * @param event - A keyboard event
	 * @return The matching actions, or undefined if the input is not bound to any action.
	 */

	matchKeyboardEvent(event: KeyboardEvent): Action[] | undefined {

		const value = event.code as TInput;
		const modifiers = getModifiersFromEvent(event);
		return this.match(value, modifiers);

	}

	/**
	 * Returns all actions that match the given input.
	 *
	 * @param input - An input.
	 * @param modifiers - A modifier bitmask. Default is `~0 >>> 0` which allows all modifiers.
	 * @return The matching actions sorted by specificity, or undefined if the input is not bound to any action.
	 */

	match(input: TInput, modifiers = (~0 >>> 0)): Action[] | undefined {

		if(!this.actions.has(input)) {

			return undefined;

		}

		return this.actions.get(input)!
			.filter(x => (x.modifiers & modifiers) === x.modifiers)
			.sort((a, b) => (b.modifierCount - a.modifierCount))
			.map(x => x.action);

	}

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: Bindings<TInput>): this {

		if(json !== undefined) {

			this.defaultActions = new Map(json.defaultActions);
			this.actions = new Map(json.actions);

		}

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			defaultActions: [...this.defaultActions],
			actions: [...this.actions]
		};

	}

}
