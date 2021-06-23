import { TranslationSettings } from "../settings";
import { Strategy } from "./Strategy";

/**
 * A boost strategy.
 */

export class BoostStrategy implements Strategy {

	/**
	 * Translation settings.
	 */

	private translation: TranslationSettings;

	/**
	 * Constructs a new boost strategy.
	 *
	 * @param translation - Translation settings.
	 */

	constructor(translation: TranslationSettings) {

		this.translation = translation;

	}

	execute(flag: boolean): void {

		this.translation.setBoost(flag);

	}

}
