AGIS.GridLayer = AGIS.Layer.extend({
    options: {
        tileSize: 256,
        opacity: 1,
        panel: 'titlePanel'
    },

    initialize: function(options) {
        options = AGIS.setOptions(this, options);
    },

    isLoading: function() {
        return this._loading;
    },

    onAdd: function() {
        this._initContainer();
        this._levels = {};
        this._tiles = {};
        this._resetView();

        this._update();
    },

    _initContainer: function() {
        if (this._container) { return; }
        this._container = AGIS.DomUtil.create('div', 'agis-layer ' + (this.options.className || ''));

        //this._updateZIndex();

        this.getPanel().appendChild(this._container);

    },

    _resetView: function() {
        this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
    }

    _setView: function(center, zoom, noPrune, noUpdate) {
        // body...
        var tileZoom = Math.round(zoom);
        if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
            (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
            tileZoom = undefined;
        }

        this._tileZoom = tileZoom;
        this._updateLevels();
        this._resetGrid();
        if (tileZoom !== undefined) {
            this._update(center);
        }
        // if (!noPrune) {
        // 		this._pruneTiles();
        // 	}

        // 	// Flag to prevent _updateOpacity from pruning tiles during
        // 	// a zoom anim or a pinch gesture
        // this._noPrune = !!noPrune;
        this._setZoomTransforms(center, zoom);
    },

    _updateLevels: function() {
        var zoom = this._tileZoom;
        var maxZoom = this.options.maxZoom;
        if (zoom === undefined) { return undefined; }
        for (var z in this._levels) {
            if (this._levels[z].el.children.length || z === zoom) {
                this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
            } else {
                AGIS.DomUtil.remove(this._levels[z].el);
                // this._removeTilesAtZoom(z);
                // delete this._levels[z];
            }
        }

        var level = this._levels[zoom],
            map = this._map;

        if (!level) {
            level = this._levels[zoom] = {};
            level.el = AGIS.DomUtil.create('div', 'agis-tile-container agis-zoom-animated', this._container);
            level.el.style.zIndex = maxZoom;

            level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
            level.zoom = zoom;
            this._setZoomTransform(level, map.getCenter(), map.getZoom());

            // // force the browser to consider the newly added element for transition
            // L.Util.falseFn(level.el.offsetWidth);

        }
        this._level = level;

        return level;

    },

    _setZoomTransforms: function(center, zoom) {
        for (var i in this._levels) {
            this._setZoomTransform(this._levels[i], center, zoom);
        }
    },

    _setZoomTransform: function(level, center, zoom) {
        var scale = this._map.getZoomScale(zoom, level.zoom),

    }



});

AGIS.gridLayer = function(options) {
    return new AGIS.GridLayer(options);
};