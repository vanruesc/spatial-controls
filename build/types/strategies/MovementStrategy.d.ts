import { Strategy } from "./Strategy";
import { MovementState } from "../managers";
export declare class MovementStrategy implements Strategy {
    private movementState;
    private direction;
    constructor(movementState: MovementState, direction: Direction);
    execute(flag: boolean): void;
}
export declare enum Direction {
    FORWARD = 0,
    LEFT = 1,
    BACKWARD = 2,
    RIGHT = 3,
    DOWN = 4,
    UP = 5
}
