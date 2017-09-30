AGIS.Map=AGIS.Evented.extend({
	options:{
		crs:AGIS.CRS.EPSG3857,
		center:undefined,
		zoom:undefined,
		minZoom:undefined,
		maxZoom:undefined,
		layers:[],
		maxBounds:undefined,
		renderer:undefined
	},

	initialize:function(id,options) {//HTMLElement or String, Object
		options=AGIS.setOptions(this,options);
		this._initContainer(id);
		this._initLayout();
		this._initEvents();
	},

	_initContainer:function(id){
		var container=this._contianer=AGIS.DomUtil.get(id);
		if(!container){
			throw new Error('Map container not found');
		}else if(container.isInitialzed){
			throw new Error('Map container is already initialized.');
		}

		container.isInitialized=true;
	},

	_initLayout:function(){
		var container=this._contianer;
		this._fadeAnimated=this.options.fadeAnimated&& AGIS.Browser.any3d;
		AGIS.DomUtil.addClass(container,'agis-container'+
			(AGIS.Browser.touch ? ' agis-touch':'')+
			(AGIS.Browser.retina ? ' agis-retina':'')+
			(AGIS.Browser.ielt9 ? ' agis-oldie':'')+
			(AGIS.Browser.safari ? ' agis-safari':'')+
			(this._fadeAnimated ? ' agis-fade-anim':''));

		var position=AGIS.DomUtil.getStyle(container,'position');
		
	},

});

AGIS.map=function(id,options){
	return new AGIS.Map(id,options);
};