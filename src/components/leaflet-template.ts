import {
    Component,
    Input,
    Optional,
    SimpleChanges
} from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
    selector: 'marker-template',
    template: '',
})

export class LeafletTemplate {


    constructor(
        ) {

        console.log("constructor for");

    }

    ngOnInit() {

        console.log("ngOnInit for");
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.clusterGroup) {
            // TODO: Expand this out to handle the updates to the markerCluster
            console.log("TODO ngOnChanges for ", changes);
            throw new Error("ngChanges not implemented for MarkerCluster");
        }
    }
    ngOnDestroy() {
        console.log("Destroy for ");
        // map.removeLayers(this.clusterGroup);
    }


};
