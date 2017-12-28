/**
 * The Strategy interface.
 */

export class Strategy {

	/**
	 * Executes this strategy.
	 *
	 * @throws {Error} An error is thrown if the method is not overridden.
	 * @param {Boolean} flag - A flag.
	 */

	execute(flag) {

		throw new Error("Strategy#execute method not implemented!");

	}

}
