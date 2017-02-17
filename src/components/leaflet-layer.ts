import {
    Component,
    Input,
    Optional,
    SimpleChanges
} from '@angular/core';

import {
    LeafletMap,
} from './leaflet-map';

import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
    selector: 'leaflet-layer',
    template: '',
})

export class LeafletLayer {
    @Input() urlTemplate: string;
    @Input() enabled: boolean = true;
    @Input() options?: L.TileLayerOptions;
    @Input() name?: string;
    @Input() base?: boolean;
    @Input() overlay?: boolean;

    tileLayer: L.TileLayer;

    constructor(
        private leafletMap: LeafletMap,
        ) {

        console.log("constructor for TileLayer");

    }

    ngOnInit() {

        console.log("ngOnInit for tile-layer");
        this.tileLayer = L.tileLayer(this.urlTemplate, this.options);
        // this.leafletMap.addTo(this);
        if (this.enabled) {
            this.tileLayer.addTo(this.leafletMap.map);
        }

        if (this.base) {
            this.leafletMap.layerControl.addBaseLayer(this.tileLayer,this.name);
        }
        if (this.overlay) {
            this.leafletMap.layerControl.addOverlay(this.tileLayer,this.name);
        }
    }


    ngOnChanges(changes: SimpleChanges) {
        if (this.tileLayer) {
            // TODO: Expand this out to handle the updates to the markerCluster
            console.log("TODO ngOnChanges for ", changes);
            throw new Error("ngChanges not implemented for TileLayer");
        }
    }
    ngOnDestroy() {
        if (this.enabled) {
            this.leafletMap.layerControl.removeLayer(this.tileLayer);
        }
        if (this.base || this.overlay) {
            this.tileLayer.removeFrom(this.leafletMap.map);
        }
    }

};
