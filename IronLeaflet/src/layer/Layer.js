AGIS.Map.include({
    addLayer: function(layer) {
        var id = AGIS.stamp(layer);
        if (this._layers[id]) { return this; }

        this._layers[id] = layer;
        layer._mapToAdd = this;

        if (layer.beforeAdd) {

        }

        this.whenReady(layer._layerAdd, layer);

        return this;
    },

    _addLayer: function(layers) {
        layers = layers ? (AGIS.Util.isArray(layers) ? layers : [layers]) : [];

        for(var i=0,len=layers.length;i<len;i++){
        	this.addLayer(layers[i]);
        }
    }
});