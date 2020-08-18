/**
 * Describes objects that can dispose internal resources.
 */

export interface Disposable {

	/**
	 * Frees internal resources.
	 */

	dispose(): void;

}
