/// <reference types="leaflet-markercluster" />
import { SimpleChanges } from '@angular/core';
import { LeafletMap } from './leaflet-map';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster.layersupport';
export declare class MarkerCluster {
    private leafletMap;
    options?: L.MarkerClusterGroupOptions;
    markerClusterGroupSupport: L.MarkerClusterGroupLayerSupport;
    constructor(leafletMap: LeafletMap);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
