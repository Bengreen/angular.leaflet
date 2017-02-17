/// <reference types="leaflet" />
import { SimpleChanges } from '@angular/core';
import { LeafletMap } from './leaflet-map';
import * as L from 'leaflet';
import 'leaflet.markercluster';
export declare class LeafletLayer {
    private leafletMap;
    urlTemplate: string;
    enabled: boolean;
    options?: L.TileLayerOptions;
    name?: string;
    base?: boolean;
    overlay?: boolean;
    tileLayer: L.TileLayer;
    constructor(leafletMap: LeafletMap);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
