AGIS.Util={

    //Merges the properties of the 'src' object (or multiple objects) into 'dest' object and the latter. Has an 'AGIS.extend' shortcut
	extend:function(dest){
		var i, j, len,src;
		for(j=1,len=arguments.length;j<len;j++){
			src=arguments[j];
			for(i in src){
				dest[i]=src[i];
			}
		}

		return dest;
	},

	trim:function(str){
		return str.trim?str.trim():str.replace(/^\s+|\s+$/g,'');
	},

	stamp:function(obj){
		obj.AGIS_Id=object._AGIS_Id||++AGIS.Util.lastId;
		return obj.AGIS_Id
	},

	splitWords:function(str){
		return AGIS.Util.trim(str).split(/\s+/);
	},

	bind:function(fn,obj){
		var slice=Array.prototype.slice;
		if(fn.bind){
			return fn.bind.apply(fn,slice.call(arguments,1));
		}

		var args=slice.call(arguments,2);

		return function(){
			return fn.apply(obj,args.length?args.concat(slice.call(arguments)):arguments.length);
		};
	},

	falseFn:function(){
		return false;
	},

	lastId:0,

	setOptions:function(obj,options){
		if(!obj.hasOwnProperty('options')){
			obj.options=obj.options? AGIS.Util.create(obj.options):{};
		}
		for(var i in options){
			obj.options[i]=options[i];
		}

		return obj.options;
	},


	//@function create(proto: Object, properties?:Object) :Object
	//Compatibility polyfill for [Object.create] (https://developer.mozilla.org/docs/Web/JavasScript/Reference/Global_Objects/Object/create)
	create:Object.create||(function(){
		function F(){}
		return function(proto){
			F.prototype=proto;
			return new F();
		};
	})(),
};

AGIS.extend=AGIS.Util.extend;
AGIS.bind=AGIS.Util.bind;
AGIS.stamp=AGIS.Util.stamp;
AGIS.setOptions=AGIS.Util.setOptions;