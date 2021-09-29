import { Action } from "../core/Action";

/**
 * JSON representation of input bindings.
 */

export interface BindingsJSON<T> {

	defaultActions: [[T, Action]];
	actions: [[T, Action]];

}

/**
 * Input bindings.
 */

export class Bindings<T> {

	/**
	 * The default bindings.
	 */

	defaultActions: Map<T, Action>;

	/**
	 * A collection that maps keys to actions.
	 */

	actions: Map<T, Action>;

	/**
	 * Constructs new input bindings.
	 */

	constructor() {

		this.defaultActions = new Map<T, Action>();
		this.actions = new Map<T, Action>();

	}

	/**
	 * Resets the current bindings to match the default bindings.
	 *
	 * @return This instance.
	 */

	reset(): Bindings<T> {

		this.actions = new Map(this.defaultActions);
		return this;

	}

	/**
	 * Establishes default bindings and resets the current bindings.
	 *
	 * @param actions - A collection that maps keys to actions.
	 * @return This instance.
	 */

	setDefault(actions: Map<T, Action>): Bindings<T> {

		this.defaultActions = actions;
		return this.reset();

	}

	/**
	 * Clears the default bindings.
	 *
	 * @return This instance.
	 */

	clearDefault(): Bindings<T> {

		this.defaultActions.clear();
		return this;

	}

	/**
	 * Clears the current bindings.
	 *
	 * @return This instance.
	 */

	clear(): Bindings<T> {

		this.actions.clear();
		return this;

	}

	/**
	 * Copies the given bindings, including the default bindings.
	 *
	 * @param bindings - Bindings.
	 * @return This instance.
	 */

	copy(bindings: Bindings<T>): Bindings<T> {

		this.defaultActions = new Map(bindings.defaultActions);
		this.actions = new Map(bindings.actions);

		return this;

	}

	/**
	 * Clones these bindings.
	 *
	 * @return The cloned bindings.
	 */

	clone(): Bindings<T> {

		const clone = new Bindings<T>();
		return clone.copy(this);

	}

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: BindingsJSON<T>): Bindings<T> {

		if(json !== undefined) {

			this.defaultActions = new Map<T, Action>(json.defaultActions);
			this.actions = new Map<T, Action>(json.actions);

		}

		return this;

	}

	/**
	 * Checks if the given key is bound to an action.
	 *
	 * @param key - A key.
	 * @return Whether the given key is bound to an action.
	 */

	has(key: T): boolean {

		return this.actions.has(key);

	}

	/**
	 * Returns the action that is bound to the given key.
	 *
	 * @param key - A key.
	 * @return The action, or undefined if the key is not bound to any action.
	 */

	get(key: T): Action {

		return this.actions.get(key);

	}

	/**
	 * Binds a key to an action.
	 *
	 * @param key - A key.
	 * @param action - An action.
	 * @return This instance.
	 */

	set(key: T, action: Action): Bindings<T> {

		this.actions.set(key, action);
		return this;

	}

	/**
	 * Unbinds a key.
	 *
	 * @param key - The key.
	 * @return Whether the binding existed.
	 */

	delete(key: T): boolean {

		return this.actions.delete(key);

	}

	toJSON(): Record<string, unknown> {

		return {
			defaultActions: [...this.defaultActions],
			actions: [...this.actions]
		};

	}

}
