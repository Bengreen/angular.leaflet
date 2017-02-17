import {
    Component,
    Input,
    Optional,
    SimpleChanges,
    ViewChild,
    ElementRef,
} from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
    selector: 'leaflet-map',
    template: `
        <div class="page-background map-container" layout-padding>
        	<div #map></div>
        </div>`,
})

export class LeafletMap {
    @ViewChild('map') mapElement: ElementRef;

    @Input() options?: L.MapOptions;


    map: L.Map;
    layerControl: L.Control.Layers;


    constructor(
        ) {

    }

    ngOnInit() {
        this.map = L.map(this.mapElement.nativeElement, this.options);
        this.layerControl = L.control.layers({}, {});
        this.map.addControl(this.layerControl);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.map) {
            // TODO: Expand this out to handle the updates to the markerCluster
            console.error("TODO ngOnChanges for ", changes);
            throw new Error("ngChanges not implemented for LeafletMap");
        }
    }

    ngOnDestroy() {
        this.map.removeControl(this.layerControl);
    }


};
