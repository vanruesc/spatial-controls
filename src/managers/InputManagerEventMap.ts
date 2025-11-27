import { ActionEvent } from "../input/ActionEvent.js";
import { SphericalRotationEvent } from "../input/RotationEvent.js";
import { TranslationEvent } from "../input/TranslationEvent.js";

/**
 * Events emitted by the input manager.
 *
 * @group Input
 */

export interface InputManagerEventMap {

	/**
	 * Indicates that a specific action was activated.
	 */

	activate: ActionEvent;

	/**
	 * Indicates that a specific action was deactivated.
	 */

	deactivate: ActionEvent;

	/**
	 * A spherical rotation change.
	 */

	rotate: SphericalRotationEvent;

	/**
	 * A planar position change.
	 */

	truck: TranslationEvent;

	/**
	 * A screen-aligned position change.
	 */

	pan: TranslationEvent;

}
