import { Vector3 } from "three";
export declare class RotationSettings {
    up: Vector3;
    pivotOffset: Vector3;
    minAzimuthalAngle: number;
    maxAzimuthalAngle: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    invertX: boolean;
    invertY: boolean;
    constructor();
    copy(settings: RotationSettings): RotationSettings;
    clone(): RotationSettings;
}
