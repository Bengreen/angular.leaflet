import {
    Component,
    Input,
    Optional,
    SimpleChanges,
} from '@angular/core';


import { LeafletMap } from './leaflet-map';

import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster.layersupport';

@Component({
    selector: 'marker-cluster',
    template: '',
})

export class MarkerCluster {
    @Input() options?: L.MarkerClusterGroupOptions;

    markerClusterGroupSupport: L.MarkerClusterGroupLayerSupport;

    constructor(
        private leafletMap: LeafletMap
        ) {

    }

    ngOnInit() {
        this.markerClusterGroupSupport = L.markerClusterGroup.layerSupport(this.options);
        this.markerClusterGroupSupport.addTo(this.leafletMap.map);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.markerClusterGroupSupport) {
            // TODO: Expand this out to handle the updates to the markerCluster
            console.error("TODO ngOnChanges for markerCluster", changes);
            throw new Error("ngChanges not implemented for MarkerCluster");
        }
    }
    ngOnDestroy() {
        this.markerClusterGroupSupport.removeFrom(this.leafletMap.map);
    }

}
