import { BaseEvent } from "three";
import { Action } from "../core/Action.js";

/**
 * An action event.
 *
 * @group Events
 */

export interface ActionEvent<TEventType extends string = string> extends BaseEvent<TEventType> {

	/**
	 * The action.
	 */

	action: Action;

}
