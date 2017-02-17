import {
    Component,
    Input,
    Optional,
    SimpleChanges
} from '@angular/core';

import {
    LeafletMap,
} from './index';

import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
    selector: 'leaflet-group',
    template: '',
})

export class LeafletGroup {
    @Input() name?: string;

    layerGroup: L.LayerGroup;

    constructor(
        private leafletMap: LeafletMap,
        ) {

    }

    ngOnInit() {
        this.layerGroup = L.layerGroup([]);

        this.layerGroup.addTo(this.leafletMap.map);
        this.leafletMap.layerControl.addOverlay(this.layerGroup,this.name);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.layerGroup) {
            // TODO: Expand this out to handle the updates to the markerCluster
            console.error("TODO ngOnChanges for LeafletGroup", changes);
            throw new Error("ngChanges not implemented for LeafletGroup");
        }
    }
    ngOnDestroy() {
        this.leafletMap.layerControl.removeLayer(this.layerGroup);
        this.layerGroup.removeFrom(this.leafletMap.map);
    }

};
