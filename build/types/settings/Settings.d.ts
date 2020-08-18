import { GeneralSettings } from "./GeneralSettings";
import { KeyBindings } from "./KeyBindings";
import { PointerSettings } from "./PointerSettings";
import { RotationSettings } from "./RotationSettings";
import { SensitivitySettings } from "./SensitivitySettings";
import { TranslationSettings } from "./TranslationSettings";
import { ZoomSettings } from "./ZoomSettings";
export declare class Settings {
    general: GeneralSettings;
    keyBindings: KeyBindings;
    pointer: PointerSettings;
    rotation: RotationSettings;
    sensitivity: SensitivitySettings;
    translation: TranslationSettings;
    zoom: ZoomSettings;
    constructor();
    copy(settings: Settings): Settings;
    clone(): Settings;
    toDataURL(): string;
}
