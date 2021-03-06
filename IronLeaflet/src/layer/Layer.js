AGIS.Layer = AGIS.Evented.extend({
    options: {
        panel: 'overlayerPanel'
    },

    addTo: function(map) {
        map.addLayer(this);
        return this;
    },

    _layerAdd: function(e) {
        var map = e.target;

        this._map = map;

        //add events
        this.onAdd(this);

    },

    getPanel: function(name) {
        return this._map.getPanel(name ? (this.options[name] || name) : this.options.panel);
    }

});


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

        for (var i = 0, len = layers.length; i < len; i++) {
            this.addLayer(layers[i]);
        }
    }
});