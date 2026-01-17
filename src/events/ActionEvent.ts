import { Event } from "synthetic-event";

/**
 * An action event.
 *
 * @group Events
 */

export interface ActionEvent<TEventType extends string = string> extends Event<TEventType> {

	/**
	 * The action.
	 */

	action: string;

}
