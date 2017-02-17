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
var index_1 = require("./index");
var L = require("leaflet");
require("leaflet.markercluster");
var LeafletGroup = (function () {
    function LeafletGroup(leafletMap) {
        this.leafletMap = leafletMap;
    }
    LeafletGroup.prototype.ngOnInit = function () {
        this.layerGroup = L.layerGroup([]);
        this.layerGroup.addTo(this.leafletMap.map);
        this.leafletMap.layerControl.addOverlay(this.layerGroup, this.name);
    };
    LeafletGroup.prototype.ngOnChanges = function (changes) {
        if (this.layerGroup) {
            // TODO: Expand this out to handle the updates to the markerCluster
            console.error("TODO ngOnChanges for LeafletGroup", changes);
            throw new Error("ngChanges not implemented for LeafletGroup");
        }
    };
    LeafletGroup.prototype.ngOnDestroy = function () {
        this.leafletMap.layerControl.removeLayer(this.layerGroup);
        this.layerGroup.removeFrom(this.leafletMap.map);
    };
    return LeafletGroup;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LeafletGroup.prototype, "name", void 0);
LeafletGroup = __decorate([
    core_1.Component({
        selector: 'leaflet-group',
        template: '',
    }),
    __metadata("design:paramtypes", [index_1.LeafletMap])
], LeafletGroup);
exports.LeafletGroup = LeafletGroup;
;
//# sourceMappingURL=leaflet-group.js.map