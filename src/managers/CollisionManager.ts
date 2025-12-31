import { EventDispatcher, Vector3 } from "three";
import { Updatable } from "../core/Updatable.js";
import { Settings } from "../settings/Settings.js";
import { BaseEventMap } from "../core/BaseEventMap.js";
import { ControlMode } from "../core/ControlMode.js";
import { Constraint } from "../core/Constraint.js";
import { TransformationData } from "../core/TransformationData.js";

const v = /* @__PURE__ */ new Vector3();

/**
 * Constrains the given vector.
 *
 * @param p - A vector.
 * @param constraints - A collection of constraints.
 * @return The constrained vector.
 */

function applyConstraints(p: Vector3, constraints: Set<Constraint<Vector3>>): Vector3 {

	for(const applyConstraint of constraints) {

		p = applyConstraint(p);

	}

	return p;

}

/**
 * A collision manager.
 *
 * @experimental
 * @group Managers
 */

export class CollisionManager extends EventDispatcher<BaseEventMap> implements Updatable {

	/**
	 * The settings.
	 */

	private readonly settings: Settings;

	/**
	 * The primary transformation data.
	 */

	private readonly transformation: TransformationData;

	/**
	 * Custom constraints for the {@link position} and {@link target}.
	 */

	readonly constraints: Set<Constraint<Vector3>>;

	/**
	 * Colliders to consider for collision tests.
	 *
	 * @todo NYI
	 */

	private readonly colliders: Set<unknown>;

	/**
	 * Constructs a new translation manager.
	 *
	 * @param settings - The settings.
	 * @param transformation - The transformation data.
	 */

	constructor(settings: Settings, transformation: TransformationData) {

		super();

		this.settings = settings;
		this.transformation = transformation;
		this.constraints = new Set();
		this.colliders = new Set();

	}

	/**
	 * Applies constraints to the target and position vectors.
	 */

	applyConstraints(): void {

		if(this.constraints.size === 0) {

			return;

		}

		const transformation = this.transformation;

		if(this.settings.general.mode === "third-person") {

			// Constrain the target.
			v.copy(transformation.target);
			transformation.target.copy(applyConstraints(transformation.target, this.constraints));

			// Move the position together with the target.
			transformation.position.add(v.subVectors(transformation.target, v));

		} else {

			// Constrain the position.
			transformation.position.copy(applyConstraints(transformation.position, this.constraints));

		}

	}

	/**
	 * Performs collision tests.
	 */

	private collisionTest(): void {

		if(this.colliders.size === 0) {

			return;

		}

	}

	update(timestamp: number): void {

		this.applyConstraints();
		this.collisionTest();

	}

}
