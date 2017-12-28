/**
 * A handler for the KeyCode Proxy.
 *
 * @type {Object}
 * @private
 */

const KeyCodeHandler = {

	/**
	 * Handles key code lookups.
	 *
	 * @param {Object} target - The KeyCode enumeration.
	 * @param {String} name - A potential key code identifier.
	 * @return {Number} A key code.
	 */

	get(target, name) {

		return (name in target) ?
			target[name] : (name.length === 1) ?
				name.toUpperCase().charCodeAt(0) : undefined;

	}

};

/**
 * An enumeration of key codes.
 *
 * Special keys are listed explicitly. Simple character keys [A-Z] are computed
 * on demand. For instance, `KeyCode.A` will return the key code for the A key.
 *
 * @type {Object}
 * @property {Number} BACKSPACE - Backspace key.
 * @property {Number} TAB - Tab key.
 * @property {Number} ENTER - Enter key.
 * @property {Number} SHIFT - Shift key.
 * @property {Number} CTRL - Control key.
 * @property {Number} ALT - Alt key.
 * @property {Number} PAUSE - Pause key.
 * @property {Number} CAPS_LOCK - Caps lock key.
 * @property {Number} ESCAPE - Escape key.
 * @property {Number} SPACE - Space bar.
 * @property {Number} PAGE_UP - Page up key.
 * @property {Number} PAGE_DOWN - Page down key.
 * @property {Number} END - End key.
 * @property {Number} HOME - Home key.
 * @property {Number} LEFT - Left arrow key.
 * @property {Number} UP - Up arrow key.
 * @property {Number} RIGHT - Right arrow key.
 * @property {Number} DOWN - Down arrow key.
 * @property {Number} INSERT - Insert key.
 * @property {Number} DELETE - Delete key.
 * @property {Number} META_LEFT - Left OS key.
 * @property {Number} META_RIGHT - Right OS key.
 * @property {Number} SELECT - Select key.
 * @property {Number} NUMPAD_0 - Numpad 0 key.
 * @property {Number} NUMPAD_1 - Numpad 1 key.
 * @property {Number} NUMPAD_2 - Numpad 2 key.
 * @property {Number} NUMPAD_3 - Numpad 3 key.
 * @property {Number} NUMPAD_4 - Numpad 4 key.
 * @property {Number} NUMPAD_5 - Numpad 5 key.
 * @property {Number} NUMPAD_6 - Numpad 6 key.
 * @property {Number} NUMPAD_7 - Numpad 7 key.
 * @property {Number} NUMPAD_8 - Numpad 8 key.
 * @property {Number} NUMPAD_9 - Numpad 9 key.
 * @property {Number} MULTIPLY - Multiply key.
 * @property {Number} ADD - Add key.
 * @property {Number} SUBTRACT - Subtract key.
 * @property {Number} DECIMAL_POINT - Decimal point key.
 * @property {Number} DIVIDE - Divide key.
 * @property {Number} F1 - F1 key.
 * @property {Number} F2 - F2 key.
 * @property {Number} F3 - F3 key.
 * @property {Number} F4 - F4 key.
 * @property {Number} F5 - F5 key.
 * @property {Number} F6 - F6 key.
 * @property {Number} F7 - F7 key.
 * @property {Number} F8 - F8 key.
 * @property {Number} F9 - F9 key.
 * @property {Number} F10 - F10 key.
 * @property {Number} F11 - F11 key.
 * @property {Number} F12 - F12 key.
 * @property {Number} NUM_LOCK - Num lock key.
 * @property {Number} SCROLL_LOCK - Scroll lock key.
 * @property {Number} SEMICOLON - Semicolon key.
 * @property {Number} EQUAL_SIGN - Equal sign key.
 * @property {Number} COMMA - Comma key.
 * @property {Number} DASH - Dash key.
 * @property {Number} PERIOD - Period key.
 * @property {Number} FORWARD_SLASH - Forward slash key.
 * @property {Number} GRAVE_ACCENT - Grave accent key.
 * @property {Number} OPEN_BRACKET - Open bracket key.
 * @property {Number} BACK_SLASH - Back slash key.
 * @property {Number} CLOSE_BRACKET - Close bracket key.
 * @property {Number} SINGLE_QUOTE - Single quote key.
 */

export const KeyCode = new Proxy({

	BACKSPACE: 8,
	TAB: 9,
	ENTER: 13,

	SHIFT: 16,
	CTRL: 17,
	ALT: 18,

	PAUSE: 19,
	CAPS_LOCK: 20,
	ESCAPE: 27,

	SPACE: 32,
	PAGE_UP: 33,
	PAGE_DOWN: 34,
	END: 35,
	HOME: 36,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,

	INSERT: 45,
	DELETE: 46,

	META_LEFT: 91,
	META_RIGHT: 92,
	SELECT: 93,

	NUMPAD_0: 96,
	NUMPAD_1: 97,
	NUMPAD_2: 98,
	NUMPAD_3: 99,
	NUMPAD_4: 100,
	NUMPAD_5: 101,
	NUMPAD_6: 102,
	NUMPAD_7: 103,
	NUMPAD_8: 104,
	NUMPAD_9: 105,
	MULTIPLY: 106,
	ADD: 107,
	SUBTRACT: 109,
	DECIMAL_POINT: 110,
	DIVIDE: 111,

	F1: 112,
	F2: 113,
	F3: 114,
	F4: 115,
	F5: 116,
	F6: 117,
	F7: 118,
	F8: 119,
	F9: 120,
	F10: 121,
	F11: 122,
	F12: 123,

	NUM_LOCK: 144,
	SCROLL_LOCK: 145,

	SEMICOLON: 186,
	EQUAL_SIGN: 187,
	COMMA: 188,
	DASH: 189,
	PERIOD: 190,
	FORWARD_SLASH: 191,
	GRAVE_ACCENT: 192,

	OPEN_BRACKET: 219,
	BACK_SLASH: 220,
	CLOSE_BRACKET: 221,
	SINGLE_QUOTE: 222

}, KeyCodeHandler);
