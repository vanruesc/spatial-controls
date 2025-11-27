import { BaseEvent } from "three";
import { Action } from "../core/Action.js";

/**
 * An action event.
 */

export interface ActionEvent extends BaseEvent {

	/**
	 * The action.
	 */

	action: Action;

}
