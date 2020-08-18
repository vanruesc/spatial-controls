import { Quaternion, Vector3 } from "three";
import { MovementState } from "./MovementState";
import { Settings } from "../settings";
export declare class TranslationManager {
    private position;
    private quaternion;
    private target;
    private settings;
    movementState: MovementState;
    constructor(position: Vector3, quaternion: Quaternion, target: Vector3, settings: Settings);
    setPosition(position: Vector3): TranslationManager;
    setQuaternion(quaternion: Quaternion): TranslationManager;
    setTarget(target: Vector3): TranslationManager;
    private translateOnAxis;
    private translate;
    update(deltaTime: number): void;
    moveTo(position: Vector3): TranslationManager;
}
