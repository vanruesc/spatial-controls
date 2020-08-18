import { Strategy } from "./Strategy";
import { RotationManager } from "../managers";
export declare class ZoomStrategy implements Strategy {
    private rotationManager;
    private zoomIn;
    constructor(rotationManager: RotationManager, zoomIn: boolean);
    execute(flag: boolean): void;
}
