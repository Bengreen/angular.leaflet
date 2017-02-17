import { NgModule } from '@angular/core';

import {
    LeafletMarker,
    LeafletLayer,
    LeafletMap,
    LeafletGroup,
    MarkerCluster,
} from './components';


@NgModule({
    imports: [
    ],
    providers: [

    ],
    declarations: [
        LeafletMarker,
        LeafletLayer,
        LeafletMap,
        LeafletGroup,
        MarkerCluster,
    ],
    exports: [
        LeafletMarker,
        LeafletLayer,
        LeafletMap,
        LeafletGroup,
        MarkerCluster,
    ]
})

export class LeafletModule { }
