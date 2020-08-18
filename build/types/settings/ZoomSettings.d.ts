export declare class ZoomSettings {
    enabled: boolean;
    invert: boolean;
    minDistance: number;
    maxDistance: number;
    constructor();
    copy(settings: ZoomSettings): ZoomSettings;
    clone(): ZoomSettings;
}
