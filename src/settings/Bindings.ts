import { Action } from "../core/Action.js";

/**
 * Input bindings.
 *
 * @group Settings
 * @param TKey - The type of the binding keys.
 */

export class Bindings<TKey> {

	/**
	 * The default bindings.
	 */

	defaultActions: Map<TKey, Action>;

	/**
	 * A collection that maps keys to actions.
	 */

	actions: Map<TKey, Action>;

	/**
	 * Constructs new input bindings.
	 */

	constructor() {

		this.defaultActions = new Map<TKey, Action>();
		this.actions = new Map<TKey, Action>();

	}

	/**
	 * Resets the current bindings to match the default bindings.
	 *
	 * @return This instance.
	 */

	reset(): Bindings<TKey> {

		this.actions = new Map(this.defaultActions);
		return this;

	}

	/**
	 * Establishes default bindings and resets the current bindings.
	 *
	 * @param actions - A collection that maps keys to actions.
	 * @return This instance.
	 */

	setDefault(actions: Map<TKey, Action>): Bindings<TKey> {

		this.defaultActions = actions;
		return this.reset();

	}

	/**
	 * Clears the default bindings.
	 *
	 * @return This instance.
	 */

	clearDefault(): Bindings<TKey> {

		this.defaultActions.clear();
		return this;

	}

	/**
	 * Clears the current bindings.
	 *
	 * @return This instance.
	 */

	clear(): Bindings<TKey> {

		this.actions.clear();
		return this;

	}

	/**
	 * Copies the given bindings, including the default bindings.
	 *
	 * @param bindings - Bindings.
	 * @return This instance.
	 */

	copy(bindings: Bindings<TKey>): Bindings<TKey> {

		this.defaultActions = new Map(bindings.defaultActions);
		this.actions = new Map(bindings.actions);

		return this;

	}

	/**
	 * Clones these bindings.
	 *
	 * @return The cloned bindings.
	 */

	clone(): Bindings<TKey> {

		const clone = new Bindings<TKey>();
		return clone.copy(this);

	}

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: Bindings<TKey>): Bindings<TKey> {

		if(json !== undefined) {

			this.defaultActions = new Map<TKey, Action>(json.defaultActions);
			this.actions = new Map<TKey, Action>(json.actions);

		}

		return this;

	}

	/**
	 * Checks if the given key is bound to an action.
	 *
	 * @param key - A key.
	 * @return Whether the given key is bound to an action.
	 */

	has(key: TKey): boolean {

		return this.actions.has(key);

	}

	/**
	 * Returns the action that is bound to the given key.
	 *
	 * @param key - A key.
	 * @return The action, or undefined if the key is not bound to any action.
	 */

	get(key: TKey): Action | undefined {

		return this.actions.get(key);

	}

	/**
	 * Binds a key to an action.
	 *
	 * @param key - A key.
	 * @param action - An action.
	 * @return This instance.
	 */

	set(key: TKey, action: Action): Bindings<TKey> {

		this.actions.set(key, action);
		return this;

	}

	/**
	 * Unbinds a key.
	 *
	 * @param key - The key.
	 * @return Whether the binding existed.
	 */

	delete(key: TKey): boolean {

		return this.actions.delete(key);

	}

	toJSON(): Record<string, unknown> {

		return {
			defaultActions: [...this.defaultActions],
			actions: [...this.actions]
		};

	}

}
