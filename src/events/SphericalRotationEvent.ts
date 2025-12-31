import { BaseEvent } from "three";

/**
 * A spherical rotation event.
 */

export interface SphericalRotationEvent extends BaseEvent<"rotate"> {

	/**
	 * The azimuth angle in radians.
	 */

	theta: number;

	/**
	 * The polar angle in radians.
	 */

	phi: number;

}
