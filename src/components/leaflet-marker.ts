import {
    Component,
    Input,
    Output,
    EventEmitter,
    Optional,
    SimpleChanges,
} from '@angular/core';

import { LeafletMap } from './leaflet-map';
import { MarkerCluster } from './marker-cluster';
import { LeafletGroup } from './leaflet-group';

import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
    selector: 'leaflet-marker',
    template: '',
})

export class LeafletMarker {
    @Input() latlng: L.LatLng;
    @Input() options?: L.MarkerOptions;

    @Output() click = new EventEmitter();
    @Output() dblclick = new EventEmitter();
    @Output() mousedown = new EventEmitter();
    @Output() mouseover = new EventEmitter();
    @Output() mouseout = new EventEmitter();
    @Output() contextmenu = new EventEmitter();

    marker: L.Marker;

    constructor(
        private leafletMap: LeafletMap,
        @Optional() private markerCluster?: MarkerCluster,
        @Optional() private layerGroup?: LeafletGroup,
        ) {

    }

    ngOnInit() {

        this.marker = L.marker(this.latlng, this.options);

        this.marker.on({
            'click': event => this.click.emit(event),
            'dblclick': event => this.dblclick.emit(event),
            'mousedown': event => this.mousedown.emit(event),
            'mouseover': event => this.mouseover.emit(event),
            'mouseout': event => this.mouseout.emit(event),
            'contextmenu': event => this.contextmenu.emit(event),
        });

        if (this.markerCluster) {
            this.markerCluster.markerClusterGroupSupport.addLayer(this.marker);
        }

        if (this.layerGroup) {
            this.layerGroup.layerGroup.addLayer(this.marker);

        }  else {
            //This is a catch all since the leafletMap is a required element of the component
            this.leafletMap.map.addLayer(this.marker);
        }
    }


    ngOnChanges(changes: SimpleChanges) {
        // Update the marker
        const latlngChange = changes['latlng'];
        const optionsChange = changes['options'];
        this.marker = L.marker(latlngChange.currentValue, optionsChange.currentValue);
        // TODO: Expand this out to handle the updates to the markerCluster
    }
    ngOnDestroy() {
        if (this.markerCluster) {
            this.markerCluster.markerClusterGroupSupport.removeLayer(this.marker);
        }
        if (this.layerGroup) {
            this.layerGroup.layerGroup.removeLayer(this.marker);

        }  else {
            //This is a catch all since the leafletMap is a required element of the component
            this.leafletMap.map.removeLayer(this.marker);
        }

    }

};
