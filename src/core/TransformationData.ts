import { Quaternion, Vector3 } from "three";
import { Spatial } from "./Spatial.js";

/**
 * Transformation data.
 *
 * @group Core
 * @internal
 */

export class TransformationData implements Spatial {

	position: Vector3;
	quaternion: Quaternion;
	scale: Vector3;

	/**
	 * A target position.
	 */

	target: Vector3;

	/**
	 * Constructs new transformation data.
	 *
	 * @param data - Data to copy.
	 */

	constructor(data?: TransformationData) {

		this.position = new Vector3();
		this.quaternion = new Quaternion();
		this.scale = new Vector3();
		this.target = new Vector3();

		this.copy(data);

	}

	/**
	 * Copies the given data.
	 *
	 * @param data - The data to copy.
	 * @return This instance.
	 */

	copy(data?: TransformationData): this {

		if(data === undefined) {

			return this;

		}

		this.position.copy(data.position);
		this.quaternion.copy(data.quaternion);
		this.scale.copy(data.scale);
		this.target.copy(data.target);

		return this;

	}

	/**
	 * Directly sets the internal spatial data without copying.
	 */

	set spatial(value: Spatial) {

		this.position = value.position;
		this.quaternion = value.quaternion;
		this.scale = value.scale;

	}

	/**
	 * Creates transformation data based on the given spatial data.
	 *
	 * The spatial data will be reused as-is without copying.
	 *
	 * @param data - The data to use.
	 * @return This instance.
	 */

	static from(data: Spatial | null): TransformationData {

		const result = new TransformationData();

		if(data === null) {

			return result;

		}

		result.position = data.position;
		result.quaternion = data.quaternion;
		result.scale = data.scale;

		if(data instanceof TransformationData) {

			result.target = data.target;

		}

		return result;

	}

}
