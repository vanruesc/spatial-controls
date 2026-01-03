import { BaseEvent } from "three";

/**
 * Events emitted by the translation manager.
 *
 * @group Managers
 */

export interface TranslationManagerEventMap {

	/**
	 * A translation change event.
	 */

	translate: BaseEvent<"translate">;

	/**
	 * A translation start event.
	 */

	translationstart: BaseEvent<"translationstart">;

	/**
	 * A translation end event.
	 */

	translationend: BaseEvent<"translationend">;

}
