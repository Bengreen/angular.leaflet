"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var leaflet_map_1 = require("./leaflet-map");
var L = require("leaflet");
require("leaflet.markercluster");
require("leaflet.markercluster.layersupport");
var MarkerCluster = (function () {
    function MarkerCluster(leafletMap) {
        this.leafletMap = leafletMap;
    }
    MarkerCluster.prototype.ngOnInit = function () {
        this.markerClusterGroupSupport = L.markerClusterGroup.layerSupport(this.options);
        this.markerClusterGroupSupport.addTo(this.leafletMap.map);
    };
    MarkerCluster.prototype.ngOnChanges = function (changes) {
        if (this.markerClusterGroupSupport) {
            // TODO: Expand this out to handle the updates to the markerCluster
            console.error("TODO ngOnChanges for markerCluster", changes);
            throw new Error("ngChanges not implemented for MarkerCluster");
        }
    };
    MarkerCluster.prototype.ngOnDestroy = function () {
        this.markerClusterGroupSupport.removeFrom(this.leafletMap.map);
    };
    return MarkerCluster;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MarkerCluster.prototype, "options", void 0);
MarkerCluster = __decorate([
    core_1.Component({
        selector: 'marker-cluster',
        template: '',
    }),
    __metadata("design:paramtypes", [leaflet_map_1.LeafletMap])
], MarkerCluster);
exports.MarkerCluster = MarkerCluster;
//# sourceMappingURL=marker-cluster.js.map