var eventsKey='_ironGIS_events';
AGIS.DomEvent={
	on:function(obj,types,fn,context){
		if(typeof types==='object'){
			for(var type in types){
				this._on(obj,type,types[type],fn);
			}
		}else {
			types=AGIS.Util.splitWords(types);
			for(var i=0, len=types.length;i<len;i++){
				this._on(obj,types[i],fn,context);
			}
		}

		return this;
	},

	_on:function(obj,type,fn,context){
		var id=type+AGIS.stamp(fn);
	},

}