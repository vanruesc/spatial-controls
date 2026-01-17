import { Event } from "synthetic-event";

/**
 * Events emitted by the translation manager.
 *
 * @group Managers
 */

export interface TranslationManagerEventMap {

	/**
	 * A translation change event.
	 */

	translate: Event<"translate">;

	/**
	 * A translation start event.
	 */

	translationstart: Event<"translationstart">;

	/**
	 * A translation end event.
	 */

	translationend: Event<"translationend">;

}
