import { BaseEventMap } from "../core/BaseEventMap.js";
import { TranslationEvent } from "../events/TranslationEvent.js";

/**
 * Events emitted by the translation manager.
 *
 * @group Managers
 */

export interface TranslationManagerEventMap extends BaseEventMap {

	/**
	 * A general translation change.
	 */

	translate: TranslationEvent;

	/**
	 * A planar position change.
	 */

	truck: TranslationEvent;

	/**
	 * A screen-aligned position change.
	 */

	pan: TranslationEvent;

}
