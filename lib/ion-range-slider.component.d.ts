import { ElementRef, OnChanges, SimpleChanges, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class IonRangeSliderComponent implements OnChanges {
    min: any;
    max: any;
    from: any;
    to: any;
    disable: any;
    type: any;
    step: any;
    min_interval: any;
    max_interval: any;
    drag_interval: any;
    values: any;
    from_fixed: any;
    from_min: any;
    from_max: any;
    from_shadow: any;
    to_fixed: any;
    to_min: any;
    to_max: any;
    to_shadow: any;
    prettify_enabled: any;
    prettify_separator: any;
    force_edges: any;
    keyboard: any;
    keyboard_step: any;
    grid: any;
    grid_margin: any;
    grid_num: any;
    grid_snap: any;
    hide_min_max: any;
    hide_from_to: any;
    prefix: any;
    postfix: any;
    max_postfix: any;
    decorate_both: any;
    values_separator: any;
    input_values_separator: any;
    prettify: Function;
    onStart: EventEmitter<IonRangeSliderCallback>;
    onChange: EventEmitter<IonRangeSliderCallback>;
    onFinish: EventEmitter<IonRangeSliderCallback>;
    onUpdate: EventEmitter<IonRangeSliderCallback>;
    private el;
    private inputElem;
    private initialized;
    private from_percent;
    private from_value;
    private to_percent;
    private to_value;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    update(data: any): void;
    reset(): void;
    destroy(): void;
    private initSlider;
    private toBoolean;
    private updateInternalValues;
    private buildCallback;
    static ɵfac: i0.ɵɵFactoryDef<IonRangeSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IonRangeSliderComponent, "ion-range-slider", never, { "min": "min"; "max": "max"; "from": "from"; "to": "to"; "disable": "disable"; "type": "type"; "step": "step"; "min_interval": "min_interval"; "max_interval": "max_interval"; "drag_interval": "drag_interval"; "values": "values"; "from_fixed": "from_fixed"; "from_min": "from_min"; "from_max": "from_max"; "from_shadow": "from_shadow"; "to_fixed": "to_fixed"; "to_min": "to_min"; "to_max": "to_max"; "to_shadow": "to_shadow"; "prettify_enabled": "prettify_enabled"; "prettify_separator": "prettify_separator"; "force_edges": "force_edges"; "keyboard": "keyboard"; "keyboard_step": "keyboard_step"; "grid": "grid"; "grid_margin": "grid_margin"; "grid_num": "grid_num"; "grid_snap": "grid_snap"; "hide_min_max": "hide_min_max"; "hide_from_to": "hide_from_to"; "prefix": "prefix"; "postfix": "postfix"; "max_postfix": "max_postfix"; "decorate_both": "decorate_both"; "values_separator": "values_separator"; "input_values_separator": "input_values_separator"; "prettify": "prettify"; }, { "onStart": "onStart"; "onChange": "onChange"; "onFinish": "onFinish"; "onUpdate": "onUpdate"; }, never, never>;
}
export declare class IonRangeSliderCallback {
    min: any;
    max: any;
    from: number;
    from_percent: number;
    from_value: number;
    to: number;
    to_percent: number;
    to_value: number;
}
