/**
 * Exposure of the library components.
 *
 * @module delta-controls
 */

export {
	Action,
	DeltaControls
} from "./core";

export {
	KeyCode,
	PointerButton
} from "./input";

export {
	MovementState,
	RotationManager,
	TranslationManager
} from "./managers";

export {
	GeneralSettings,
	KeyBindings,
	PointerSettings,
	RotationSettings,
	SensitivitySettings,
	TranslationSettings,
	Settings,
	ZoomSettings
} from "./settings";

export {
	Direction,
	MovementStrategy,
	Strategy,
	ZoomStrategy
} from "./strategies";
