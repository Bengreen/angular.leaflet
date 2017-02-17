declare namespace L {

    export interface MarkerClusterGroupLayerSupport extends MarkerClusterGroup {
        checkIn(layers: Layer[]): this;
        checkOut(layers: Layer[]): this;
        addLayers(layers: Layer[]): this;
        removeLayers(layers: Layer[]): this;
        clearLayers(): this;
    }
    namespace markerClusterGroup {
        export function layerSupport(options?: MarkerClusterGroupOptions): L.MarkerClusterGroupLayerSupport;
    }
}
