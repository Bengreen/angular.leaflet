/// <reference types="leaflet" />
import { SimpleChanges, ElementRef } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
export declare class LeafletMap {
    mapElement: ElementRef;
    options?: L.MapOptions;
    map: L.Map;
    layerControl: L.Control.Layers;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
