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
var LeafletLayer = (function () {
    function LeafletLayer(leafletMap) {
        this.leafletMap = leafletMap;
        this.enabled = true;
        console.log("constructor for TileLayer");
    }
    LeafletLayer.prototype.ngOnInit = function () {
        console.log("ngOnInit for tile-layer");
        this.tileLayer = L.tileLayer(this.urlTemplate, this.options);
        // this.leafletMap.addTo(this);
        if (this.enabled) {
            this.tileLayer.addTo(this.leafletMap.map);
        }
        if (this.base) {
            this.leafletMap.layerControl.addBaseLayer(this.tileLayer, this.name);
        }
        if (this.overlay) {
            this.leafletMap.layerControl.addOverlay(this.tileLayer, this.name);
        }
    };
    LeafletLayer.prototype.ngOnChanges = function (changes) {
        if (this.tileLayer) {
            // TODO: Expand this out to handle the updates to the markerCluster
            console.log("TODO ngOnChanges for ", changes);
            throw new Error("ngChanges not implemented for TileLayer");
        }
    };
    LeafletLayer.prototype.ngOnDestroy = function () {
        if (this.enabled) {
            this.leafletMap.layerControl.removeLayer(this.tileLayer);
        }
        if (this.base || this.overlay) {
            this.tileLayer.removeFrom(this.leafletMap.map);
        }
    };
    return LeafletLayer;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LeafletLayer.prototype, "urlTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LeafletLayer.prototype, "enabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LeafletLayer.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LeafletLayer.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LeafletLayer.prototype, "base", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LeafletLayer.prototype, "overlay", void 0);
LeafletLayer = __decorate([
    core_1.Component({
        selector: 'leaflet-layer',
        template: '',
    }),
    __metadata("design:paramtypes", [leaflet_map_1.LeafletMap])
], LeafletLayer);
exports.LeafletLayer = LeafletLayer;
;
//# sourceMappingURL=leaflet-layer.js.map