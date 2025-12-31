import { BaseEventMap } from "../core/BaseEventMap.js";

/**
 * Events emitted by the rotation manager.
 *
 * @group Managers
 */

export interface RotationManagerEventMap extends BaseEventMap {

	/**
	 * A spherical rotation change.
	 */

	rotate: SphericalRotationEvent;

}
