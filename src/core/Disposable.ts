/**
 * Describes objects that can dispose internal resources.
 *
 * @group Core
 */

export interface Disposable {

	/**
	 * Frees internal resources.
	 */

	dispose(): void;

}
