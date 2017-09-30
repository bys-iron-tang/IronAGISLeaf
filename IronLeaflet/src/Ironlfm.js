
var AGIS={
	version:'1.0.0'
};

function expose(){
	var oldAGIS=window.AGIS;
	AGIS.noConflict=function(){
		window.AGIS=oladAGIS;
		return this;
	};

	window.AGIS=AGIS;
};

//define for Node module
if(typeof module==='object'&&typeof module.exports==='object'){
	module.exports=AGIS;
}else if(){
	define(AGIS);
};

// define AGIS as a global L variable, saving the original L to restore later if needed
if(typeof window !=='undefined'){
	expose();
}