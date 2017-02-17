/// <reference types="leaflet" />
import { EventEmitter, SimpleChanges } from '@angular/core';
import { LeafletMap } from './leaflet-map';
import { MarkerCluster } from './marker-cluster';
import { LeafletGroup } from './leaflet-group';
import * as L from 'leaflet';
import 'leaflet.markercluster';
export declare class LeafletMarker {
    private leafletMap;
    private markerCluster;
    private layerGroup;
    latlng: L.LatLng;
    options?: L.MarkerOptions;
    click: EventEmitter<{}>;
    dblclick: EventEmitter<{}>;
    mousedown: EventEmitter<{}>;
    mouseover: EventEmitter<{}>;
    mouseout: EventEmitter<{}>;
    contextmenu: EventEmitter<{}>;
    marker: L.Marker;
    constructor(leafletMap: LeafletMap, markerCluster?: MarkerCluster, layerGroup?: LeafletGroup);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
