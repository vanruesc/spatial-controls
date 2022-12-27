import { KeyCode } from "./KeyCode.js";

/**
 * A collection that maps {@linkplain KeyboardEvent.keyCode legacy key codes} to {@link KeyCode} values.
 *
 * @group Input
 * @ignore
 */

export const keyCodeLegacy = new Map<number, KeyCode>([

	[8, KeyCode.BACKSPACE],
	[9, KeyCode.TAB],
	[13, KeyCode.ENTER],

	[16, KeyCode.SHIFT_LEFT],
	[17, KeyCode.CTRL_LEFT],
	[18, KeyCode.ALT_LEFT],

	[19, KeyCode.PAUSE],
	[20, KeyCode.CAPS_LOCK],
	[27, KeyCode.ESCAPE],

	[32, KeyCode.SPACE],
	[33, KeyCode.PAGE_UP],
	[34, KeyCode.PAGE_DOWN],
	[35, KeyCode.END],
	[36, KeyCode.HOME],
	[37, KeyCode.ARROW_LEFT],
	[38, KeyCode.ARROW_UP],
	[39, KeyCode.ARROW_RIGHT],
	[40, KeyCode.ARROW_DOWN],

	[45, KeyCode.INSERT],
	[46, KeyCode.DELETE],

	[48, KeyCode.DIGIT_0],
	[49, KeyCode.DIGIT_1],
	[50, KeyCode.DIGIT_2],
	[51, KeyCode.DIGIT_3],
	[52, KeyCode.DIGIT_4],
	[53, KeyCode.DIGIT_5],
	[54, KeyCode.DIGIT_6],
	[55, KeyCode.DIGIT_7],
	[56, KeyCode.DIGIT_8],
	[57, KeyCode.DIGIT_9],

	[65, KeyCode.KEY_A],
	[66, KeyCode.KEY_B],
	[67, KeyCode.KEY_C],
	[68, KeyCode.KEY_D],
	[69, KeyCode.KEY_E],
	[70, KeyCode.KEY_F],
	[71, KeyCode.KEY_G],
	[72, KeyCode.KEY_H],
	[73, KeyCode.KEY_I],
	[74, KeyCode.KEY_J],
	[75, KeyCode.KEY_K],
	[76, KeyCode.KEY_L],
	[77, KeyCode.KEY_M],
	[78, KeyCode.KEY_N],
	[79, KeyCode.KEY_O],
	[80, KeyCode.KEY_P],
	[81, KeyCode.KEY_Q],
	[82, KeyCode.KEY_R],
	[83, KeyCode.KEY_S],
	[84, KeyCode.KEY_T],
	[85, KeyCode.KEY_U],
	[86, KeyCode.KEY_V],
	[87, KeyCode.KEY_W],
	[88, KeyCode.KEY_X],
	[89, KeyCode.KEY_Y],
	[90, KeyCode.KEY_Z],

	[91, KeyCode.META_LEFT],
	[92, KeyCode.META_RIGHT],
	[93, KeyCode.MEDIA_SELECT],

	[96, KeyCode.NUMPAD_0],
	[97, KeyCode.NUMPAD_1],
	[98, KeyCode.NUMPAD_2],
	[99, KeyCode.NUMPAD_3],
	[100, KeyCode.NUMPAD_4],
	[101, KeyCode.NUMPAD_5],
	[102, KeyCode.NUMPAD_6],
	[103, KeyCode.NUMPAD_7],
	[104, KeyCode.NUMPAD_8],
	[105, KeyCode.NUMPAD_9],
	[106, KeyCode.NUMPAD_MULTIPLY],
	[107, KeyCode.NUMPAD_ADD],
	[109, KeyCode.NUMPAD_SUBTRACT],
	[110, KeyCode.NUMPAD_DECIMAL],
	[111, KeyCode.NUMPAD_DIVIDE],

	[112, KeyCode.F1],
	[113, KeyCode.F2],
	[114, KeyCode.F3],
	[115, KeyCode.F4],
	[116, KeyCode.F5],
	[117, KeyCode.F6],
	[118, KeyCode.F7],
	[119, KeyCode.F8],
	[120, KeyCode.F9],
	[121, KeyCode.F10],
	[122, KeyCode.F11],
	[123, KeyCode.F12],

	[144, KeyCode.NUM_LOCK],
	[145, KeyCode.SCROLL_LOCK],

	[186, KeyCode.SEMICOLON],
	[187, KeyCode.EQUAL],
	[188, KeyCode.COMMA],
	[189, KeyCode.MINUS],
	[190, KeyCode.PERIOD],
	[191, KeyCode.SLASH],
	[192, KeyCode.BACKQUOTE],

	[219, KeyCode.BRACKET_LEFT],
	[221, KeyCode.BRACKET_RIGHT],
	[220, KeyCode.BACKSLASH]

]);
