AGIS.TileLayer= AGIS.GridLayer.extend({
	options:{
		minZoom:0,
		maxZoom:18,

		tms:false
	},

	initialize:function(url,options){
		this._url=url;
		options=AGIS.setOptions(options);
	},
});

AGIS.tileLayer=function(url,options){
	return new AGIS.TileLayer(url,options);
};