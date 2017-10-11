AGIS.Map = AGIS.Evented.extend({
    options: {
        crs: AGIS.CRS.EPSG3857,
        center: undefined,
        zoom: undefined,
        minZoom: undefined,
        maxZoom: undefined,
        layers: [],
        maxBounds: undefined,
        renderer: undefined
    },

    initialize: function(id, options) { //HTMLElement or String, Object
        options = AGIS.setOptions(this, options);
        this._initContainer(id);
        this._initLayout();
        this._initEvents();

        if (options.zoom !== undefined) {
            this._zoom = this._limitZoom(options.zoom);
        }

        this._layers = {};
        //call hooks
        this._addLayers(this.options.layers);
    },

    _initContainer: function(id) {
        var container = this._container = AGIS.DomUtil.get(id);
        if (!container) {
            throw new Error('Map container not found');
        } else if (container.isInitialized) {
            throw new Error('Map container is already initialized.');
        }

        container.isInitialized = true;
    },

    _initLayout: function() {
        var container = this._container;
        this._fadeAnimated = this.options.fadeAnimated && AGIS.Browser.any3d;
        AGIS.DomUtil.addClass(container, 'agis-container' +
            (AGIS.Browser.touch ? ' agis-touch' : '') +
            (AGIS.Browser.retina ? ' agis-retina' : '') +
            (AGIS.Browser.ielt9 ? ' agis-oldie' : '') +
            (AGIS.Browser.safari ? ' agis-safari' : '') +
            (this._fadeAnimated ? ' agis-fade-anim' : ''));

        var position = AGIS.DomUtil.getStyle(container, 'position');
        if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
            container.style.position = 'relative';
        }

        this._initPanes();

    },

    _initEvents: function(remove) {
        this._targets = {};
        this._targets[AGIS.stamp(this._container)] = this;
    },

    _limitZoom: function(zoom) {
        var min = this.getMinZoom(),
            max = this.getMaxZoom();
        return Math.max(min, Math.min(max, zoom));
    },

    getMinZoom: function() {
        return this.options.minZoom === undefined ? 0 : this.options.minZoom;
    },

    getMaxZoom: function() {
        return this.options.maxZoom === undefined ? 0 : this.options.maxZoom;
    },

    // _addLayers:function(layers){

    // },

    setView: function(center, zoom) {
        zoom = zoom === undefined ? this.getZoom() : zoom;
        this._resetView(AGIS.latLng(center), zoom);
        return this;
    },

    _resetView:function(center,zoom){
    	AGIS.DomUtil.setPosition(this._mapPanel,new AGIS.Point(0,0));

    	var loading = !this._loaded;
    	this._loaded = true;

    	zoom = this._limitZoom(zoom);

    	//todo add events
    },

    whenReady: function(callback, context) {
        if (this._loaded) {
            callback.call(context || this, { target: this });
        } else {
            this.on('load', callback, context);
        }

        return this;
    },

    _initPanes: function() {
        var panes = this._panels = {};
        this._panesRenderers = {};

        this._mapPanel = this.createPanel('mapPanel', this._container);
        AGIS.DomUtil.setPosition(this._mapPanel, new AGIS.Point(0, 0));

        // Panel for GridLayer and TileLayer
        this.createPanel('titlePanel');

        // panel for vector overlayers, such as polyline and polygon
        this.createPanel('shadowPanel');

        //panel for overlay shadow, such as Marker shadow
        this.createPanel('overlayPanel');

        //panel for icon and marker
        this.createPanel('markerPanel');

        //panel for tooltip
        this.createPanel('tooltipPanel');

        //panel for popup
        this.createPanel('popupPanel');

    },

    createPanel: function(name, container) {
        var className = 'agis-panel' + (name ? ' agis-' + name.replace('Panel', '') + '-panel' : '');
        var panel = AGIS.DomUtil.create('div', className, container || this._mapPanel);

        if (name) {
            this._panels[name] = panel;
        }

        return panel;
    },

});

AGIS.map = function(id, options) {
    return new AGIS.Map(id, options);
};