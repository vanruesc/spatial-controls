import { Event, EventTarget } from "synthetic-event";
import { Vector3 } from "three";
import { Constraint } from "../core/Constraint.js";
import { TransformationData } from "../core/TransformationData.js";
import { Updatable } from "../core/Updatable.js";
import { Settings } from "../settings/Settings.js";
import { CollisionManagerEventMap } from "./CollisionManagerEventMap.js";
import { Collider } from "../core/Collider.js";

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
 * @group Managers
 */

export class CollisionManager extends EventTarget<CollisionManagerEventMap> implements Updatable {

	/**
	 * The settings.
	 */

	private readonly settings: Settings;

	/**
	 * The primary transformation data.
	 */

	private readonly transformation: TransformationData;

	/**
	 * Custom constraints.
	 */

	readonly constraints: Set<Constraint<Vector3>>;

	/**
	 * Colliders to consider for collision tests.
	 *
	 * @experimental
	 */

	private readonly colliders: Set<Collider>;

	// #region Reusable Events

	/**
	 * A constrain event.
	 */

	private readonly constrainEvent: Event<"constrain">;

	/**
	 * A collision event.
	 */

	private readonly collisionEvent: Event<"collision">;

	// #endregion

	/**
	 * Constructs a new translation manager.
	 *
	 * @param settings - The settings.
	 * @param transformation - The transformation data.
	 */

	constructor(settings = new Settings(), transformation = new TransformationData()) {

		super();

		this.settings = settings;
		this.transformation = transformation;
		this.constraints = new Set();
		this.colliders = new Set();

		this.constrainEvent = { type: "constrain" };
		this.collisionEvent = { type: "collision" };

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
			applyConstraints(transformation.target, this.constraints);

			if(!transformation.target.equals(v)) {

				// Move the position together with the target.
				transformation.position.add(v.subVectors(transformation.target, v));
				this.dispatchEvent(this.constrainEvent);

			}

			return;

		}

		// Constrain the position.
		v.copy(transformation.position);
		applyConstraints(transformation.position, this.constraints);

		if(!transformation.position.equals(v)) {

			this.dispatchEvent(this.constrainEvent);

		}

	}

	/**
	 * Performs collision tests.
	 */

	private collisionTest(): void {

		if(this.colliders.size === 0) {

			return;

		}

		this.dispatchEvent(this.collisionEvent);

	}

	update(timestamp: number): void {

		this.applyConstraints();
		this.collisionTest();

	}

}
