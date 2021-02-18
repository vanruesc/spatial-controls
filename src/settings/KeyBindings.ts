import { KeyCode } from "../input";
import { Action } from "../core/Action";

/**
 * JSON representation of key bindings.
 *
 * @ignore
 */

export interface KeyBindingsJSON {

	defaultActions: [[KeyCode, Action]];
	actions: [[KeyCode, Action]];

}

/**
 * Key bindings.
 */

export class KeyBindings {

	/**
	 * The default key bindings.
	 */

	defaultActions: Map<KeyCode, Action>;

	/**
	 * A collection that maps key codes to actions.
	 */

	actions: Map<KeyCode, Action>;

	/**
	 * Constructs new key bindings.
	 */

	constructor() {

		this.defaultActions = new Map<KeyCode, Action>();
		this.actions = new Map<KeyCode, Action>();

	}

	/**
	 * Resets the current bindings to match the default bindings.
	 *
	 * @return This instance.
	 */

	reset(): KeyBindings {

		this.actions = new Map(this.defaultActions);

		return this;

	}

	/**
	 * Establishes default key bindings and resets the current bindings.
	 *
	 * @param actions - A collection that maps key codes to actions.
	 * @return This instance.
	 */

	setDefault(actions: Map<KeyCode, Action>): KeyBindings {

		this.defaultActions = actions;

		return this.reset();

	}

	/**
	 * Clears the default key bindings.
	 *
	 * @return This instance.
	 */

	clearDefault(): KeyBindings {

		this.defaultActions.clear();

		return this;

	}

	/**
	 * Clears the current key bindings.
	 *
	 * @return This instance.
	 */

	clear(): KeyBindings {

		this.actions.clear();

		return this;

	}

	/**
	 * Copies the given key bindings, including the default bindings.
	 *
	 * @param keyBindings - Key bindings.
	 * @return This instance.
	 */

	copy(keyBindings: KeyBindings): KeyBindings {

		this.defaultActions = new Map(keyBindings.defaultActions);
		this.actions = new Map(keyBindings.actions);

		return this;

	}

	/**
	 * Clones these key bindings.
	 *
	 * @return The cloned key bindings.
	 */

	clone(): KeyBindings {

		const clone = new KeyBindings();

		return clone.copy(this);

	}

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: KeyBindingsJSON): KeyBindings {

		this.defaultActions = new Map<KeyCode, Action>(json.defaultActions);
		this.actions = new Map<KeyCode, Action>(json.actions);

		return this;

	}

	/**
	 * Checks if the given key is bound to an action.
	 *
	 * @param keyCode - A key code.
	 * @return Whether the given key is bound to an action.
	 */

	has(keyCode: KeyCode): boolean {

		return this.actions.has(keyCode);

	}

	/**
	 * Returns the action that is bound to the given key.
	 *
	 * @param keyCode - A key code.
	 * @return The action, or undefined if the key is not bound to any action.
	 */

	get(keyCode: KeyCode): Action {

		return this.actions.get(keyCode);

	}

	/**
	 * Binds a key to an action.
	 *
	 * @param keyCode - A key code.
	 * @param action - An action.
	 * @return This instance.
	 */

	set(keyCode: KeyCode, action: Action): KeyBindings {

		this.actions.set(keyCode, action);

		return this;

	}

	/**
	 * Unbinds a key.
	 *
	 * @param keyCode - A key code.
	 * @return Whether the key bindings existed.
	 */

	delete(keyCode: KeyCode): boolean {

		return this.actions.delete(keyCode);

	}

	toJSON(): Record<string, unknown> {

		return {
			defaultActions: [...this.defaultActions],
			actions: [...this.actions]
		};

	}

}
