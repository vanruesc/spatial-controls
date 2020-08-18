import { Quaternion, Vector3 } from "three";
import { Settings } from "../settings";
export declare class RotationManager {
    private position;
    private quaternion;
    private target;
    private settings;
    private spherical;
    constructor(position: Vector3, quaternion: Quaternion, target: Vector3, settings: Settings);
    setPosition(position: Vector3): RotationManager;
    setQuaternion(quaternion: Quaternion): RotationManager;
    setTarget(target: Vector3): RotationManager;
    updateQuaternion(): RotationManager;
    adjustSpherical(theta: number, phi: number): RotationManager;
    zoom(sign: number): RotationManager;
    update(deltaTime: number): void;
    lookAt(point: Vector3): RotationManager;
    getViewDirection(view: Vector3): Vector3;
}
