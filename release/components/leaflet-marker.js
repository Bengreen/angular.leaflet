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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var leaflet_map_1 = require("./leaflet-map");
var marker_cluster_1 = require("./marker-cluster");
var leaflet_group_1 = require("./leaflet-group");
var L = require("leaflet");
require("leaflet.markercluster");
var LeafletMarker = (function () {
    function LeafletMarker(leafletMap, markerCluster, layerGroup) {
        this.leafletMap = leafletMap;
        this.markerCluster = markerCluster;
        this.layerGroup = layerGroup;
        this.click = new core_1.EventEmitter();
        this.dblclick = new core_1.EventEmitter();
        this.mousedown = new core_1.EventEmitter();
        this.mouseover = new core_1.EventEmitter();
        this.mouseout = new core_1.EventEmitter();
        this.contextmenu = new core_1.EventEmitter();
    }
    LeafletMarker.prototype.ngOnInit = function () {
        var _this = this;
        this.marker = L.marker(this.latlng, this.options);
        this.marker.on({
            'click': function (event) { return _this.click.emit(event); },
            'dblclick': function (event) { return _this.dblclick.emit(event); },
            'mousedown': function (event) { return _this.mousedown.emit(event); },
            'mouseover': function (event) { return _this.mouseover.emit(event); },
            'mouseout': function (event) { return _this.mouseout.emit(event); },
            'contextmenu': function (event) { return _this.contextmenu.emit(event); },
        });
        if (this.markerCluster) {
            this.markerCluster.markerClusterGroupSupport.addLayer(this.marker);
        }
        if (this.layerGroup) {
            this.layerGroup.layerGroup.addLayer(this.marker);
        }
        else {
            //This is a catch all since the leafletMap is a required element of the component
            this.leafletMap.map.addLayer(this.marker);
        }
    };
    LeafletMarker.prototype.ngOnChanges = function (changes) {
        if (this.marker) {
            // TODO: Expand this out to handle the updates to the markerCluster
            console.error("TODO ngOnChanges for ", changes);
            throw new Error("ngChanges not implemented for Marker");
        }
    };
    LeafletMarker.prototype.ngOnDestroy = function () {
        if (this.markerCluster) {
            this.markerCluster.markerClusterGroupSupport.removeLayer(this.marker);
        }
        if (this.layerGroup) {
            this.layerGroup.layerGroup.removeLayer(this.marker);
        }
        else {
            //This is a catch all since the leafletMap is a required element of the component
            this.leafletMap.map.removeLayer(this.marker);
        }
    };
    return LeafletMarker;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LeafletMarker.prototype, "latlng", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LeafletMarker.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LeafletMarker.prototype, "click", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LeafletMarker.prototype, "dblclick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LeafletMarker.prototype, "mousedown", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LeafletMarker.prototype, "mouseover", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LeafletMarker.prototype, "mouseout", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LeafletMarker.prototype, "contextmenu", void 0);
LeafletMarker = __decorate([
    core_1.Component({
        selector: 'leaflet-marker',
        template: '',
    }),
    __param(1, core_1.Optional()),
    __param(2, core_1.Optional()),
    __metadata("design:paramtypes", [leaflet_map_1.LeafletMap,
        marker_cluster_1.MarkerCluster,
        leaflet_group_1.LeafletGroup])
], LeafletMarker);
exports.LeafletMarker = LeafletMarker;
;
//# sourceMappingURL=leaflet-marker.js.map