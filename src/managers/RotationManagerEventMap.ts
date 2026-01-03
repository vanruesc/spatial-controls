import { BaseEvent } from "three";

/**
 * Events emitted by the rotation manager.
 *
 * @group Managers
 */

export interface RotationManagerEventMap {

	/**
	 * A rotation change event.
	 */

	rotate: BaseEvent<"rotate">;

	/**
	 * A rotation start event.
	 */

	rotationstart: BaseEvent<"rotationstart">;

	/**
	 * A rotation end event.
	 */

	rotationend: BaseEvent<"rotationend">;

}
