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
var L = require("leaflet");
require("leaflet.markercluster");
var LeafletMap = (function () {
    function LeafletMap() {
    }
    LeafletMap.prototype.ngOnInit = function () {
        this.map = L.map(this.mapElement.nativeElement, this.options);
        this.layerControl = L.control.layers({}, {});
        this.map.addControl(this.layerControl);
    };
    LeafletMap.prototype.ngOnChanges = function (changes) {
        if (this.map) {
            // TODO: Expand this out to handle the updates to the markerCluster
            console.error("TODO ngOnChanges for ", changes);
            throw new Error("ngChanges not implemented for LeafletMap");
        }
    };
    LeafletMap.prototype.ngOnDestroy = function () {
        this.map.removeControl(this.layerControl);
    };
    return LeafletMap;
}());
__decorate([
    core_1.ViewChild('map'),
    __metadata("design:type", core_1.ElementRef)
], LeafletMap.prototype, "mapElement", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LeafletMap.prototype, "options", void 0);
LeafletMap = __decorate([
    core_1.Component({
        selector: 'leaflet-map',
        template: "\n        <div class=\"page-background map-container\" layout-padding>\n        \t<div #map></div>\n        </div>",
    }),
    __metadata("design:paramtypes", [])
], LeafletMap);
exports.LeafletMap = LeafletMap;
;
//# sourceMappingURL=leaflet-map.js.map