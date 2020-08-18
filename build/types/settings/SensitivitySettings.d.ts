export declare class SensitivitySettings {
    rotationX: number;
    rotationY: number;
    translation: number;
    zoom: number;
    constructor();
    set rotation(value: number);
    copy(settings: SensitivitySettings): SensitivitySettings;
    clone(): SensitivitySettings;
}
