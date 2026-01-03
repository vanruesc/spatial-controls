import { BaseEvent } from "three";
import { ActionEvent } from "../events/ActionEvent.js";
import { MovementEvent } from "../events/MovementEvent.js";

/**
 * Events emitted by the input manager.
 *
 * @group Managers
 */

export interface InputManagerEventMap {

	/**
	 * Indicates that a specific action was activated.
	 */

	activate: ActionEvent<"activate">;

	/**
	 * Indicates that a specific action was deactivated.
	 */

	deactivate: ActionEvent<"deactivate">;

	/**
	 * A pointer movement change.
	 */

	move: MovementEvent;

	/**
	 * Signals that the input state has been reset.
	 */

	reset: BaseEvent<"reset">;

}
