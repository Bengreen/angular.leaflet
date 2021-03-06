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
    @Input() revertDrag: boolean = true;

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

        if (this.revertDrag) {
            this.marker.on({
                'moveend': event => {
                    this.marker.setLatLng(this.latlng);
                }
            });
        }

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
        if (this.marker) {
            if (latlngChange) {
                this.marker.setLatLng(latlngChange.currentValue);
            }
            if (optionsChange) {
                this.marker.setIcon(optionsChange.currentValue['icon']);
            }
        }
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
