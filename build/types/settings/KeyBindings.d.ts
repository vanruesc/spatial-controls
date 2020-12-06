import { KeyCode } from "../input";
import { Action } from "../core/Action";
export declare class KeyBindings {
    defaultActions: Map<KeyCode, Action>;
    actions: Map<KeyCode, Action>;
    constructor();
    reset(): KeyBindings;
    setDefault(actions: Map<KeyCode, Action>): KeyBindings;
    copy(keyBindings: KeyBindings): KeyBindings;
    clearDefault(): KeyBindings;
    clear(): KeyBindings;
    clone(): KeyBindings;
    has(keyCode: KeyCode): boolean;
    get(keyCode: KeyCode): Action;
    set(keyCode: KeyCode, action: Action): KeyBindings;
    delete(keyCode: KeyCode): boolean;
    toJSON(): Record<string, unknown>;
}
