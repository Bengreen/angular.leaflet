/// <reference types="leaflet" />
import { SimpleChanges } from '@angular/core';
import { LeafletMap } from './index';
import * as L from 'leaflet';
import 'leaflet.markercluster';
export declare class LeafletGroup {
    private leafletMap;
    name?: string;
    layerGroup: L.LayerGroup;
    constructor(leafletMap: LeafletMap);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
