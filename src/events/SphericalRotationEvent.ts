import { BaseEvent } from "three";

/**
 * A spherical rotation event.
 */

export interface SphericalRotationEvent extends BaseEvent {

	/**
	 * The rotational change of the azimuth angle theta in radians.
	 */

	theta: number;

	/**
	 * The rotational change of the polar angle phi in radians.
	 */

	phi: number;

}
