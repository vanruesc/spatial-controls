/**
 * A strategy.
 *
 * @group Strategies
 */

export interface Strategy {

	/**
	 * Executes this strategy.
	 *
	 * @param flag - A flag.
	 * @param event - An event.
	 */

	execute(flag: boolean, event?: Event): void;

}
