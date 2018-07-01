/**
 * delta-controls v2.0.3 build Sun Jul 01 2018
 * https://github.com/vanruesc/delta-controls
 * Copyright 2018 Raoul van Rüschen, Zlib
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.DELTACONTROLS = {})));
}(this, (function (exports) { 'use strict';

	/**
	 * An enumeration of control actions.
	 *
	 * This enum can be used to bind keys to specific control actions.
	 *
	 * @type {Object}
	 * @property {Number} MOVE_FORWARD - Move forward.
	 * @property {Number} MOVE_LEFT - Move left.
	 * @property {Number} MOVE_BACKWARD - Move backward.
	 * @property {Number} MOVE_RIGHT - Move right.
	 * @property {Number} MOVE_DOWN - Move down.
	 * @property {Number} MOVE_UP - Move up.
	 * @property {Number} ZOOM_OUT - Zoom out.
	 * @property {Number} ZOOM_IN - Zoom in.
	 */

	const Action = {

		MOVE_FORWARD: 0,
		MOVE_LEFT: 1,
		MOVE_BACKWARD: 2,
		MOVE_RIGHT: 3,
		MOVE_DOWN: 4,
		MOVE_UP: 5,
		ZOOM_OUT: 6,
		ZOOM_IN: 7

	};

	/**
	 * A vector with three components.
	 */

	class Vector3 {

		/**
		 * Constructs a new vector.
		 *
		 * @param {Number} [x=0] - The X component.
		 * @param {Number} [y=0] - The Y component.
		 * @param {Number} [z=0] - The Z component.
		 */

		constructor(x = 0, y = 0, z = 0) {

			/**
			 * The X component.
			 *
			 * @type {Number}
			 */

			this.x = x;

			/**
			 * The Y component.
			 *
			 * @type {Number}
			 */

			this.y = y;

			/**
			 * The Z component.
			 *
			 * @type {Number}
			 */

			this.z = z;

		}

		/**
		 * Sets the values of this vector
		 *
		 * @param {Number} x - The X component.
		 * @param {Number} y - The Y component.
		 * @param {Number} z - The Z component.
		 * @return {Vector3} This vector.
		 */

		set(x, y, z) {

			this.x = x;
			this.y = y;
			this.z = z;

			return this;

		}

		/**
		 * Copies the values of another vector.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Vector3} This vector.
		 */

		copy(v) {

			this.x = v.x;
			this.y = v.y;
			this.z = v.z;

			return this;

		}

		/**
		 * Clones this vector.
		 *
		 * @return {Vector3} A clone of this vector.
		 */

		clone() {

			return new this.constructor(this.x, this.y, this.z);

		}

		/**
		 * Copies values from an array.
		 *
		 * @param {Number[]} array - An array.
		 * @param {Number} offset - An offset.
		 * @return {Vector3} This vector.
		 */

		fromArray(array, offset = 0) {

			this.x = array[offset];
			this.y = array[offset + 1];
			this.z = array[offset + 2];

			return this;

		}

		/**
		 * Stores this vector in an array.
		 *
		 * @param {Array} [array] - A target array.
		 * @param {Number} offset - An offset.
		 * @return {Number[]} The array.
		 */

		toArray(array = [], offset = 0) {

			array[offset] = this.x;
			array[offset + 1] = this.y;
			array[offset + 2] = this.z;

			return array;

		}

		/**
		 * Sets the values of this vector based on a spherical description.
		 *
		 * @param {Spherical} s - A spherical description.
		 * @return {Vector3} This vector.
		 */

		setFromSpherical(s) {

			const sinPhiRadius = Math.sin(s.phi) * s.radius;

			this.x = sinPhiRadius * Math.sin(s.theta);
			this.y = Math.cos(s.phi) * s.radius;
			this.z = sinPhiRadius * Math.cos(s.theta);

			return this;

		}

		/**
		 * Sets the values of this vector based on a cylindrical description.
		 *
		 * @param {Cylindrical} c - A cylindrical description.
		 * @return {Vector3} This vector.
		 */

		setFromCylindrical(c) {

			this.x = c.radius * Math.sin(c.theta);
			this.y = c.y;
			this.z = c.radius * Math.cos(c.theta);

			return this;

		}

		/**
		 * Copies the values of a matrix column.
		 *
		 * @param {Matrix4} m - A 4x4 matrix.
		 * @param {Number} index - A column index of the range [0, 2].
		 * @return {Vector3} This vector.
		 */

		setFromMatrixColumn(m, index) {

			return this.fromArray(m.elements, index * 4);

		}

		/**
		 * Extracts the position from a matrix.
		 *
		 * @param {Matrix4} m - A 4x4 matrix.
		 * @return {Vector3} This vector.
		 */

		setFromMatrixPosition(m) {

			const me = m.elements;

			this.x = me[12];
			this.y = me[13];
			this.z = me[14];

			return this;

		}

		/**
		 * Extracts the scale from a matrix.
		 *
		 * @param {Matrix4} m - A 4x4 matrix.
		 * @return {Vector3} This vector.
		 */

		setFromMatrixScale(m) {

			const sx = this.setFromMatrixColumn(m, 0).length();
			const sy = this.setFromMatrixColumn(m, 1).length();
			const sz = this.setFromMatrixColumn(m, 2).length();

			this.x = sx;
			this.y = sy;
			this.z = sz;

			return this;

		}

		/**
		 * Adds a vector to this one.
		 *
		 * @param {Vector3} v - The vector to add.
		 * @return {Vector3} This vector.
		 */

		add(v) {

			this.x += v.x;
			this.y += v.y;
			this.z += v.z;

			return this;

		}

		/**
		 * Adds a scalar to this vector.
		 *
		 * @param {Number} s - The scalar to add.
		 * @return {Vector3} This vector.
		 */

		addScalar(s) {

			this.x += s;
			this.y += s;
			this.z += s;

			return this;

		}

		/**
		 * Sets this vector to the sum of two given vectors.
		 *
		 * @param {Vector3} a - A vector.
		 * @param {Vector3} b - Another vector.
		 * @return {Vector3} This vector.
		 */

		addVectors(a, b) {

			this.x = a.x + b.x;
			this.y = a.y + b.y;
			this.z = a.z + b.z;

			return this;

		}

		/**
		 * Adds a scaled vector to this one.
		 *
		 * @param {Vector3} v - The vector to scale and add.
		 * @param {Number} s - A scalar.
		 * @return {Vector3} This vector.
		 */

		addScaledVector(v, s) {

			this.x += v.x * s;
			this.y += v.y * s;
			this.z += v.z * s;

			return this;

		}

		/**
		 * Subtracts a vector from this vector.
		 *
		 * @param {Vector3} v - The vector to subtract.
		 * @return {Vector3} This vector.
		 */

		sub(v) {

			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;

			return this;

		}

		/**
		 * Subtracts a scalar from this vector.
		 *
		 * @param {Number} s - The scalar to subtract.
		 * @return {Vector3} This vector.
		 */

		subScalar(s) {

			this.x -= s;
			this.y -= s;
			this.z -= s;

			return this;

		}

		/**
		 * Sets this vector to the difference between two given vectors.
		 *
		 * @param {Vector3} a - A vector.
		 * @param {Vector3} b - A second vector.
		 * @return {Vector3} This vector.
		 */

		subVectors(a, b) {

			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;

			return this;

		}

		/**
		 * Multiplies this vector with another vector.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Vector3} This vector.
		 */

		multiply(v) {

			this.x *= v.x;
			this.y *= v.y;
			this.z *= v.z;

			return this;

		}

		/**
		 * Multiplies this vector with a given scalar.
		 *
		 * @param {Number} s - A scalar.
		 * @return {Vector3} This vector.
		 */

		multiplyScalar(s) {

			this.x *= s;
			this.y *= s;
			this.z *= s;

			return this;

		}

		/**
		 * Sets this vector to the product of two given vectors.
		 *
		 * @param {Vector3} a - A vector.
		 * @param {Vector3} b - Another vector.
		 * @return {Vector3} This vector.
		 */

		multiplyVectors(a, b) {

			this.x = a.x * b.x;
			this.y = a.y * b.y;
			this.z = a.z * b.z;

			return this;

		}

		/**
		 * Divides this vector by another vector.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Vector3} This vector.
		 */

		divide(v) {

			this.x /= v.x;
			this.y /= v.y;
			this.z /= v.z;

			return this;

		}

		/**
		 * Divides this vector by a given scalar.
		 *
		 * @param {Number} s - A scalar.
		 * @return {Vector3} This vector.
		 */

		divideScalar(s) {

			this.x /= s;
			this.y /= s;
			this.z /= s;

			return this;

		}

		/**
		 * Sets this vector to the cross product of the given vectors.
		 *
		 * @param {Vector3} a - A vector.
		 * @param {Vector3} b - Another vector.
		 * @return {Vector3} This vector.
		 */

		crossVectors(a, b) {

			const ax = a.x, ay = a.y, az = a.z;
			const bx = b.x, by = b.y, bz = b.z;

			this.x = ay * bz - az * by;
			this.y = az * bx - ax * bz;
			this.z = ax * by - ay * bx;

			return this;

		}

		/**
		 * Calculates the cross product of this vector and the given one.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Vector3} This vector.
		 */

		cross(v) {

			return this.crossVectors(this, v);

		}

		/**
		 * Applies a matrix to this direction vector.
		 *
		 * @param {Matrix4} m - A matrix.
		 * @return {Vector3} This vector.
		 */

		transformDirection(m) {

			const x = this.x, y = this.y, z = this.z;
			const e = m.elements;

			this.x = e[0] * x + e[4] * y + e[8] * z;
			this.y = e[1] * x + e[5] * y + e[9] * z;
			this.z = e[2] * x + e[6] * y + e[10] * z;

			return this.normalize();

		}

		/**
		 * Applies a matrix to this vector.
		 *
		 * @param {Matrix3} m - A matrix.
		 * @return {Vector3} This vector.
		 */

		applyMatrix3(m) {

			const x = this.x, y = this.y, z = this.z;
			const e = m.elements;

			this.x = e[0] * x + e[3] * y + e[6] * z;
			this.y = e[1] * x + e[4] * y + e[7] * z;
			this.z = e[2] * x + e[5] * y + e[8] * z;

			return this;

		}

		/**
		 * Applies a matrix to this vector.
		 *
		 * @param {Matrix4} m - A matrix.
		 * @return {Vector3} This vector.
		 */

		applyMatrix4(m) {

			const x = this.x, y = this.y, z = this.z;
			const e = m.elements;

			this.x = e[0] * x + e[4] * y + e[8] * z + e[12];
			this.y = e[1] * x + e[5] * y + e[9] * z + e[13];
			this.z = e[2] * x + e[6] * y + e[10] * z + e[14];

			return this;

		}

		/**
		 * Applies a quaternion to this vector.
		 *
		 * @param {Quaternion} q - A quaternion.
		 * @return {Vector3} This vector.
		 */

		applyQuaternion(q) {

			const x = this.x, y = this.y, z = this.z;
			const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

			// Calculate: quaternion * vector.
			const ix = qw * x + qy * z - qz * y;
			const iy = qw * y + qz * x - qx * z;
			const iz = qw * z + qx * y - qy * x;
			const iw = -qx * x - qy * y - qz * z;

			// Calculate: result * inverse quaternion.
			this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
			this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
			this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

			return this;

		}

		/**
		 * Negates this vector.
		 *
		 * @return {Vector3} This vector.
		 */

		negate() {

			this.x = -this.x;
			this.y = -this.y;
			this.z = -this.z;

			return this;

		}

		/**
		 * Calculates the dot product with another vector.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Number} The dot product.
		 */

		dot(v) {

			return this.x * v.x + this.y * v.y + this.z * v.z;

		}

		/**
		 * Reflects this vector. The given plane normal is assumed to be normalized.
		 *
		 * @param {Vector3} n - A normal.
		 * @return {Vector3} This vector.
		 */

		reflect(n) {

			const nx = n.x;
			const ny = n.y;
			const nz = n.z;

			this.sub(n.multiplyScalar(2 * this.dot(n)));

			// Restore the normal.
			n.set(nx, ny, nz);

			return this;

		}

		/**
		 * Computes the angle to the given vector.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Number} The angle in radians.
		 */

		angleTo(v) {

			const theta = this.dot(v) / (Math.sqrt(this.lengthSquared() * v.lengthSquared()));

			// Clamp to avoid numerical problems.
			return Math.acos(Math.min(Math.max(theta, -1), 1));

		}

		/**
		 * Calculates the Manhattan length of this vector.
		 *
		 * @return {Number} The length.
		 */

		manhattanLength() {

			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);

		}

		/**
		 * Calculates the squared length of this vector.
		 *
		 * @return {Number} The squared length.
		 */

		lengthSquared() {

			return this.x * this.x + this.y * this.y + this.z * this.z;

		}

		/**
		 * Calculates the length of this vector.
		 *
		 * @return {Number} The length.
		 */

		length() {

			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

		}

		/**
		 * Calculates the Manhattan distance to a given vector.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Number} The distance.
		 */

		manhattanDistanceTo(v) {

			return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);

		}

		/**
		 * Calculates the squared distance to a given vector.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Number} The squared distance.
		 */

		distanceToSquared(v) {

			const dx = this.x - v.x;
			const dy = this.y - v.y;
			const dz = this.z - v.z;

			return dx * dx + dy * dy + dz * dz;

		}

		/**
		 * Calculates the distance to a given vector.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Number} The distance.
		 */

		distanceTo(v) {

			return Math.sqrt(this.distanceToSquared(v));

		}

		/**
		 * Normalizes this vector.
		 *
		 * @return {Vector3} This vector.
		 */

		normalize() {

			return this.divideScalar(this.length());

		}

		/**
		 * Sets the length of this vector.
		 *
		 * @param {Number} length - The new length.
		 * @return {Vector3} This vector.
		 */

		setLength(length) {

			return this.normalize().multiplyScalar(length);

		}

		/**
		 * Adopts the min value for each component of this vector and the given one.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Vector3} This vector.
		 */

		min(v) {

			this.x = Math.min(this.x, v.x);
			this.y = Math.min(this.y, v.y);
			this.z = Math.min(this.z, v.z);

			return this;

		}

		/**
		 * Adopts the max value for each component of this vector and the given one.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Vector3} This vector.
		 */

		max(v) {

			this.x = Math.max(this.x, v.x);
			this.y = Math.max(this.y, v.y);
			this.z = Math.max(this.z, v.z);

			return this;

		}

		/**
		 * Clamps this vector.
		 *
		 * @param {Vector3} min - The lower bounds. Assumed to be smaller than max.
		 * @param {Vector3} max - The upper bounds. Assumed to be greater than min.
		 * @return {Vector3} This vector.
		 */

		clamp(min, max) {

			this.x = Math.max(min.x, Math.min(max.x, this.x));
			this.y = Math.max(min.y, Math.min(max.y, this.y));
			this.z = Math.max(min.z, Math.min(max.z, this.z));

			return this;

		}

		/**
		 * Floors this vector.
		 *
		 * @return {Vector3} This vector.
		 */

		floor() {

			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			this.z = Math.floor(this.z);

			return this;

		}

		/**
		 * Ceils this vector.
		 *
		 * @return {Vector3} This vector.
		 */

		ceil() {

			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			this.z = Math.ceil(this.z);

			return this;

		}

		/**
		 * Rounds this vector.
		 *
		 * @return {Vector3} This vector.
		 */

		round() {

			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			this.z = Math.round(this.z);

			return this;

		}

		/**
		 * Lerps towards the given vector.
		 *
		 * @param {Vector3} v - The target vector.
		 * @param {Number} alpha - The lerp factor.
		 * @return {Vector3} This vector.
		 */

		lerp(v, alpha) {

			this.x += (v.x - this.x) * alpha;
			this.y += (v.y - this.y) * alpha;
			this.z += (v.z - this.z) * alpha;

			return this;

		}

		/**
		 * Sets this vector to the lerp result of the given vectors.
		 *
		 * @param {Vector3} v1 - A base vector.
		 * @param {Vector3} v2 - The target vector.
		 * @param {Number} alpha - The lerp factor.
		 * @return {Vector3} This vector.
		 */

		lerpVectors(v1, v2, alpha) {

			return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);

		}

		/**
		 * Checks if this vector equals the given one.
		 *
		 * @param {Vector3} v - A vector.
		 * @return {Boolean} Whether this vector equals the given one.
		 */

		equals(v) {

			return (v.x === this.x && v.y === this.y && v.z === this.z);

		}

	}

	/**
	 * A vector with two components.
	 */

	class Vector2 {

		/**
		 * Constructs a new vector.
		 *
		 * @param {Number} [x=0] - The X component.
		 * @param {Number} [y=0] - The Y component.
		 */

		constructor(x = 0, y = 0) {

			/**
			 * The X component.
			 *
			 * @type {Number}
			 */

			this.x = x;

			/**
			 * The Y component.
			 *
			 * @type {Number}
			 */

			this.y = y;

		}

		/**
		 * The width. This is an alias for X.
		 *
		 * @type {Number}
		 */

		get width() {

			return this.x;

		}

		/**
		 * Sets the width.
		 *
		 * @type {Number}
		 */

		set width(value) {

			return this.x = value;

		}

		/**
		 * The height. This is an alias for Y.
		 *
		 * @type {Number}
		 */

		get height() {

			return this.y;

		}

		/**
		 * Sets the height.
		 *
		 * @type {Number}
		 */

		set height(value) {

			return this.y = value;

		}

		/**
		 * Sets the values of this vector
		 *
		 * @param {Number} x - The X component.
		 * @param {Number} y - The Y component.
		 * @return {Vector2} This vector.
		 */

		set(x, y) {

			this.x = x;
			this.y = y;

			return this;

		}

		/**
		 * Copies the values of another vector.
		 *
		 * @param {Vector2} v - A vector.
		 * @return {Vector2} This vector.
		 */

		copy(v) {

			this.x = v.x;
			this.y = v.y;

			return this;

		}

		/**
		 * Clones this vector.
		 *
		 * @return {Vector2} A clone of this vector.
		 */

		clone() {

			return new this.constructor(this.x, this.y);

		}

		/**
		 * Copies values from an array.
		 *
		 * @param {Number[]} array - An array.
		 * @param {Number} offset - An offset.
		 * @return {Vector2} This vector.
		 */

		fromArray(array, offset = 0) {

			this.x = array[offset];
			this.y = array[offset + 1];

			return this;

		}

		/**
		 * Stores this vector in an array.
		 *
		 * @param {Array} [array] - A target array.
		 * @param {Number} offset - An offset.
		 * @return {Number[]} The array.
		 */

		toArray(array = [], offset = 0) {

			array[offset] = this.x;
			array[offset + 1] = this.y;

			return array;

		}

		/**
		 * Adds a vector to this one.
		 *
		 * @param {Vector2} v - The vector to add.
		 * @return {Vector2} This vector.
		 */

		add(v) {

			this.x += v.x;
			this.y += v.y;

			return this;

		}

		/**
		 * Adds a scalar to this vector.
		 *
		 * @param {Number} s - The scalar to add.
		 * @return {Vector2} This vector.
		 */

		addScalar(s) {

			this.x += s;
			this.y += s;

			return this;

		}

		/**
		 * Sets this vector to the sum of two given vectors.
		 *
		 * @param {Vector2} a - A vector.
		 * @param {Vector2} b - Another vector.
		 * @return {Vector2} This vector.
		 */

		addVectors(a, b) {

			this.x = a.x + b.x;
			this.y = a.y + b.y;

			return this;

		}

		/**
		 * Adds a scaled vector to this one.
		 *
		 * @param {Vector2} v - The vector to scale and add.
		 * @param {Number} s - A scalar.
		 * @return {Vector2} This vector.
		 */

		addScaledVector(v, s) {

			this.x += v.x * s;
			this.y += v.y * s;

			return this;

		}

		/**
		 * Subtracts a vector from this vector.
		 *
		 * @param {Vector2} v - The vector to subtract.
		 * @return {Vector2} This vector.
		 */

		sub(v) {

			this.x -= v.x;
			this.y -= v.y;

			return this;

		}

		/**
		 * Subtracts a scalar from this vector.
		 *
		 * @param {Number} s - The scalar to subtract.
		 * @return {Vector2} This vector.
		 */

		subScalar(s) {

			this.x -= s;
			this.y -= s;

			return this;

		}

		/**
		 * Sets this vector to the difference between two given vectors.
		 *
		 * @param {Vector2} a - A vector.
		 * @param {Vector2} b - A second vector.
		 * @return {Vector2} This vector.
		 */

		subVectors(a, b) {

			this.x = a.x - b.x;
			this.y = a.y - b.y;

			return this;

		}

		/**
		 * Multiplies this vector with another vector.
		 *
		 * @param {Vector2} v - A vector.
		 * @return {Vector2} This vector.
		 */

		multiply(v) {

			this.x *= v.x;
			this.y *= v.y;

			return this;

		}

		/**
		 * Multiplies this vector with a given scalar.
		 *
		 * @param {Number} s - A scalar.
		 * @return {Vector2} This vector.
		 */

		multiplyScalar(s) {

			this.x *= s;
			this.y *= s;

			return this;

		}

		/**
		 * Divides this vector by another vector.
		 *
		 * @param {Vector2} v - A vector.
		 * @return {Vector2} This vector.
		 */

		divide(v) {

			this.x /= v.x;
			this.y /= v.y;

			return this;

		}

		/**
		 * Divides this vector by a given scalar.
		 *
		 * @param {Number} s - A scalar.
		 * @return {Vector2} This vector.
		 */

		divideScalar(s) {

			this.x /= s;
			this.y /= s;

			return this;

		}

		/**
		 * Applies the given matrix to this vector.
		 *
		 * @param {Matrix3} m - A matrix.
		 * @return {Vector2} This vector.
		 */

		applyMatrix3(m) {

			const x = this.x, y = this.y;
			const e = m.elements;

			this.x = e[0] * x + e[3] * y + e[6];
			this.y = e[1] * x + e[4] * y + e[7];

			return this;

		}

		/**
		 * Calculates the dot product with another vector.
		 *
		 * @param {Vector2} v - A vector.
		 * @return {Number} The dot product.
		 */

		dot(v) {

			return this.x * v.x + this.y * v.y;

		}

		/**
		 * Calculates the Manhattan length of this vector.
		 *
		 * @return {Number} The length.
		 */

		manhattanLength() {

			return Math.abs(this.x) + Math.abs(this.y);

		}

		/**
		 * Calculates the squared length of this vector.
		 *
		 * @return {Number} The squared length.
		 */

		lengthSquared() {

			return this.x * this.x + this.y * this.y;

		}

		/**
		 * Calculates the length of this vector.
		 *
		 * @return {Number} The length.
		 */

		length() {

			return Math.sqrt(this.x * this.x + this.y * this.y);

		}

		/**
		 * Calculates the Manhattan distance to a given vector.
		 *
		 * @param {Vector2} v - A vector.
		 * @return {Number} The squared distance.
		 */

		manhattanDistanceTo(v) {

			return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);

		}

		/**
		 * Calculates the squared distance to a given vector.
		 *
		 * @param {Vector2} v - A vector.
		 * @return {Number} The squared distance.
		 */

		distanceToSquared(v) {

			const dx = this.x - v.x;
			const dy = this.y - v.y;

			return dx * dx + dy * dy;

		}

		/**
		 * Calculates the distance to a given vector.
		 *
		 * @param {Vector2} v - A vector.
		 * @return {Number} The distance.
		 */

		distanceTo(v) {

			return Math.sqrt(this.distanceToSquared(v));

		}

		/**
		 * Normalizes this vector.
		 *
		 * @return {Vector2} This vector.
		 */

		normalize() {

			return this.divideScalar(this.length());

		}

		/**
		 * Sets the length of this vector.
		 *
		 * @param {Number} length - The new length.
		 * @return {Vector2} This vector.
		 */

		setLength(length) {

			return this.normalize().multiplyScalar(length);

		}

		/**
		 * Adopts the min value for each component of this vector and the given one.
		 *
		 * @param {Vector2} v - A vector.
		 * @return {Vector2} This vector.
		 */

		min(v) {

			this.x = Math.min(this.x, v.x);
			this.y = Math.min(this.y, v.y);

			return this;

		}

		/**
		 * adopts the max value for each component of this vector and the given one.
		 *
		 * @param {Vector2} v - A vector.
		 * @return {Vector2} This vector.
		 */

		max(v) {

			this.x = Math.max(this.x, v.x);
			this.y = Math.max(this.y, v.y);

			return this;

		}

		/**
		 * Clamps this vector.
		 *
		 * @param {Vector2} min - A vector, assumed to be smaller than max.
		 * @param {Vector2} max - A vector, assumed to be greater than min.
		 * @return {Vector2} This vector.
		 */

		clamp(min, max) {

			this.x = Math.max(min.x, Math.min(max.x, this.x));
			this.y = Math.max(min.y, Math.min(max.y, this.y));

			return this;

		}

		/**
		 * Floors this vector.
		 *
		 * @return {Vector2} This vector.
		 */

		floor() {

			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);

			return this;

		}

		/**
		 * Ceils this vector.
		 *
		 * @return {Vector2} This vector.
		 */

		ceil() {

			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);

			return this;

		}

		/**
		 * Rounds this vector.
		 *
		 * @return {Vector2} This vector.
		 */

		round() {

			this.x = Math.round(this.x);
			this.y = Math.round(this.y);

			return this;

		}

		/**
		 * Negates this vector.
		 *
		 * @return {Vector2} This vector.
		 */

		negate() {

			this.x = -this.x;
			this.y = -this.y;

			return this;

		}

		/**
		 * Computes the angle in radians with respect to the positive X-axis.
		 *
		 * @return {Number} The angle.
		 */

		angle() {

			let angle = Math.atan2(this.y, this.x);

			if(angle < 0) {

				angle += 2 * Math.PI;

			}

			return angle;

		}

		/**
		 * Lerps towards the given vector.
		 *
		 * @param {Vector2} v - The target vector.
		 * @param {Number} alpha - The lerp factor.
		 * @return {Vector2} This vector.
		 */

		lerp(v, alpha) {

			this.x += (v.x - this.x) * alpha;
			this.y += (v.y - this.y) * alpha;

			return this;

		}

		/**
		 * Sets this vector to the lerp result of the given vectors.
		 *
		 * @param {Vector2} v1 - A base vector.
		 * @param {Vector2} v2 - The target vector.
		 * @param {Number} alpha - The lerp factor.
		 * @return {Vector2} This vector.
		 */

		lerpVectors(v1, v2, alpha) {

			return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);

		}

		/**
		 * Rotates this vector around a given center.
		 *
		 * @param {Vector2} center - The center.
		 * @param {Number} angle - The rotation in radians.
		 * @return {Vector2} This vector.
		 */

		rotateAround(center, angle) {

			const c = Math.cos(angle), s = Math.sin(angle);

			const x = this.x - center.x;
			const y = this.y - center.y;

			this.x = x * c - y * s + center.x;
			this.y = x * s + y * c + center.y;

			return this;

		}

		/**
		 * Checks if this vector equals the given one.
		 *
		 * @param {Vector2} v - A vector.
		 * @return {Boolean} Whether this vector equals the given one.
		 */

		equals(v) {

			return (v.x === this.x && v.y === this.y);

		}

	}

	/**
	 * A cylindrical coordinate system.
	 *
	 * For details see: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
	 */

	/**
	 * A 3x3 matrix.
	 */

	/**
	 * An enumeration of Euler rotation orders.
	 *
	 * @type {Object}
	 * @property {String} XYZ - X -> Y -> Z.
	 * @property {String} YZX - Y -> Z -> X.
	 * @property {String} ZXY - Z -> X -> Y.
	 * @property {String} XZY - X -> Z -> Y.
	 * @property {String} YXZ - Y -> X -> Z.
	 * @property {String} ZYX - Z -> Y -> X.
	 */

	const RotationOrder = {

		XYZ: "XYZ",
		YZX: "YZX",
		ZXY: "ZXY",
		XZY: "XZY",
		YXZ: "YXZ",
		ZYX: "ZYX"

	};

	/**
	 * A vector.
	 *
	 * @type {Vector3}
	 * @private
	 */

	const a$2 = new Vector3();

	/**
	 * A vector.
	 *
	 * @type {Vector3}
	 * @private
	 */

	const b$2 = new Vector3();

	/**
	 * A vector.
	 *
	 * @type {Vector3}
	 * @private
	 */

	const c = new Vector3();

	/**
	 * A 4x4 matrix.
	 */

	class Matrix4 {

		/**
		 * Constructs a new matrix.
		 */

		constructor() {

			/**
			 * The matrix elements.
			 *
			 * @type {Float32Array}
			 */

			this.elements = new Float32Array([

				1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1

			]);

		}

		/**
		 * Sets the values of this matrix.
		 *
		 * @param {Number} n00 - The value of the first row, first column.
		 * @param {Number} n01 - The value of the first row, second column.
		 * @param {Number} n02 - The value of the first row, third column.
		 * @param {Number} n03 - The value of the first row, fourth column.
		 * @param {Number} n10 - The value of the second row, first column.
		 * @param {Number} n11 - The value of the second row, second column.
		 * @param {Number} n12 - The value of the second row, third column.
		 * @param {Number} n13 - The value of the second row, fourth column.
		 * @param {Number} n20 - The value of the third row, first column.
		 * @param {Number} n21 - The value of the third row, second column.
		 * @param {Number} n22 - The value of the third row, third column.
		 * @param {Number} n23 - The value of the third row, fourth column.
		 * @param {Number} n30 - The value of the fourth row, first column.
		 * @param {Number} n31 - The value of the fourth row, second column.
		 * @param {Number} n32 - The value of the fourth row, third column.
		 * @param {Number} n33 - The value of the fourth row, fourth column.
		 * @return {Matrix4} This matrix.
		 */

		set(n00, n01, n02, n03, n10, n11, n12, n13, n20, n21, n22, n23, n30, n31, n32, n33) {

			const te = this.elements;

			te[0] = n00; te[4] = n01; te[8] = n02; te[12] = n03;
			te[1] = n10; te[5] = n11; te[9] = n12; te[13] = n13;
			te[2] = n20; te[6] = n21; te[10] = n22; te[14] = n23;
			te[3] = n30; te[7] = n31; te[11] = n32; te[15] = n33;

			return this;

		}

		/**
		 * Sets this matrix to the identity matrix.
		 *
		 * @return {Matrix4} This matrix.
		 */

		identity() {

			this.set(

				1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1

			);

			return this;

		}

		/**
		 * Copies the values of a given matrix.
		 *
		 * @param {Matrix4} matrix - A matrix.
		 * @return {Matrix4} This matrix.
		 */

		copy(matrix) {

			const me = matrix.elements;
			const te = this.elements;

			te[0] = me[0]; te[1] = me[1]; te[2] = me[2]; te[3] = me[3];
			te[4] = me[4]; te[5] = me[5]; te[6] = me[6]; te[7] = me[7];
			te[8] = me[8]; te[9] = me[9]; te[10] = me[10]; te[11] = me[11];
			te[12] = me[12]; te[13] = me[13]; te[14] = me[14]; te[15] = me[15];

			return this;

		}

		/**
		 * Clones this matrix.
		 *
		 * @return {Matrix4} A clone of this matrix.
		 */

		clone() {

			return new this.constructor().fromArray(this.elements);

		}

		/**
		 * Copies the values of a given array.
		 *
		 * @param {Number[]} array - An array.
		 * @param {Number} [offset=0] - An offset into the array.
		 * @return {Matrix4} This matrix.
		 */

		fromArray(array, offset = 0) {

			const te = this.elements;

			let i;

			for(i = 0; i < 16; ++i) {

				te[i] = array[i + offset];

			}

			return this;

		}

		/**
		 * Stores this matrix in an array.
		 *
		 * @param {Number[]} [array] - A target array.
		 * @param {Number} [offset=0] - An offset into the array.
		 * @return {Number[]} The array.
		 */

		toArray(array = [], offset = 0) {

			const te = this.elements;

			let i;

			for(i = 0; i < 16; ++i) {

				array[i + offset] = te[i];

			}

			return array;

		}

		/**
		 * Returns the largest scale.
		 *
		 * @return {Number} The largest scale of the three axes.
		 */

		getMaxScaleOnAxis() {

			const te = this.elements;

			const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
			const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
			const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];

			return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));

		}

		/**
		 * Copies the position values of a given matrix.
		 *
		 * @param {Matrix4} matrix - A matrix.
		 * @return {Matrix4} This matrix.
		 */

		copyPosition(matrix) {

			const te = this.elements;
			const me = matrix.elements;

			te[12] = me[12];
			te[13] = me[13];
			te[14] = me[14];

			return this;

		}

		/**
		 * Sets the position values of this matrix.
		 *
		 * @param {Vector3} p - A position.
		 * @return {Matrix4} This matrix.
		 */

		setPosition(p) {

			const te = this.elements;

			te[12] = p.x;
			te[13] = p.y;
			te[14] = p.z;

			return this;

		}

		/**
		 * Extracts the basis from this matrix.
		 *
		 * @param {Vector3} xAxis - A vector to store the X-axis column in.
		 * @param {Vector3} yAxis - A vector to store the Y-axis column in.
		 * @param {Vector3} zAxis - A vector to store the Z-axis column in.
		 * @return {Matrix4} This matrix.
		 */

		extractBasis(xAxis, yAxis, zAxis) {

			xAxis.setFromMatrixColumn(this, 0);
			yAxis.setFromMatrixColumn(this, 1);
			zAxis.setFromMatrixColumn(this, 2);

			return this;

		}

		/**
		 * Sets the basis of this matrix.
		 *
		 * @param {Vector3} xAxis - The X-axis.
		 * @param {Vector3} yAxis - The Y-axis.
		 * @param {Vector3} zAxis - The Z-axis.
		 * @return {Matrix4} This matrix.
		 */

		makeBasis(xAxis, yAxis, zAxis) {

			this.set(

				xAxis.x, yAxis.x, zAxis.x, 0,
				xAxis.y, yAxis.y, zAxis.y, 0,
				xAxis.z, yAxis.z, zAxis.z, 0,
				0, 0, 0, 1

			);

			return this;

		}

		/**
		 * Extracts the rotation from a given matrix.
		 *
		 * This method does not support reflection matrices.
		 *
		 * @param {Matrix4} m - A matrix.
		 * @return {Matrix4} This matrix.
		 */

		extractRotation(m) {

			const te = this.elements;
			const me = m.elements;

			const scaleX = 1.0 / a$2.setFromMatrixColumn(m, 0).length();
			const scaleY = 1.0 / a$2.setFromMatrixColumn(m, 1).length();
			const scaleZ = 1.0 / a$2.setFromMatrixColumn(m, 2).length();

			te[0] = me[0] * scaleX;
			te[1] = me[1] * scaleX;
			te[2] = me[2] * scaleX;
			te[3] = 0;

			te[4] = me[4] * scaleY;
			te[5] = me[5] * scaleY;
			te[6] = me[6] * scaleY;
			te[7] = 0;

			te[8] = me[8] * scaleZ;
			te[9] = me[9] * scaleZ;
			te[10] = me[10] * scaleZ;
			te[11] = 0;

			te[12] = 0;
			te[13] = 0;
			te[14] = 0;
			te[15] = 1;

			return this;

		}

		/**
		 * Sets the matrix rotation based on the given Euler angles.
		 *
		 * @param {Euler} euler - The euler angles.
		 * @return {Matrix4} This matrix.
		 */

		makeRotationFromEuler(euler) {

			const te = this.elements;

			const x = euler.x;
			const y = euler.y;
			const z = euler.z;

			const a = Math.cos(x), b = Math.sin(x);
			const c = Math.cos(y), d = Math.sin(y);
			const e = Math.cos(z), f = Math.sin(z);

			let ae, af, be, bf;
			let ce, cf, de, df;
			let ac, ad, bc, bd;

			switch(euler.order) {

				case RotationOrder.XYZ: {

					ae = a * e, af = a * f, be = b * e, bf = b * f;

					te[0] = c * e;
					te[4] = -c * f;
					te[8] = d;

					te[1] = af + be * d;
					te[5] = ae - bf * d;
					te[9] = -b * c;

					te[2] = bf - ae * d;
					te[6] = be + af * d;
					te[10] = a * c;

					break;

				}

				case RotationOrder.YXZ: {

					ce = c * e, cf = c * f, de = d * e, df = d * f;

					te[0] = ce + df * b;
					te[4] = de * b - cf;
					te[8] = a * d;

					te[1] = a * f;
					te[5] = a * e;
					te[9] = -b;

					te[2] = cf * b - de;
					te[6] = df + ce * b;
					te[10] = a * c;

					break;

				}

				case RotationOrder.ZXY: {

					ce = c * e, cf = c * f, de = d * e, df = d * f;

					te[0] = ce - df * b;
					te[4] = -a * f;
					te[8] = de + cf * b;

					te[1] = cf + de * b;
					te[5] = a * e;
					te[9] = df - ce * b;

					te[2] = -a * d;
					te[6] = b;
					te[10] = a * c;

					break;

				}

				case RotationOrder.ZYX: {

					ae = a * e, af = a * f, be = b * e, bf = b * f;

					te[0] = c * e;
					te[4] = be * d - af;
					te[8] = ae * d + bf;

					te[1] = c * f;
					te[5] = bf * d + ae;
					te[9] = af * d - be;

					te[2] = -d;
					te[6] = b * c;
					te[10] = a * c;

					break;

				}

				case RotationOrder.YZX: {

					ac = a * c, ad = a * d, bc = b * c, bd = b * d;

					te[0] = c * e;
					te[4] = bd - ac * f;
					te[8] = bc * f + ad;

					te[1] = f;
					te[5] = a * e;
					te[9] = -b * e;

					te[2] = -d * e;
					te[6] = ad * f + bc;
					te[10] = ac - bd * f;

					break;

				}

				case RotationOrder.XZY: {

					ac = a * c, ad = a * d, bc = b * c, bd = b * d;

					te[0] = c * e;
					te[4] = -f;
					te[8] = d * e;

					te[1] = ac * f + bd;
					te[5] = a * e;
					te[9] = ad * f - bc;

					te[2] = bc * f - ad;
					te[6] = b * e;
					te[10] = bd * f + ac;

					break;

				}

			}

			// Bottom row.
			te[3] = 0;
			te[7] = 0;
			te[11] = 0;

			// Last column.
			te[12] = 0;
			te[13] = 0;
			te[14] = 0;
			te[15] = 1;

			return this;

		}

		/**
		 * Sets the matrix rotation based on the given quaternion.
		 *
		 * @param {Quaternion} q - The quaternion.
		 * @return {Matrix4} This matrix.
		 */

		makeRotationFromQuaternion(q) {

			return this.compose(a$2.set(0, 0, 0), q, b$2.set(1, 1, 1));

		}

		/**
		 * Creates a rotation that looks at the given target.
		 *
		 * @param {Vector3} eye - The position of the eye.
		 * @param {Vector3} target - The target to look at.
		 * @param {Vector3} up - The up vector.
		 * @return {Matrix4} This matrix.
		 */

		lookAt(eye, target, up) {

			const te = this.elements;
			const x = a$2, y = b$2, z = c;

			z.subVectors(eye, target);

			if(z.lengthSquared() === 0) {

				// Eye and target are at the same position.
				z.z = 1;

			}

			z.normalize();
			x.crossVectors(up, z);

			if(x.lengthSquared() === 0) {

				// Up and z are parallel.
				if(Math.abs(up.z) === 1) {

					z.x += 1e-4;

				} else {

					z.z += 1e-4;

				}

				z.normalize();
				x.crossVectors(up, z);

			}

			x.normalize();
			y.crossVectors(z, x);

			te[0] = x.x; te[4] = y.x; te[8] = z.x;
			te[1] = x.y; te[5] = y.y; te[9] = z.y;
			te[2] = x.z; te[6] = y.z; te[10] = z.z;

			return this;

		}

		/**
		 * Sets this matrix to the product of the given matrices.
		 *
		 * @param {Matrix4} a - A matrix.
		 * @param {Matrix4} b - A matrix.
		 * @return {Matrix4} This matrix.
		 */

		multiplyMatrices(a, b) {

			const te = this.elements;
			const ae = a.elements;
			const be = b.elements;

			const a00 = ae[0], a01 = ae[4], a02 = ae[8], a03 = ae[12];
			const a10 = ae[1], a11 = ae[5], a12 = ae[9], a13 = ae[13];
			const a20 = ae[2], a21 = ae[6], a22 = ae[10], a23 = ae[14];
			const a30 = ae[3], a31 = ae[7], a32 = ae[11], a33 = ae[15];

			const b00 = be[0], b01 = be[4], b02 = be[8], b03 = be[12];
			const b10 = be[1], b11 = be[5], b12 = be[9], b13 = be[13];
			const b20 = be[2], b21 = be[6], b22 = be[10], b23 = be[14];
			const b30 = be[3], b31 = be[7], b32 = be[11], b33 = be[15];

			te[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
			te[4] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
			te[8] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
			te[12] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;

			te[1] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
			te[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
			te[9] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
			te[13] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;

			te[2] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
			te[6] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
			te[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
			te[14] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;

			te[3] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
			te[7] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
			te[11] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
			te[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;

			return this;

		}

		/**
		 * Multiplies this matrix with the given one.
		 *
		 * @param {Matrix4} m - A matrix.
		 * @return {Matrix4} This matrix.
		 */

		multiply(m) {

			return this.multiplyMatrices(this, m);

		}

		/**
		 * Multiplies a given matrix with this one.
		 *
		 * @param {Matrix4} m - A matrix.
		 * @return {Matrix4} This matrix.
		 */

		premultiply(m) {

			return this.multiplyMatrices(m, this);

		}

		/**
		 * Multiplies this matrix with a given scalar.
		 *
		 * @param {Number} s - A scalar.
		 * @return {Matrix4} This matrix.
		 */

		multiplyScalar(s) {

			const te = this.elements;

			te[0] *= s; te[4] *= s; te[8] *= s; te[12] *= s;
			te[1] *= s; te[5] *= s; te[9] *= s; te[13] *= s;
			te[2] *= s; te[6] *= s; te[10] *= s; te[14] *= s;
			te[3] *= s; te[7] *= s; te[11] *= s; te[15] *= s;

			return this;

		}

		/**
		 * Calculates the determinant of this matrix.
		 *
		 * For more details see:
		 *  http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		 *
		 * @return {Number} The determinant.
		 */

		determinant() {

			const te = this.elements;

			const n00 = te[0], n01 = te[4], n02 = te[8], n03 = te[12];
			const n10 = te[1], n11 = te[5], n12 = te[9], n13 = te[13];
			const n20 = te[2], n21 = te[6], n22 = te[10], n23 = te[14];
			const n30 = te[3], n31 = te[7], n32 = te[11], n33 = te[15];

			const n00n11 = n00 * n11, n00n12 = n00 * n12, n00n13 = n00 * n13;
			const n01n10 = n01 * n10, n01n12 = n01 * n12, n01n13 = n01 * n13;
			const n02n10 = n02 * n10, n02n11 = n02 * n11, n02n13 = n02 * n13;
			const n03n10 = n03 * n10, n03n11 = n03 * n11, n03n12 = n03 * n12;

			return (

				n30 * (
					n03n12 * n21 -
					n02n13 * n21 -
					n03n11 * n22 +
					n01n13 * n22 +
					n02n11 * n23 -
					n01n12 * n23
				) +

				n31 * (
					n00n12 * n23 -
					n00n13 * n22 +
					n03n10 * n22 -
					n02n10 * n23 +
					n02n13 * n20 -
					n03n12 * n20
				) +

				n32 * (
					n00n13 * n21 -
					n00n11 * n23 -
					n03n10 * n21 +
					n01n10 * n23 +
					n03n11 * n20 -
					n01n13 * n20
				) +

				n33 * (
					-n02n11 * n20 -
					n00n12 * n21 +
					n00n11 * n22 +
					n02n10 * n21 -
					n01n10 * n22 +
					n01n12 * n20
				)

			);

		}

		/**
		 * Inverts the given matrix and stores the result in this matrix.
		 *
		 * For details see:
		 *  http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		 *
		 * @param {Matrix4} matrix - The matrix that should be inverted.
		 * @return {Matrix4} This matrix.
		 */

		getInverse(matrix) {

			const te = this.elements;
			const me = matrix.elements;

			const n00 = me[0], n10 = me[1], n20 = me[2], n30 = me[3];
			const n01 = me[4], n11 = me[5], n21 = me[6], n31 = me[7];
			const n02 = me[8], n12 = me[9], n22 = me[10], n32 = me[11];
			const n03 = me[12], n13 = me[13], n23 = me[14], n33 = me[15];

			const t00 = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;
			const t01 = n03 * n22 * n31 - n02 * n23 * n31 - n03 * n21 * n32 + n01 * n23 * n32 + n02 * n21 * n33 - n01 * n22 * n33;
			const t02 = n02 * n13 * n31 - n03 * n12 * n31 + n03 * n11 * n32 - n01 * n13 * n32 - n02 * n11 * n33 + n01 * n12 * n33;
			const t03 = n03 * n12 * n21 - n02 * n13 * n21 - n03 * n11 * n22 + n01 * n13 * n22 + n02 * n11 * n23 - n01 * n12 * n23;

			const det = n00 * t00 + n10 * t01 + n20 * t02 + n30 * t03;

			let invDet;

			if(det !== 0) {

				invDet = 1.0 / det;

				te[0] = t00 * invDet;
				te[1] = (n13 * n22 * n30 - n12 * n23 * n30 - n13 * n20 * n32 + n10 * n23 * n32 + n12 * n20 * n33 - n10 * n22 * n33) * invDet;
				te[2] = (n11 * n23 * n30 - n13 * n21 * n30 + n13 * n20 * n31 - n10 * n23 * n31 - n11 * n20 * n33 + n10 * n21 * n33) * invDet;
				te[3] = (n12 * n21 * n30 - n11 * n22 * n30 - n12 * n20 * n31 + n10 * n22 * n31 + n11 * n20 * n32 - n10 * n21 * n32) * invDet;

				te[4] = t01 * invDet;
				te[5] = (n02 * n23 * n30 - n03 * n22 * n30 + n03 * n20 * n32 - n00 * n23 * n32 - n02 * n20 * n33 + n00 * n22 * n33) * invDet;
				te[6] = (n03 * n21 * n30 - n01 * n23 * n30 - n03 * n20 * n31 + n00 * n23 * n31 + n01 * n20 * n33 - n00 * n21 * n33) * invDet;
				te[7] = (n01 * n22 * n30 - n02 * n21 * n30 + n02 * n20 * n31 - n00 * n22 * n31 - n01 * n20 * n32 + n00 * n21 * n32) * invDet;

				te[8] = t02 * invDet;
				te[9] = (n03 * n12 * n30 - n02 * n13 * n30 - n03 * n10 * n32 + n00 * n13 * n32 + n02 * n10 * n33 - n00 * n12 * n33) * invDet;
				te[10] = (n01 * n13 * n30 - n03 * n11 * n30 + n03 * n10 * n31 - n00 * n13 * n31 - n01 * n10 * n33 + n00 * n11 * n33) * invDet;
				te[11] = (n02 * n11 * n30 - n01 * n12 * n30 - n02 * n10 * n31 + n00 * n12 * n31 + n01 * n10 * n32 - n00 * n11 * n32) * invDet;

				te[12] = t03 * invDet;
				te[13] = (n02 * n13 * n20 - n03 * n12 * n20 + n03 * n10 * n22 - n00 * n13 * n22 - n02 * n10 * n23 + n00 * n12 * n23) * invDet;
				te[14] = (n03 * n11 * n20 - n01 * n13 * n20 - n03 * n10 * n21 + n00 * n13 * n21 + n01 * n10 * n23 - n00 * n11 * n23) * invDet;
				te[15] = (n01 * n12 * n20 - n02 * n11 * n20 + n02 * n10 * n21 - n00 * n12 * n21 - n01 * n10 * n22 + n00 * n11 * n22) * invDet;

			} else {

				console.error("Can't invert matrix, determinant is zero", matrix);

				this.identity();

			}

			return this;

		}

		/**
		 * Transposes this matrix.
		 *
		 * @return {Matrix4} This matrix.
		 */

		transpose() {

			const te = this.elements;

			let t;

			t = te[1]; te[1] = te[4]; te[4] = t;
			t = te[2]; te[2] = te[8]; te[8] = t;
			t = te[6]; te[6] = te[9]; te[9] = t;

			t = te[3]; te[3] = te[12]; te[12] = t;
			t = te[7]; te[7] = te[13]; te[13] = t;
			t = te[11]; te[11] = te[14]; te[14] = t;

			return this;

		}

		/**
		 * Scales this matrix.
		 *
		 * @param {Number} sx - The X scale.
		 * @param {Number} sy - The Y scale.
		 * @param {Number} sz - The Z scale.
		 * @return {Matrix4} This matrix.
		 */

		scale(sx, sy, sz) {

			const te = this.elements;

			te[0] *= sx; te[4] *= sy; te[8] *= sz;
			te[1] *= sx; te[5] *= sy; te[9] *= sz;
			te[2] *= sx; te[6] *= sy; te[10] *= sz;
			te[3] *= sx; te[7] *= sy; te[11] *= sz;

			return this;

		}

		/**
		 * Makes this matrix a scale matrix.
		 *
		 * @param {Number} x - The X scale.
		 * @param {Number} y - The Y scale.
		 * @param {Number} z - The Z scale.
		 * @return {Matrix4} This matrix.
		 */

		makeScale(x, y, z) {

			this.set(

				x, 0, 0, 0,
				0, y, 0, 0,
				0, 0, z, 0,
				0, 0, 0, 1

			);

			return this;

		}

		/**
		 * Makes this matrix a translation matrix.
		 *
		 * @param {Number} x - The X offset.
		 * @param {Number} y - The Y offset.
		 * @param {Number} z - The Z offset.
		 * @return {Matrix4} This matrix.
		 */

		makeTranslation(x, y, z) {

			this.set(

				1, 0, 0, x,
				0, 1, 0, y,
				0, 0, 1, z,
				0, 0, 0, 1

			);

			return this;

		}

		/**
		 * Makes this matrix a rotation matrix.
		 *
		 * @param {Number} theta - The angle in radians.
		 * @return {Matrix4} This matrix.
		 */

		makeRotationX(theta) {

			const c = Math.cos(theta), s = Math.sin(theta);

			this.set(

				1, 0, 0, 0,
				0, c, -s, 0,
				0, s, c, 0,
				0, 0, 0, 1

			);

			return this;

		}

		/**
		 * Makes this matrix a rotation matrix with respect to the Y-axis.
		 *
		 * @param {Number} theta - The angle in radians.
		 * @return {Matrix4} This matrix.
		 */

		makeRotationY(theta) {

			const c = Math.cos(theta), s = Math.sin(theta);

			this.set(

				c, 0, s, 0,
				0, 1, 0, 0,
				-s, 0, c, 0,
				0, 0, 0, 1

			);

			return this;

		}

		/**
		 * Makes this matrix a rotation matrix with respect to the Z-axis.
		 *
		 * @param {Number} theta - The angle in radians.
		 * @return {Matrix4} This matrix.
		 */

		makeRotationZ(theta) {

			const c = Math.cos(theta), s = Math.sin(theta);

			this.set(

				c, -s, 0, 0,
				s, c, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1

			);

			return this;

		}

		/**
		 * Makes this matrix a translation matrix with respect to a specific axis.
		 *
		 * For mor einformation see:
		 *  http://www.gamedev.net/reference/articles/article1199.asp
		 *
		 * @param {Vector3} axis - The axis. Assumed to be normalized.
		 * @param {Number} angle - The angle in radians.
		 * @return {Matrix4} This matrix.
		 */

		makeRotationAxis(axis, angle) {

			const c = Math.cos(angle);
			const s = Math.sin(angle);

			const t = 1.0 - c;

			const x = axis.x, y = axis.y, z = axis.z;
			const tx = t * x, ty = t * y;

			this.set(

				tx * x + c, tx * y - s * z, tx * z + s * y, 0,
				tx * y + s * z, ty * y + c, ty * z - s * x, 0,
				tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
				0, 0, 0, 1

			);

			return this;

		}

		/**
		 * Makes this matrix a shear matrix.
		 *
		 * @param {Number} x - The X shear value.
		 * @param {Number} y - The Y shear value.
		 * @param {Number} z - The Z shear value.
		 * @return {Matrix4} This matrix.
		 */

		makeShear(x, y, z) {

			this.set(

				1, y, z, 0,
				x, 1, z, 0,
				x, y, 1, 0,
				0, 0, 0, 1

			);

			return this;

		}

		/**
		 * Sets this matrix based on the given position, rotation and scale.
		 *
		 * @param {Vector3} position - The position.
		 * @param {Quaternion} quaternion - The rotation.
		 * @param {Vector3} scale - The scale.
		 * @return {Matrix4} This matrix.
		 */

		compose(position, quaternion, scale) {

			const te = this.elements;

			const x = quaternion.x, y = quaternion.y, z = quaternion.z, w = quaternion.w;
			const x2 = x + x,	y2 = y + y, z2 = z + z;
			const xx = x * x2, xy = x * y2, xz = x * z2;
			const yy = y * y2, yz = y * z2, zz = z * z2;
			const wx = w * x2, wy = w * y2, wz = w * z2;

			const sx = scale.x, sy = scale.y, sz = scale.z;

			te[0] = (1 - (yy + zz)) * sx;
			te[1] = (xy + wz) * sx;
			te[2] = (xz - wy) * sx;
			te[3] = 0;

			te[4] = (xy - wz) * sy;
			te[5] = (1 - (xx + zz)) * sy;
			te[6] = (yz + wx) * sy;
			te[7] = 0;

			te[8] = (xz + wy) * sz;
			te[9] = (yz - wx) * sz;
			te[10] = (1 - (xx + yy)) * sz;
			te[11] = 0;

			te[12] = position.x;
			te[13] = position.y;
			te[14] = position.z;
			te[15] = 1;

			return this;

		}

		/**
		 * Decomposes this matrix into a position, rotation and scale vector.
		 *
		 * @param {Vector3} position - The target position.
		 * @param {Quaternion} quaternion - The target rotation.
		 * @param {Vector3} scale - The target scale.
		 * @return {Matrix4} This matrix.
		 */

		decompose(position, quaternion, scale) {

			const te = this.elements;

			const n00 = te[0], n10 = te[1], n20 = te[2];
			const n01 = te[4], n11 = te[5], n21 = te[6];
			const n02 = te[8], n12 = te[9], n22 = te[10];

			const det = this.determinant();

			// If the determinant is negative, one scale must be inverted.
			const sx = a$2.set(n00, n10, n20).length() * ((det < 0) ? -1 : 1);
			const sy = a$2.set(n01, n11, n21).length();
			const sz = a$2.set(n02, n12, n22).length();

			const invSX = 1.0 / sx;
			const invSY = 1.0 / sy;
			const invSZ = 1.0 / sz;

			// Export the position.
			position.x = te[12];
			position.y = te[13];
			position.z = te[14];

			// Scale the rotation part.
			te[0] *= invSX; te[1] *= invSX; te[2] *= invSX;
			te[4] *= invSY; te[5] *= invSY; te[6] *= invSY;
			te[8] *= invSZ; te[9] *= invSZ; te[10] *= invSZ;

			// Export the rotation.
			quaternion.setFromRotationMatrix(this);

			// Restore the original values.
			te[0] = n00; te[1] = n10; te[2] = n20;
			te[4] = n01; te[5] = n11; te[6] = n21;
			te[8] = n02; te[9] = n12; te[10] = n22;

			// Export the scale.
			scale.x = sx;
			scale.y = sy;
			scale.z = sz;

			return this;

		}

		/**
		 * Creates a perspective matrix.
		 *
		 * @param {Number} left - The distance to the left plane.
		 * @param {Number} right - The distance to the right plane.
		 * @param {Number} top - The distance to the top plane.
		 * @param {Number} bottom - The distance to the bottom plane.
		 * @param {Number} near - The distance to the near plane.
		 * @param {Number} far - The distance to the far plane.
		 * @return {Matrix4} This matrix.
		 */

		makePerspective(left, right, top, bottom, near, far) {

			const te = this.elements;
			const x = 2 * near / (right - left);
			const y = 2 * near / (top - bottom);

			const a = (right + left) / (right - left);
			const b = (top + bottom) / (top - bottom);
			const c = -(far + near) / (far - near);
			const d = -2 * far * near / (far - near);

			te[0] = x; te[4] = 0; te[8] = a; te[12] = 0;
			te[1] = 0; te[5] = y; te[9] = b; te[13] = 0;
			te[2] = 0; te[6] = 0; te[10] = c; te[14] = d;
			te[3] = 0; te[7] = 0; te[11] = -1; te[15] = 0;

			return this;

		}

		/**
		 * Creates an orthographic matrix.
		 *
		 * @param {Number} left - The distance to the left plane.
		 * @param {Number} right - The distance to the right plane.
		 * @param {Number} top - The distance to the top plane.
		 * @param {Number} bottom - The distance to the bottom plane.
		 * @param {Number} near - The distance to the near plane.
		 * @param {Number} far - The distance to the far plane.
		 * @return {Matrix4} This matrix.
		 */

		makeOrthographic(left, right, top, bottom, near, far) {

			const te = this.elements;
			const w = 1.0 / (right - left);
			const h = 1.0 / (top - bottom);
			const p = 1.0 / (far - near);

			const x = (right + left) * w;
			const y = (top + bottom) * h;
			const z = (far + near) * p;

			te[0] = 2 * w; te[4] = 0; te[8] = 0; te[12] = -x;
			te[1] = 0; te[5] = 2 * h; te[9] = 0; te[13] = -y;
			te[2] = 0; te[6] = 0; te[10] = -2 * p; te[14] = -z;
			te[3] = 0; te[7] = 0; te[11] = 0; te[15] = 1;

			return this;

		}

		/**
		 * Checks if this matrix equals the given one.
		 *
		 * @param {Matrix4} m - A matrix.
		 * @return {Boolean} Whether the matrix are equal.
		 */

		equals(m) {

			const te = this.elements;
			const me = m.elements;

			let result = true;
			let i;

			for(i = 0; result && i < 16; ++i) {

				if(te[i] !== me[i]) {

					result = false;

				}

			}

			return result;

		}

	}

	/**
	 * A spherical coordinate system.
	 *
	 * For details see: https://en.wikipedia.org/wiki/Spherical_coordinate_system
	 *
	 * The poles (phi) are at the positive and negative Y-axis. The equator starts
	 * at positive Z.
	 */

	class Spherical {

		/**
		 * Constructs a new spherical system.
		 *
		 * @param {Number} [radius=1] - The radius of the sphere.
		 * @param {Number} [phi=0] - The polar angle phi.
		 * @param {Number} [theta=0] - The equator angle theta.
		 */

		constructor(radius = 1, phi = 0, theta = 0) {

			/**
			 * The radius of the sphere.
			 *
			 * @type {Number}
			 */

			this.radius = radius;

			/**
			 * The polar angle, up and down towards the top and bottom pole.
			 *
			 * @type {Number}
			 */

			this.phi = phi;

			/**
			 * The angle around the equator of the sphere.
			 *
			 * @type {Number}
			 */

			this.theta = theta;

		}

		/**
		 * Sets the values of this spherical system.
		 *
		 * @param {Number} radius - The radius.
		 * @param {Number} phi - Phi.
		 * @param {Number} theta - Theta.
		 * @return {Spherical} This spherical system.
		 */

		set(radius, phi, theta) {

			this.radius = radius;
			this.phi = phi;
			this.theta = theta;

			return this;

		}

		/**
		 * Copies the values of the given spherical system.
		 *
		 * @param {Spherical} s - A spherical system.
		 * @return {Spherical} This spherical system.
		 */

		copy(s) {

			this.radius = s.radius;
			this.phi = s.phi;
			this.theta = s.theta;

			return this;

		}

		/**
		 * Clones this spherical system.
		 *
		 * @return {Spherical} The cloned spherical system.
		 */

		clone() {

			return new this.constructor().copy(this);

		}

		/**
		 * Sets the values of this spherical system based on a vector.
		 *
		 * The radius is set to the vector's length while phi and theta are set from
		 * its direction.
		 *
		 * @param {Vector3} v - The vector.
		 * @return {Spherical} This spherical system.
		 */

		setFromVector3(v) {

			this.radius = v.length();

			if(this.radius === 0) {

				this.theta = 0;
				this.phi = 0;

			} else {

				// Calculate the equator angle around the positive Y-axis.
				this.theta = Math.atan2(v.x, v.z);

				// Calculate the polar angle.
				this.phi = Math.acos(Math.min(Math.max(v.y / this.radius, -1), 1));

			}

			return this.makeSafe();

		}

		/**
		 * Restricts phi to `[1e-6, PI - 1e-6]`.
		 *
		 * @return {Spherical} This spherical system.
		 */

		makeSafe() {

			this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi));

			return this;

		}

	}

	/**
	 * A symmetric 3x3 matrix.
	 */

	/**
	 * A vector with four components.
	 */

	/**
	 * Mathematical data structures.
	 *
	 * @module math-ds
	 */

	/**
	 * An enumeration of pointer buttons.
	 *
	 * @type {Object}
	 * @property {Number} MAIN - The main mouse button, usually the left one.
	 * @property {Number} AUXILIARY - The auxiliary mouse button, usually the middle one.
	 * @property {Number} SECONDARY - The secondary mouse button, usually the right one.
	 */

	const PointerButton = {

		MAIN: 0,
		AUXILIARY: 1,
		SECONDARY: 2

	};

	/**
	 * Two PI.
	 *
	 * @type {Number}
	 * @private
	 */

	const TWO_PI = Math.PI * 2;

	/**
	 * A vector.
	 *
	 * @type {Vector3}
	 * @private
	 */

	const v$6 = new Vector3();

	/**
	 * A matrix.
	 *
	 * @type {Matrix4}
	 * @private
	 */

	const m$1 = new Matrix4();

	/**
	 * A rotation manager.
	 */

	class RotationManager {

		/**
		 * Constructs a new rotation manager.
		 *
		 * @param {Vector3} position - A position.
		 * @param {Quaternion} quaternion - A quaternion.
		 * @param {Vector3} target - A target.
		 * @param {Settings} settings - The settings.
		 */

		constructor(position, quaternion, target, settings) {

			/**
			 * The position that will be modified.
			 *
			 * @type {Vector3}
			 * @private
			 */

			this.position = position;

			/**
			 * The quaternion that will be modified.
			 *
			 * @type {Quaternion}
			 * @private
			 */

			this.quaternion = quaternion;

			/**
			 * A target.
			 *
			 * @type {Vector3}
			 * @private
			 */

			this.target = target;

			/**
			 * The settings.
			 *
			 * @type {Settings}
			 * @private
			 */

			this.settings = settings;

			/**
			 * A spherical coordinate system.
			 *
			 * @type {Spherical}
			 */

			this.spherical = new Spherical();

		}

		/**
		 * Sets the position.
		 *
		 * @param {Vector3} position - A position.
		 * @return {RotationManager} This manager.
		 */

		setPosition(position) {

			this.position = position;

			return this;

		}

		/**
		 * Sets the quaternion.
		 *
		 * @param {Quaternion} quaternion - A quaternion.
		 * @return {RotationManager} This manager.
		 */

		setQuaternion(quaternion) {

			this.quaternion = quaternion;

			return this;

		}

		/**
		 * Sets the target.
		 *
		 * @param {Vector3} target - A target.
		 * @return {RotationManager} This manager.
		 */

		setTarget(target) {

			this.target = target;

			return this;

		}

		/**
		 * Updates the quaternion.
		 *
		 * @return {RotationManager} This manager.
		 */

		updateQuaternion() {

			const settings = this.settings;
			const rotation = settings.rotation;

			if(settings.general.orbit) {

				m$1.lookAt(v$6.subVectors(this.position, this.target), rotation.pivotOffset, rotation.up);

			} else {

				m$1.lookAt(v$6.set(0, 0, 0), this.target.setFromSpherical(this.spherical), rotation.up);

			}

			this.quaternion.setFromRotationMatrix(m$1);

			return this;

		}

		/**
		 * Adjusts the spherical system.
		 *
		 * @param {Number} theta - The angle to add to theta in radians.
		 * @param {Number} phi - The angle to add to phi in radians.
		 * @return {RotationManager} This manager.
		 */

		adjustSpherical(theta, phi) {

			const settings = this.settings;
			const orbit = settings.general.orbit;
			const rotation = settings.rotation;
			const s = this.spherical;

			s.theta = !rotation.invertX ? s.theta - theta : s.theta + theta;
			s.phi = ((orbit || rotation.invertY) && !(orbit && rotation.invertY)) ? s.phi - phi : s.phi + phi;

			// Restrict theta and phi.
			s.theta = Math.min(Math.max(s.theta, rotation.minAzimuthalAngle), rotation.maxAzimuthalAngle);
			s.phi = Math.min(Math.max(s.phi, rotation.minPolarAngle), rotation.maxPolarAngle);
			s.theta %= TWO_PI;
			s.makeSafe();

			if(orbit) {

				// Keep the position up-to-date.
				this.position.setFromSpherical(s).add(this.target);

			}

			return this;

		}

		/**
		 * Zooms in or out.
		 *
		 * @param {Number} sign - The zoom sign. Possible values are [-1, 0, 1].
		 * @return {RotationManager} This manager.
		 */

		zoom(sign) {

			const settings = this.settings;
			const general = settings.general;
			const sensitivity = settings.sensitivity;
			const zoom = settings.zoom;
			const s = this.spherical;

			let amount, min, max;

			if(general.orbit && zoom.enabled) {

				amount = sign * sensitivity.zoom;

				if(zoom.invert) {

					amount = -amount;

				}

				min = Math.max(zoom.minDistance, 1e-6);
				max = Math.min(zoom.maxDistance, Infinity);

				s.radius = Math.min(Math.max(s.radius + amount, min), max);
				this.position.setFromSpherical(s).add(this.target);

			}

			return this;

		}

		/**
		 * Updates rotation calculations based on time.
		 *
		 * @param {Number} delta - The time since the last update in seconds.
		 */

		update(delta) {

		}

		/**
		 * Looks at the given point.
		 *
		 * @param {Vector3} point - The target point.
		 * @return {RotationManager} This manager.
		 */

		lookAt(point) {

			const spherical = this.spherical;
			const position = this.position;
			const target = this.target;

			target.copy(point);

			if(this.settings.general.orbit) {

				v$6.subVectors(position, target);

			} else {

				v$6.subVectors(target, position).normalize();

			}

			spherical.setFromVector3(v$6);
			spherical.radius = Math.max(spherical.radius, 1e-6);
			this.updateQuaternion();

			return this;

		}

		/**
		 * Returns the current view direction.
		 *
		 * @param {Vector3} [view] - A vector to store the direction in. If none is provided, a new vector will be created.
		 * @return {Vector3} The normalized view direction.
		 */

		getViewDirection(view = new Vector3()) {

			view.setFromSpherical(this.spherical).normalize();

			if(this.settings.general.orbit) {

				view.negate();

			}

			return view;

		}

	}

	/**
	 * An collection of movement flags.
	 */

	class MovementState {

		/**
		 * Constructs a new movement state.
		 */

		constructor() {

			/**
			 * Movement to the left.
			 *
			 * @type {Boolean}
			 */

			this.left = false;

			/**
			 * Movement to the right.
			 *
			 * @type {Boolean}
			 */

			this.right = false;

			/**
			 * Forward motion.
			 *
			 * @type {Boolean}
			 */

			this.forward = false;

			/**
			 * Backward motion.
			 *
			 * @type {Boolean}
			 */

			this.backward = false;

			/**
			 * Ascension.
			 *
			 * @type {Boolean}
			 */

			this.up = false;

			/**
			 * Descent.
			 *
			 * @type {Boolean}
			 */

			this.down = false;

		}

		/**
		 * Resets this state.
		 *
		 * @return {MovementState} This state.
		 */

		reset() {

			this.left = false;
			this.right = false;
			this.forward = false;
			this.backward = false;
			this.up = false;
			this.down = false;

			return this;

		}

	}

	/**
	 * The X-axis.
	 *
	 * @type {Vector3}
	 * @ignore
	 */

	const x = new Vector3(1, 0, 0);

	/**
	 * The Y-axis.
	 *
	 * @type {Vector3}
	 * @ignore
	 */

	const y = new Vector3(0, 1, 0);

	/**
	 * The Z-axis.
	 *
	 * @type {Vector3}
	 * @ignore
	 */

	const z = new Vector3(0, 0, 1);

	/**
	 * A vector.
	 *
	 * @type {Vector3}
	 * @private
	 */

	const v$7 = new Vector3();

	/**
	 * A translation manager.
	 */

	class TranslationManager {

		/**
		 * Constructs a new translation manager.
		 *
		 * @param {Vector3} position - A position.
		 * @param {Quaternion} quaternion - A quaternion.
		 * @param {Vector3} target - A target.
		 * @param {Settings} settings - The settings.
		 */

		constructor(position, quaternion, target, settings) {

			/**
			 * The position that will be modified.
			 *
			 * @type {Vector3}
			 * @private
			 */

			this.position = position;

			/**
			 * The quaternion that will be modified.
			 *
			 * @type {Quaternion}
			 * @private
			 */

			this.quaternion = quaternion;

			/**
			 * A target.
			 *
			 * @type {Vector3}
			 * @private
			 */

			this.target = target;

			/**
			 * The settings.
			 *
			 * @type {Settings}
			 * @private
			 */

			this.settings = settings;

			/**
			 * The current movement state.
			 *
			 * @type {MovementState}
			 */

			this.movementState = new MovementState();

		}

		/**
		 * Sets the position.
		 *
		 * @param {Vector3} position - A position.
		 * @return {RotationManager} This manager.
		 */

		setPosition(position) {

			this.position = position;

			return this;

		}

		/**
		 * Sets the quaternion.
		 *
		 * @param {Quaternion} quaternion - A quaternion.
		 * @return {RotationManager} This manager.
		 */

		setQuaternion(quaternion) {

			this.quaternion = quaternion;

			return this;

		}

		/**
		 * Sets the target.
		 *
		 * @param {Vector3} target - A target.
		 * @return {RotationManager} This manager.
		 */

		setTarget(target) {

			this.target = target;

			return this;

		}

		/**
		 * Translates a position by a specific distance along a given axis.
		 *
		 * @private
		 * @param {Vector3} axis - The axis.
		 * @param {Vector3} distance - The distance.
		 */

		translateOnAxis(axis, distance) {

			v$7.copy(axis).applyQuaternion(this.quaternion).multiplyScalar(distance);

			this.position.add(v$7);

			if(this.settings.general.orbit) {

				this.target.add(v$7);

			}

		}

		/**
		 * Modifies the position based on the current movement state and elapsed time.
		 *
		 * @private
		 * @param {Number} delta - The time since the last update in seconds.
		 */

		translate(delta) {

			const sensitivity = this.settings.sensitivity;
			const state = this.movementState;

			const step = delta * sensitivity.translation;

			if(state.backward) {

				this.translateOnAxis(z, step);

			} else if(state.forward) {

				this.translateOnAxis(z, -step);

			}

			if(state.right) {

				this.translateOnAxis(x, step);

			} else if(state.left) {

				this.translateOnAxis(x, -step);

			}

			if(state.up) {

				this.translateOnAxis(y, step);

			} else if(state.down) {

				this.translateOnAxis(y, -step);

			}

		}

		/**
		 * Updates movement calculations based on time.
		 *
		 * @param {Number} delta - The time since the last update in seconds.
		 */

		update(delta) {

			if(this.settings.translation.enabled) {

				this.translate(delta);

			}

		}

		/**
		 * Moves to the given position.
		 *
		 * @param {Vector3} position - The position.
		 * @return {DeltaControls} This instance.
		 */

		moveTo(position) {

			if(this.settings.general.orbit) {

				this.target.copy(position);

			} else {

				this.position.copy(position);

			}

			return this;

		}

	}

	/**
	 * A handler for the KeyCode Proxy.
	 *
	 * @type {Object}
	 * @private
	 */

	const KeyCodeHandler = {

		/**
		 * Handles key code lookups.
		 *
		 * @param {Object} target - The KeyCode enumeration.
		 * @param {String} name - A potential key code identifier.
		 * @return {Number} A key code.
		 */

		get(target, name) {

			return (name in target) ?
				target[name] : (name.length === 1) ?
					name.toUpperCase().charCodeAt(0) : undefined;

		}

	};

	/**
	 * An enumeration of key codes.
	 *
	 * Special keys are listed explicitly. Simple character keys [A-Z] are computed
	 * on demand. For instance, `KeyCode.A` will return the key code for the A key.
	 *
	 * @type {Object}
	 * @property {Number} BACKSPACE - Backspace key.
	 * @property {Number} TAB - Tab key.
	 * @property {Number} ENTER - Enter key.
	 * @property {Number} SHIFT - Shift key.
	 * @property {Number} CTRL - Control key.
	 * @property {Number} ALT - Alt key.
	 * @property {Number} PAUSE - Pause key.
	 * @property {Number} CAPS_LOCK - Caps lock key.
	 * @property {Number} ESCAPE - Escape key.
	 * @property {Number} SPACE - Space bar.
	 * @property {Number} PAGE_UP - Page up key.
	 * @property {Number} PAGE_DOWN - Page down key.
	 * @property {Number} END - End key.
	 * @property {Number} HOME - Home key.
	 * @property {Number} LEFT - Left arrow key.
	 * @property {Number} UP - Up arrow key.
	 * @property {Number} RIGHT - Right arrow key.
	 * @property {Number} DOWN - Down arrow key.
	 * @property {Number} INSERT - Insert key.
	 * @property {Number} DELETE - Delete key.
	 * @property {Number} META_LEFT - Left OS key.
	 * @property {Number} META_RIGHT - Right OS key.
	 * @property {Number} SELECT - Select key.
	 * @property {Number} NUMPAD_0 - Numpad 0 key.
	 * @property {Number} NUMPAD_1 - Numpad 1 key.
	 * @property {Number} NUMPAD_2 - Numpad 2 key.
	 * @property {Number} NUMPAD_3 - Numpad 3 key.
	 * @property {Number} NUMPAD_4 - Numpad 4 key.
	 * @property {Number} NUMPAD_5 - Numpad 5 key.
	 * @property {Number} NUMPAD_6 - Numpad 6 key.
	 * @property {Number} NUMPAD_7 - Numpad 7 key.
	 * @property {Number} NUMPAD_8 - Numpad 8 key.
	 * @property {Number} NUMPAD_9 - Numpad 9 key.
	 * @property {Number} MULTIPLY - Multiply key.
	 * @property {Number} ADD - Add key.
	 * @property {Number} SUBTRACT - Subtract key.
	 * @property {Number} DECIMAL_POINT - Decimal point key.
	 * @property {Number} DIVIDE - Divide key.
	 * @property {Number} F1 - F1 key.
	 * @property {Number} F2 - F2 key.
	 * @property {Number} F3 - F3 key.
	 * @property {Number} F4 - F4 key.
	 * @property {Number} F5 - F5 key.
	 * @property {Number} F6 - F6 key.
	 * @property {Number} F7 - F7 key.
	 * @property {Number} F8 - F8 key.
	 * @property {Number} F9 - F9 key.
	 * @property {Number} F10 - F10 key.
	 * @property {Number} F11 - F11 key.
	 * @property {Number} F12 - F12 key.
	 * @property {Number} NUM_LOCK - Num lock key.
	 * @property {Number} SCROLL_LOCK - Scroll lock key.
	 * @property {Number} SEMICOLON - Semicolon key.
	 * @property {Number} EQUAL_SIGN - Equal sign key.
	 * @property {Number} COMMA - Comma key.
	 * @property {Number} DASH - Dash key.
	 * @property {Number} PERIOD - Period key.
	 * @property {Number} FORWARD_SLASH - Forward slash key.
	 * @property {Number} GRAVE_ACCENT - Grave accent key.
	 * @property {Number} OPEN_BRACKET - Open bracket key.
	 * @property {Number} BACK_SLASH - Back slash key.
	 * @property {Number} CLOSE_BRACKET - Close bracket key.
	 * @property {Number} SINGLE_QUOTE - Single quote key.
	 */

	const KeyCode = new Proxy({

		BACKSPACE: 8,
		TAB: 9,
		ENTER: 13,

		SHIFT: 16,
		CTRL: 17,
		ALT: 18,

		PAUSE: 19,
		CAPS_LOCK: 20,
		ESCAPE: 27,

		SPACE: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,

		INSERT: 45,
		DELETE: 46,

		META_LEFT: 91,
		META_RIGHT: 92,
		SELECT: 93,

		NUMPAD_0: 96,
		NUMPAD_1: 97,
		NUMPAD_2: 98,
		NUMPAD_3: 99,
		NUMPAD_4: 100,
		NUMPAD_5: 101,
		NUMPAD_6: 102,
		NUMPAD_7: 103,
		NUMPAD_8: 104,
		NUMPAD_9: 105,
		MULTIPLY: 106,
		ADD: 107,
		SUBTRACT: 109,
		DECIMAL_POINT: 110,
		DIVIDE: 111,

		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,

		NUM_LOCK: 144,
		SCROLL_LOCK: 145,

		SEMICOLON: 186,
		EQUAL_SIGN: 187,
		COMMA: 188,
		DASH: 189,
		PERIOD: 190,
		FORWARD_SLASH: 191,
		GRAVE_ACCENT: 192,

		OPEN_BRACKET: 219,
		BACK_SLASH: 220,
		CLOSE_BRACKET: 221,
		SINGLE_QUOTE: 222

	}, KeyCodeHandler);

	/**
	 * General settings.
	 */

	class GeneralSettings {

		/**
		 * Constructs new general settings.
		 */

		constructor() {

			/**
			 * Indicates whether third person perspective is active.
			 *
			 * Should not be modified directly. See {@link DeltaControls#setOrbit}.
			 *
			 * @type {Boolean}
			 */

			this.orbit = true;

		}

		/**
		 * Copies the given general settings.
		 *
		 * @param {GeneralSettings} settings - General settings.
		 * @return {GeneralSettings} This instance.
		 */

		copy(settings) {

			this.orbit = settings.orbit;

			return this;

		}

		/**
		 * Clones this general settings instance.
		 *
		 * @return {GeneralSettings} The cloned general settings.
		 */

		clone() {

			return new this.constructor().copy(this);

		}

	}

	/**
	 * Key bindings.
	 */

	class KeyBindings {

		/**
		 * Constructs new key bindings.
		 */

		constructor() {

			/**
			 * The default key bindings.
			 *
			 * @type {Map}
			 */

			this.defaultActions = new Map();

			/**
			 * The current key bindings.
			 *
			 * @type {Map}
			 */

			this.actions = new Map();

		}

		/**
		 * Resets the current bindings to match the default bindings.
		 *
		 * @return {KeyBindings} This key bindings instance.
		 */

		reset() {

			this.actions = new Map(this.defaultActions);

			return this;

		}

		/**
		 * Establishes default key bindings and resets the current bindings.
		 *
		 * @param {Map} actions - A map of actions. Each key must be a key code and each value must be a number.
		 * @return {KeyBindings} This key bindings instance.
		 */

		setDefault(actions) {

			this.defaultActions = actions;

			return this.reset();

		}

		/**
		 * Copies the given key bindings, including the default bindings.
		 *
		 * @param {KeyBindings} keyBindings - Key bindings.
		 * @return {KeyBindings} This key bindings instance.
		 */

		copy(keyBindings) {

			this.defaultActions = new Map(keyBindings.defaultActions);
			this.actions = new Map(keyBindings.actions);

			return this;

		}

		/**
		 * Clears the default key bindings.
		 *
		 * @return {KeyBindings} This key bindings instance.
		 */

		clearDefault() {

			this.defaultActions.clear();

			return this;

		}

		/**
		 * Clears the current key bindings.
		 *
		 * @return {KeyBindings} This key bindings instance.
		 */

		clear() {

			this.actions.clear();

			return this;

		}

		/**
		 * Clones these key bindings.
		 *
		 * @return {KeyBindings} The cloned key bindings.
		 */

		clone() {

			return new this.constructor().copy(this);

		}

		/**
		 * Checks if the given key is bound to an action.
		 *
		 * @param {KeyCode} keyCode - A key code.
		 * @return {Boolean} Whether the given key is bound to an action.
		 */

		has(keyCode) {

			return this.actions.has(keyCode);

		}

		/**
		 * Returns the action that is bound to the given key.
		 *
		 * @param {KeyCode} keyCode - A key code.
		 * @return {Number} The action, or undefined if the key is not bound to any action.
		 */

		get(keyCode) {

			return this.actions.get(keyCode);

		}

		/**
		 * Binds a key to an action.
		 *
		 * @param {KeyCode} keyCode - A key code.
		 * @param {Number} action - An action.
		 * @return {KeyBindings} This instance.
		 */

		set(keyCode, action) {

			this.actions.set(keyCode, action);

			return this;

		}

		/**
		 * Unbinds a key.
		 *
		 * @param {KeyCode} keyCode - A key code.
		 * @return {Boolean} Whether the key bindings existed or not.
		 */

		delete(keyCode) {

			return this.actions.delete(keyCode);

		}

		/**
		 * Creates a plain representation of this instance.
		 *
		 * @return {String} The plain representation.
		 */

		toJSON() {

			return {
				defaultActions: [...this.defaultActions],
				actions: [...this.actions]
			};

		}

	}

	/**
	 * Pointer settings.
	 */

	class PointerSettings {

		/**
		 * Constructs new pointer settings.
		 */

		constructor() {

			/**
			 * Whether the pointer buttons must be held down to have an effect.
			 *
			 * This setting only applies when the pointer is locked.
			 *
			 * @type {Boolean}
			 */

			this.hold = false;

			/**
			 * Whether the pointer should be locked on click events.
			 *
			 * @type {Boolean}
			 */

			this.lock = true;

		}

		/**
		 * Copies the given pointer settings.
		 *
		 * @param {PointerSettings} settings - Pointer settings.
		 * @return {PointerSettings} This instance.
		 */

		copy(settings) {

			this.hold = settings.hold;
			this.lock = settings.lock;

			return this;

		}

		/**
		 * Clones this pointer settings instance.
		 *
		 * @return {PointerSettings} The cloned pointer settings.
		 */

		clone() {

			return new this.constructor().copy(this);

		}

	}

	/**
	 * Rotation settings.
	 */

	class RotationSettings {

		/**
		 * Constructs new rotation settings.
		 */

		constructor() {

			/**
			 * The up vector. Must be normalized.
			 *
			 * @type {Vector3}
			 */

			this.up = new Vector3();
			this.up.copy(y);

			/**
			 * A pivot offset. Only affects third person orbiting.
			 *
			 * @type {Vector3}
			 */

			this.pivotOffset = new Vector3();

			/**
			 * The minimum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
			 *
			 * @type {Number}
			 */

			this.minAzimuthalAngle = -Infinity;

			/**
			 * The maximum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
			 *
			 * @type {Number}
			 */

			this.maxAzimuthalAngle = Infinity;

			/**
			 * The minimum polar angle in radians. Range: [0, Math.PI].
			 *
			 * @type {Number}
			 */

			this.minPolarAngle = 0.0;

			/**
			 * The maximum polar angle in radians. Range: [0, Math.PI].
			 *
			 * @type {Number}
			 */

			this.maxPolarAngle = Math.PI;

			/**
			 * Indicates whether the horizontal rotation should be inverted.
			 *
			 * @type {Boolean}
			 */

			this.invertX = false;

			/**
			 * Indicates whether the vertical rotation should be inverted.
			 *
			 * @type {Boolean}
			 */

			this.invertY = false;

		}

		/**
		 * Copies the given rotation settings.
		 *
		 * @param {RotationSettings} settings - Rotation settings.
		 * @return {RotationSettings} This instance.
		 */

		copy(settings) {

			this.up.copy(settings.up);
			this.pivotOffset.copy(settings.pivotOffset);

			this.minAzimuthalAngle = (settings.minAzimuthalAngle !== null) ? settings.minAzimuthalAngle : -Infinity;
			this.maxAzimuthalAngle = (settings.maxAzimuthalAngle !== null) ? settings.maxAzimuthalAngle : Infinity;

			this.minPolarAngle = settings.minPolarAngle;
			this.maxPolarAngle = settings.maxPolarAngle;

			this.invertX = settings.invertX;
			this.invertY = settings.invertY;

			return this;

		}

		/**
		 * Clones this rotation settings instance.
		 *
		 * @return {RotationSettings} The cloned rotation settings.
		 */

		clone() {

			return new this.constructor().copy(this);

		}

	}

	/**
	 * Sensitivity settings.
	 */

	class SensitivitySettings {

		/**
		 * Constructs new sensitivity settings.
		 */

		constructor() {

			/**
			 * The rotation sensitivity.
			 *
			 * @type {Number}
			 */

			this.rotation = 0.0025;

			/**
			 * The translation sensitivity.
			 *
			 * @type {Number}
			 */

			this.translation = 1.0;

			/**
			 * The zoom sensitivity.
			 *
			 * @type {Number}
			 */

			this.zoom = 0.1;

		}

		/**
		 * Copies the given sensitivity settings.
		 *
		 * @param {SensitivitySettings} settings - Sensitivity settings.
		 * @return {SensitivitySettings} This instance.
		 */

		copy(settings) {

			this.rotation = settings.rotation;
			this.translation = settings.translation;
			this.zoom = settings.zoom;

			return this;

		}

		/**
		 * Clones these sensitivity settings.
		 *
		 * @return {SensitivitySettings} The cloned sensitivity settings.
		 */

		clone() {

			return new this.constructor().copy(this);

		}

	}

	/**
	 * Translation settings.
	 */

	class TranslationSettings {

		/**
		 * Constructs new translation settings.
		 */

		constructor() {

			/**
			 * Whether positional translation is enabled.
			 *
			 * @type {Boolean}
			 */

			this.enabled = true;

		}

		/**
		 * Copies the given translation settings.
		 *
		 * @param {TranslationSettings} settings - Translation settings.
		 * @return {TranslationSettings} This instance.
		 */

		copy(settings) {

			this.enabled = settings.enabled;

			return this;

		}

		/**
		 * Clones this translation settings instance.
		 *
		 * @return {RotationSettings} The cloned translation settings.
		 */

		clone() {

			return new this.constructor().copy(this);

		}

	}

	/**
	 * Zoom settings.
	 */

	class ZoomSettings {

		/**
		 * Constructs new zoom settings.
		 */

		constructor() {

			/**
			 * Whether zooming is enabled.
			 *
			 * @type {Boolean}
			 */

			this.enabled = true;

			/**
			 * Indicates whether the zoom controls should be inverted.
			 *
			 * @type {Boolean}
			 */

			this.invert = false;

			/**
			 * The minimum zoom distance.
			 *
			 * @type {Number}
			 */

			this.minDistance = 1e-6;

			/**
			 * The maximum zoom distance.
			 *
			 * @type {Number}
			 */

			this.maxDistance = Infinity;

		}

		/**
		 * Copies the given zoom settings.
		 *
		 * @param {ZoomSettings} settings - Zoom settings.
		 * @return {ZoomSettings} This instance.
		 */

		copy(settings) {

			this.enabled = settings.enabled;
			this.invert = settings.invert;
			this.minDistance = settings.minDistance;
			this.maxDistance = settings.maxDistance;

			return this;

		}

		/**
		 * Clones this zoom settings instance.
		 *
		 * @return {ZoomSettings} The cloned zoom settings.
		 */

		clone() {

			return new this.constructor().copy(this);

		}

	}

	/**
	 * Control settings.
	 */

	class Settings {

		/**
		 * Constructs new settings.
		 */

		constructor() {

			/**
			 * General settings.
			 *
			 * @type {GeneralSettings}
			 */

			this.general = new GeneralSettings();

			/**
			 * Key bindings.
			 *
			 * @type {KeyBindings}
			 */

			this.keyBindings = new KeyBindings();
			this.keyBindings.setDefault(new Map([

				[KeyCode.W, Action.MOVE_FORWARD],
				[KeyCode.UP, Action.MOVE_FORWARD],

				[KeyCode.A, Action.MOVE_LEFT],
				[KeyCode.LEFT, Action.MOVE_LEFT],

				[KeyCode.S, Action.MOVE_BACKWARD],
				[KeyCode.DOWN, Action.MOVE_BACKWARD],

				[KeyCode.D, Action.MOVE_RIGHT],
				[KeyCode.RIGHT, Action.MOVE_RIGHT],

				[KeyCode.X, Action.MOVE_DOWN],
				[KeyCode.SPACE, Action.MOVE_UP],

				[KeyCode.PAGE_DOWN, Action.ZOOM_OUT],
				[KeyCode.PAGE_UP, Action.ZOOM_IN]

			]));

			/**
			 * Pointer settings.
			 *
			 * @type {PointerSettings}
			 */

			this.pointer = new PointerSettings();

			/**
			 * Rotation settings.
			 *
			 * @type {RotationSettings}
			 */

			this.rotation = new RotationSettings();

			/**
			 * Sensitivity settings.
			 *
			 * @type {SensitivitySettings}
			 */

			this.sensitivity = new SensitivitySettings();

			/**
			 * Translation settings.
			 *
			 * @type {TranslationSettings}
			 */

			this.translation = new TranslationSettings();

			/**
			 * Zoom settings.
			 *
			 * @type {ZoomSettings}
			 */

			this.zoom = new ZoomSettings();

		}

		/**
		 * Copies the given settings.
		 *
		 * @param {Settings} settings - Settings.
		 * @return {Settings} This instance.
		 */

		copy(settings) {

			this.general.copy(settings.general);
			this.keyBindings.copy(settings.keyBindings);
			this.pointer.copy(settings.pointer);
			this.rotation.copy(settings.rotation);
			this.sensitivity.copy(settings.sensitivity);
			this.translation.copy(settings.translation);
			this.zoom.copy(settings.zoom);

			return this;

		}

		/**
		 * Clones these settings.
		 *
		 * @return {Settings} The cloned settings.
		 */

		clone() {

			return new this.constructor().copy(this);

		}

		/**
		 * Saves the current settings in the form of a JSON blob.
		 *
		 * @return {DOMString} A URL to the exported settings.
		 */

		toDataURL() {

			return URL.createObjectURL(new Blob([JSON.stringify(this)], { type: "text/json" }));

		}

	}

	/**
	 * The Strategy interface.
	 */

	class Strategy {

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

	/**
	 * A movement strategy.
	 */

	class MovementStrategy extends Strategy {

		/**
		 * Constructs a new movement strategy.
		 *
		 * @param {MovementState} movementState - A movement state.
		 * @param {Direction} direction - A direction.
		 */

		constructor(movementState, direction) {

			super();

			/**
			 * A movement state.
			 *
			 * @type {MovementState}
			 * @private
			 */

			this.movementState = movementState;

			/**
			 * A direction.
			 *
			 * @type {Direction}
			 * @private
			 */

			this.direction = direction;

		}

		/**
		 * Executes this strategy.
		 *
		 * @param {Boolean} flag - A flag.
		 */

		execute(flag) {

			const state = this.movementState;

			switch(this.direction) {

				case Direction.FORWARD:
					state.forward = flag;
					break;

				case Direction.LEFT:
					state.left = flag;
					break;

				case Direction.BACKWARD:
					state.backward = flag;
					break;

				case Direction.RIGHT:
					state.right = flag;
					break;

				case Direction.DOWN:
					state.down = flag;
					break;

				case Direction.UP:
					state.up = flag;
					break;

			}

		}

	}
	/**
	 * An enumeration of movement directions.
	 *
	 * @type {Object}
	 * @property {Number} FORWARD - Move forward.
	 * @property {Number} LEFT - Move left.
	 * @property {Number} BACKWARD - Move backward.
	 * @property {Number} RIGHT - Move right.
	 * @property {Number} DOWN - Move down.
	 * @property {Number} UP - Move up.
	 */

	const Direction = {

		FORWARD: 0,
		LEFT: 1,
		BACKWARD: 2,
		RIGHT: 3,
		DOWN: 4,
		UP: 5

	};

	/**
	 * A zoom strategy.
	 */

	class ZoomStrategy extends Strategy {

		/**
		 * Constructs a new zoom strategy.
		 *
		 * @param {RotationManager} rotationManager - A rotation manager.
		 * @param {Boolean} zoomIn - Whether this strategy should zoom in.
		 */

		constructor(rotationManager, zoomIn) {

			super();

			/**
			 * A rotation manager.
			 *
			 * @type {RotationManager}
			 * @private
			 */

			this.rotationManager = rotationManager;

			/**
			 * Whether this strategy should zoom in.
			 *
			 * @type {Boolean}
			 * @private
			 */

			this.zoomIn = zoomIn;

		}

		/**
		 * Executes this strategy.
		 *
		 * @param {Boolean} flag - A flag.
		 */

		execute(flag) {

			// Only act on key down events.
			if(flag) {

				this.rotationManager.zoom(this.zoomIn ? -1 : 1);

			}

		}

	}

	/**
	 * Movement controls driven by user input.
	 *
	 * @implements {Disposable}
	 * @implements {EventListener}
	 */

	class DeltaControls {

		/**
		 * Constructs new controls.
		 *
		 * @param {Vector3} position - A position.
		 * @param {Quaternion} quaternion - A quaternion.
		 * @param {HTMLElement} [dom=document.body] - A DOM element. Acts as the primary event target.
		 */

		constructor(position = null, quaternion = null, dom = document.body) {

			/**
			 * A DOM element. Acts as the primary event target.
			 *
			 * @type {HTMLElement}
			 * @private
			 */

			this.dom = dom;

			/**
			 * The position that will be modified.
			 *
			 * @type {Vector3}
			 * @private
			 */

			this.position = position;

			/**
			 * The quaternion that will be modified.
			 *
			 * @type {Quaternion}
			 * @private
			 */

			this.quaternion = quaternion;

			/**
			 * The target.
			 *
			 * @type {Vector3}
			 * @private
			 */

			this.target = new Vector3();

			/**
			 * The control settings.
			 *
			 * @type {Settings}
			 */

			this.settings = new Settings();

			/**
			 * A rotation manager.
			 *
			 * @type {RotationManager}
			 * @private
			 */

			this.rotationManager = new RotationManager(position, quaternion, this.target, this.settings);

			/**
			 * A translation manager.
			 *
			 * @type {TranslationManager}
			 * @private
			 */

			this.translationManager = new TranslationManager(position, quaternion, this.target, this.settings);

			/**
			 * A map that links actions to specific strategies.
			 *
			 * @type {Map}
			 * @private
			 */

			this.strategies = ((rotationManager, translationManager) => {

				const state = translationManager.movementState;

				return new Map([

					[Action.MOVE_FORWARD, new MovementStrategy(state, Direction.FORWARD)],
					[Action.MOVE_LEFT, new MovementStrategy(state, Direction.LEFT)],
					[Action.MOVE_BACKWARD, new MovementStrategy(state, Direction.BACKWARD)],
					[Action.MOVE_RIGHT, new MovementStrategy(state, Direction.RIGHT)],
					[Action.MOVE_DOWN, new MovementStrategy(state, Direction.DOWN)],
					[Action.MOVE_UP, new MovementStrategy(state, Direction.UP)],
					[Action.ZOOM_OUT, new ZoomStrategy(rotationManager, false)],
					[Action.ZOOM_IN, new ZoomStrategy(rotationManager, true)]

				]);

			})(this.rotationManager, this.translationManager);

			/**
			 * A screen position.
			 *
			 * @type {Vector2}
			 * @private
			 */

			this.lastScreenPosition = new Vector2();

			/**
			 * Indicates whether the user is currently holding the pointer button down.
			 *
			 * @type {Boolean}
			 * @private
			 */

			this.dragging = false;

			/**
			 * The internal enabled state.
			 *
			 * @type {Boolean}
			 * @private
			 */

			this.enabled = false;

			if(position !== null && quaternion !== null) {

				this.lookAt(this.target);

				if(dom !== null) {

					this.setEnabled();

				}

			}

		}

		/**
		 * Returns the DOM element.
		 *
		 * @return {HTMLElement} The DOM element.
		 */

		getDom() {

			return this.dom;

		}

		/**
		 * Returns the position.
		 *
		 * @return {Vector3} The position.
		 */

		getPosition() {

			return this.position;

		}

		/**
		 * Returns the quaternion.
		 *
		 * @return {Quaternion} The quaternion.
		 */

		getQuaternion() {

			return this.quaternion;

		}

		/**
		 * Returns the current target.
		 *
		 * @param {Vector3} [target] - A vector to store the target in. If none is provided, a new one will be created.
		 * @return {Vector3} The current target.
		 */

		getTarget(target = new Vector3()) {

			target.copy(this.target);

			if(!this.settings.general.orbit) {

				// The target is relative to the position.
				target.add(this.position);

			}

			return target;

		}

		/**
		 * Returns the current view direction.
		 *
		 * @param {Vector3} [view] - A vector to store the direction in. If none is provided, a new one will be created.
		 * @return {Vector3} The normalized view direction.
		 */

		getViewDirection(view = new Vector3()) {

			return this.rotationManager.getViewDirection(view);

		}

		/**
		 * Sets the DOM element.
		 *
		 * @param {HTMLElement} dom - The new DOM element.
		 * @return {DeltaControls} This instance.
		 */

		setDom(dom) {

			const enabled = this.enabled;

			if(dom !== null) {

				if(enabled) {

					this.setEnabled(false);

				}

				this.dom = dom;
				this.setEnabled(enabled);

			}

			return this;

		}

		/**
		 * Sets the position vector.
		 *
		 * @param {Vector3} position - The new position vector.
		 * @return {DeltaControls} This instance.
		 */

		setPosition(position) {

			this.position = position;
			this.rotationManager.setPosition(position);
			this.translationManager.setPosition(position);

			return this.lookAt(this.target);

		}

		/**
		 * Sets the quaternion.
		 *
		 * @param {Quaternion} quaternion - The new quaternion.
		 * @return {DeltaControls} This instance.
		 */

		setQuaternion(quaternion) {

			this.quaternion = quaternion;
			this.rotationManager.setQuaternion(quaternion);
			this.translationManager.setQuaternion(quaternion);

			return this.lookAt(this.target);

		}

		/**
		 * Sets the target.
		 *
		 * @param {Vector3} target - The new target.
		 * @return {DeltaControls} This instance.
		 */

		setTarget(target) {

			this.target = target;
			this.rotationManager.setTarget(target);
			this.translationManager.setTarget(target);

			return this.lookAt(this.target);

		}

		/**
		 * Changes the control mode to first or third person perspective.
		 *
		 * @param {Boolean} orbit - Whether the third person perspective should be enabled.
		 * @return {DeltaControls} This instance.
		 */

		setOrbitEnabled(orbit) {

			const general = this.settings.general;

			if(general.orbit !== orbit) {

				this.getTarget(this.target);
				general.orbit = orbit;
				this.lookAt(this.target);

			}

			return this;

		}

		/**
		 * Copies the given controls.
		 *
		 * @param {DeltaControls} controls - A controls instance.
		 * @return {DeltaControls} This instance.
		 */

		copy(controls) {

			this.dom = controls.getDom();
			this.position = controls.getPosition();
			this.quaternion = controls.getQuaternion();
			this.target = controls.getTarget();

			this.settings.copy(controls.settings);

			this.rotationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);
			this.translationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);

			return this.lookAt(this.target);

		}

		/**
		 * Clones this instance.
		 *
		 * @return {DeltaControls} the cloned controls.
		 */

		clone() {

			return new this.constructor().copy(this);

		}

		/**
		 * Handles pointer move events.
		 *
		 * @private
		 * @param {MouseEvent} event - A pointer event.
		 */

		handlePointerMoveEvent(event) {

			const settings = this.settings;
			const pointer = settings.pointer;
			const sensitivity = settings.sensitivity;
			const rotationManager = this.rotationManager;
			const lastScreenPosition = this.lastScreenPosition;

			let movementX, movementY;

			if(document.pointerLockElement === this.dom) {

				if(!pointer.hold || this.dragging) {

					rotationManager.adjustSpherical(
						event.movementX * sensitivity.rotation,
						event.movementY * sensitivity.rotation
					).updateQuaternion();

				}

			} else {

				// Compensate for inconsistent web APIs.
				movementX = event.screenX - lastScreenPosition.x;
				movementY = event.screenY - lastScreenPosition.y;

				lastScreenPosition.set(event.screenX, event.screenY);

				rotationManager.adjustSpherical(
					movementX * sensitivity.rotation,
					movementY * sensitivity.rotation
				).updateQuaternion();

			}

		}

		/**
		 * Handles touch move events.
		 *
		 * @private
		 * @param {TouchEvent} event - A touch event.
		 */

		handleTouchMoveEvent(event) {

			const sensitivity = this.settings.sensitivity;
			const rotationManager = this.rotationManager;
			const lastScreenPosition = this.lastScreenPosition;
			const touch = event.touches[0];

			// Compensate for inconsistent web APIs.
			const movementX = touch.screenX - lastScreenPosition.x;
			const movementY = touch.screenY - lastScreenPosition.y;

			lastScreenPosition.set(touch.screenX, touch.screenY);

			// Don't produce a mouse move event.
			event.preventDefault();

			rotationManager.adjustSpherical(
				movementX * sensitivity.rotation,
				movementY * sensitivity.rotation
			).updateQuaternion();

		}

		/**
		 * Handles main pointer button events.
		 *
		 * @private
		 * @param {MouseEvent} event - A pointer event.
		 * @param {Boolean} pressed - Whether the pointer button has been pressed down.
		 */

		handleMainPointerButton(event, pressed) {

			this.dragging = pressed;

			if(this.settings.pointer.lock) {

				this.setPointerLocked();

			} else {

				if(pressed) {

					this.lastScreenPosition.set(event.screenX, event.screenY);
					this.dom.addEventListener("mousemove", this);

				} else {

					this.dom.removeEventListener("mousemove", this);

				}

			}

		}

		/**
		 * Handles auxiliary pointer button events.
		 *
		 * @private
		 * @param {MouseEvent} event - A pointer event.
		 * @param {Boolean} pressed - Whether the pointer button has been pressed down.
		 */

		handleAuxiliaryPointerButton(event, pressed) {

		}

		/**
		 * Handles secondary pointer button events.
		 *
		 * @private
		 * @param {MouseEvent} event - A pointer event.
		 * @param {Boolean} pressed - Whether the pointer button has been pressed down.
		 */

		handleSecondaryPointerButton(event, pressed) {

		}

		/**
		 * Handles pointer events.
		 *
		 * @private
		 * @param {MouseEvent} event - A pointer event.
		 * @param {Boolean} pressed - Whether the pointer button has been pressed down.
		 */

		handlePointerButtonEvent(event, pressed) {

			event.preventDefault();

			switch(event.button) {

				case PointerButton.MAIN:
					this.handleMainPointerButton(event, pressed);
					break;

				case PointerButton.AUXILIARY:
					this.handleAuxiliaryPointerButton(event, pressed);
					break;

				case PointerButton.SECONDARY:
					this.handleSecondaryPointerButton(event, pressed);
					break;

			}

		}

		/**
		 * Handles touch start and end events.
		 *
		 * @private
		 * @param {TouchEvent} event - A touch event.
		 * @param {Boolean} start - Whether the event is a touch start event.
		 */

		handleTouchEvent(event, start) {

			const touch = event.touches[0];

			// Don't produce mouse events.
			event.preventDefault();

			if(start) {

				this.lastScreenPosition.set(touch.screenX, touch.screenY);
				this.dom.addEventListener("touchmove", this);

			} else {

				this.dom.removeEventListener("touchmove", this);

			}

		}

		/**
		 * Handles keyboard events.
		 *
		 * @private
		 * @param {KeyboardEvent} event - A keyboard event.
		 * @param {Boolean} pressed - Whether the key has been pressed down.
		 */

		handleKeyboardEvent(event, pressed) {

			const keyBindings = this.settings.keyBindings;

			if(keyBindings.has(event.keyCode)) {

				event.preventDefault();

				this.strategies.get(keyBindings.get(event.keyCode)).execute(pressed);

			}

		}

		/**
		 * Handles wheel events.
		 *
		 * @private
		 * @param {WheelEvent} event - A wheel event.
		 */

		handleWheelEvent(event) {

			this.rotationManager.zoom(Math.sign(event.deltaY));

		}

		/**
		 * Enables or disables controls based on the pointer lock state.
		 *
		 * @private
		 */

		handlePointerLockEvent() {

			if(document.pointerLockElement === this.dom) {

				this.dom.addEventListener("mousemove", this);

			} else {

				this.dom.removeEventListener("mousemove", this);

			}

		}

		/**
		 * Handles events.
		 *
		 * @param {Event} event - An event.
		 */

		handleEvent(event) {

			switch(event.type) {

				case "mousemove":
					this.handlePointerMoveEvent(event);
					break;

				case "touchmove":
					this.handleTouchMoveEvent(event);
					break;

				case "mousedown":
					this.handlePointerButtonEvent(event, true);
					break;

				case "mouseup":
					this.handlePointerButtonEvent(event, false);
					break;

				case "touchstart":
					this.handleTouchEvent(event, true);
					break;

				case "touchend":
					this.handleTouchEvent(event, false);
					break;

				case "keydown":
					this.handleKeyboardEvent(event, true);
					break;

				case "keyup":
					this.handleKeyboardEvent(event, false);
					break;

				case "wheel":
					this.handleWheelEvent(event);
					break;

				case "pointerlockchange":
					this.handlePointerLockEvent();
					break;

			}

		}

		/**
		 * Updates movement and rotation calculations based on time.
		 *
		 * This method should be called before a new frame is rendered.
		 *
		 * @param {Number} delta - The time since the last update in seconds.
		 */

		update(delta) {

			this.rotationManager.update(delta);
			this.translationManager.update(delta);

		}

		/**
		 * Moves to the given position.
		 *
		 * @param {Vector3} position - The position.
		 * @return {DeltaControls} This instance.
		 */

		moveTo(position) {

			this.rotationManager.moveTo(position);

			return this;

		}

		/**
		 * Looks at the given point.
		 *
		 * @param {Vector3} point - The target point.
		 * @return {DeltaControls} This instance.
		 */

		lookAt(point) {

			this.rotationManager.lookAt(point);

			return this;

		}

		/**
		 * Locks or unlocks the pointer.
		 *
		 * @private
		 * @param {Boolean} [locked=true] - Whether the pointer should be locked.
		 */

		setPointerLocked(locked = true) {

			if(locked) {

				if(document.pointerLockElement !== this.dom && this.dom.requestPointerLock !== undefined) {

					this.dom.requestPointerLock();

				}

			} else if(document.exitPointerLock !== undefined) {

				document.exitPointerLock();

			}

		}

		/**
		 * Enables or disables the controls.
		 *
		 * @param {Boolean} [enabled=true] - Whether the controls should be enabled or disabled.
		 * @return {DeltaControls} This instance.
		 */

		setEnabled(enabled = true) {

			const dom = this.dom;

			this.translationManager.movementState.reset();

			if(enabled && !this.enabled) {

				document.addEventListener("pointerlockchange", this);
				document.body.addEventListener("keyup", this);
				document.body.addEventListener("keydown", this);
				dom.addEventListener("mousedown", this);
				dom.addEventListener("mouseup", this);
				dom.addEventListener("touchstart", this);
				dom.addEventListener("touchend", this);
				dom.addEventListener("wheel", this);

			} else if(!enabled && this.enabled) {

				document.removeEventListener("pointerlockchange", this);
				document.body.removeEventListener("keyup", this);
				document.body.removeEventListener("keydown", this);
				dom.removeEventListener("mousedown", this);
				dom.removeEventListener("mouseup", this);
				dom.removeEventListener("touchstart", this);
				dom.removeEventListener("touchend", this);
				dom.removeEventListener("wheel", this);
				dom.removeEventListener("mousemove", this);
				dom.removeEventListener("touchmove", this);

			}

			this.setPointerLocked(false);
			this.enabled = enabled;

			return this;

		}

		/**
		 * Removes all event listeners and unlocks the pointer.
		 */

		dispose() {

			this.setEnabled(false);

		}

	}

	/**
	 * A collection of core components.
	 *
	 * @module delta-controls/core
	 */

	/**
	 * A collection of classes related to input values.
	 *
	 * @module delta-controls/input
	 */

	/**
	 * A collection of managers.
	 *
	 * @module delta-controls/managers
	 */

	/**
	 * A collection of specialised settings.
	 *
	 * @module delta-controls/settings
	 */

	/**
	 * A collection of control strategies.
	 *
	 * @module delta-controls/strategies
	 */

	/**
	 * Exposure of the library components.
	 *
	 * @module delta-controls
	 */

	exports.Action = Action;
	exports.DeltaControls = DeltaControls;
	exports.KeyCode = KeyCode;
	exports.PointerButton = PointerButton;
	exports.MovementState = MovementState;
	exports.RotationManager = RotationManager;
	exports.TranslationManager = TranslationManager;
	exports.GeneralSettings = GeneralSettings;
	exports.KeyBindings = KeyBindings;
	exports.PointerSettings = PointerSettings;
	exports.RotationSettings = RotationSettings;
	exports.SensitivitySettings = SensitivitySettings;
	exports.TranslationSettings = TranslationSettings;
	exports.Settings = Settings;
	exports.ZoomSettings = ZoomSettings;
	exports.Direction = Direction;
	exports.MovementStrategy = MovementStrategy;
	exports.Strategy = Strategy;
	exports.ZoomStrategy = ZoomStrategy;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
