/**
 * A strategy.
 */

export interface Strategy {

	/**
	 * Executes this strategy.
	 *
	 * @param flag - A flag.
	 */

	execute(flag: boolean): void;

}
