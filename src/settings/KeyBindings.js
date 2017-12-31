/**
 * Key bindings.
 */

export class KeyBindings {

	/**
	 * Constructs new key bindings.
	 */

	constructor() {

		/**
		 * The default key bindings.
		 *
		 * @type {Map}
		 */

		this.defaultActions = new Map();

		/**
		 * The current key bindings.
		 *
		 * @type {Map}
		 */

		this.actions = new Map();

	}

	/**
	 * Resets the current bindings to match the default bindings.
	 *
	 * @return {KeyBindings} This key bindings instance.
	 */

	reset() {

		this.actions = new Map(this.defaultActions);

		return this;

	}

	/**
	 * Establishes default key bindings and resets the current bindings.
	 *
	 * @param {Map} map - A map. Each key must be a key code and each value must be a number.
	 * @return {KeyBindings} This key bindings instance.
	 */

	setDefault(actions) {

		this.defaultActions = actions;

		return this.reset();

	}

	/**
	 * Copies the given key bindings, including the default bindings.
	 *
	 * @param {KeyBindings} keyBindings - Key bindings.
	 * @return {KeyBindings} This key bindings instance.
	 */

	copy(keyBindings) {

		this.defaultActions = new Map(keyBindings.defaultActions);
		this.actions = new Map(keyBindings.actions);

		return this;

	}

	/**
	 * Clears the default key bindings.
	 *
	 * @return {KeyBindings} This key bindings instance.
	 */

	clearDefault() {

		this.defaultActions.clear();

		return this;

	}

	/**
	 * Clears the current key bindings.
	 *
	 * @return {KeyBindings} This key bindings instance.
	 */

	clear() {

		this.actions.clear();

		return this;

	}

	/**
	 * Clones these key bindings.
	 *
	 * @return {KeyBindings} The cloned key bindings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

	/**
	 * Checks if the given key is bound to an action.
	 *
	 * @param {KeyCode} keyCode - A key code.
	 * @return {Boolean} Whether the given key is bound to an action.
	 */

	has(keyCode) {

		return this.actions.has(keyCode);

	}

	/**
	 * Returns the action that is bound to the given key.
	 *
	 * @param {KeyCode} keyCode - A key code.
	 * @return {Number} The action, or undefined if the key is not bound to any action.
	 */

	get(keyCode) {

		return this.actions.get(keyCode);

	}

	/**
	 * Binds a key to an action.
	 *
	 * @param {KeyCode} keyCode - A key code.
	 * @param {Number} action - An action.
	 * @return {KeyBindings} This instance.
	 */

	set(keyCode, action) {

		this.actions.set(keyCode, action);

		return this;

	}

	/**
	 * Unbinds a key.
	 *
	 * @param {KeyCode} keyCode - A key code.
	 * @return {Boolean} Whether the key bindings existed or not.
	 */

	delete(keyCode) {

		return this.actions.delete(keyCode);

	}

	/**
	 * Creates a plain representation of this instance.
	 *
	 * @return {String} The plain representation.
	 */

	toJSON() {

		return {
			defaultActions: [...this.defaultActions],
			actions: [...this.actions]
		};

	}

}
