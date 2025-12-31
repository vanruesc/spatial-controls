import { BaseEvent } from "three";

/**
 * An action event.
 *
 * @group Events
 */

export interface ActionEvent<TEventType extends string = string> extends BaseEvent<TEventType> {

	/**
	 * The action.
	 */

	action: string;

}
