/**
 * A scalar damper that retains velocity.
 *
 * Based on Game Programming Gems 4 Chapter 1.10.
 */

export class ScalarDamper {

	/**
	 * The maximum speed.
	 */

	private maxSpeed: number;

	/**
	 * The current velocity.
	 */

	private velocity: number;

	/**
	 * Constructs a new scalar damper.
	 *
	 * @param maxSpeed - The maximum speed at which the value can change.
	 */

	constructor(maxSpeed = Number.POSITIVE_INFINITY) {

		this.maxSpeed = maxSpeed;
		this.velocity = 0.0;

	}

	/**
	 * Resets the velocity.
	 */

	resetVelocity(): void {

		this.velocity = 0.0;

	}

	/**
	 * Smooth interpolation with exponential velocity gain/decay.
	 *
	 * @param a - The start value.
	 * @param b - The target value.
	 * @param lambda - A smoothing factor.
	 * @param omega - See {@link ScalarDamper.calculateOmega}.
	 * @param exp - See {@link ScalarDamper.calculateExp}.
	 * @param dt - The delta time in seconds.
	 * @return The interpolated value.
	 */

	interpolate(a: number, b: number, lambda: number, omega: number, exp: number,
		dt: number): number {

		// Calculate the difference and clamp to max speed.
		const maxChange = this.maxSpeed * Math.max(lambda, 1e-6);
		const change = Math.min(Math.max(a - b, -maxChange), maxChange);
		const c = a - change;

		const velocity = this.velocity;
		const t = (velocity + omega * change) * dt;
		this.velocity = (velocity - omega * t) * exp;

		let result = c + (change + t) * exp;

		// Prevent infinite approximation and overshooting.
		if(Math.abs(change) < 1e-6) {

			result = b;
			this.velocity = 0.0;

		} else if(((b - a) > 0.0) === (result > b)) {

			result = b;
			this.velocity = (result - b) / dt;

		}

		return result;

	}

	/**
	 * Calculates the Omega factor which can be reused for interpolations during
	 * the same frame.
	 *
	 * @param lambda - A smoothing factor.
	 * @return Omega.
	 */

	static calculateOmega(lambda: number): number {

		return 2.0 / Math.max(lambda, 1e-6);

	}

	/**
	 * Calculates the exponentional factor which can be reused for interpolations
	 * during the same frame.
	 *
	 * @param lambda - A smoothing factor.
	 * @param omega - See {@link ScalarDamper.calculateOmega}.
	 * @param dt - The delta time in seconds.
	 * @return The exponentional interpolation factor.
	 */

	static calculateExp(lambda: number, omega: number, dt: number): number {

		const x = omega * dt;
		return 1.0 / (1.0 + x + 0.48 * x * x + 0.235 * x * x * x);

	}

}
