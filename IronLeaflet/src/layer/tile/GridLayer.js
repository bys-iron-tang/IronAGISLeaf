AGIS.GridLayer=AGIS.Layer.extend({
	options:{
		tileSize:256,
		opacity:1,
		panel:'titlePanel'
	},

	initialize:function(options){
		options=AGIS.setOptions(this,options);
	},

	isLoading:function(){
		return this._loading;
	},

	onAdd:function(){

	}

});

AGIS.gridLayer=function(options){
	return new AGIS.GridLayer(options);
};