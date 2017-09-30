AGIS.Evented=AGIS.Class.extend({
	on:function(types,fn,context){

		if(typeof types==='object'){
			for(var type in types){
				this._on(type,types[type],fn);
			}
		}else{
			types=AGIS.Util.splitWords(types);
			for(var i=0,len=types.length;i<len;i++){
				this._on(types[i],fn,context);
			}
		}

		return this;
	},

	// remove a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object.
	off:function(types,fn,context){
		if(!types){
			//clear all listerners if called without arguments.
			delete this._events;
		}else if(typeof types==='object'){
			for(var type in types){
				this._off(type,types[type],fn);
			}
		}else{
			types=AGIS.Util.splitWords(types);
			for(var i=0,len=types.length;i<len;i++){
				this._off(types[i],fn,context);
			}

		}

		return this;
	},

	_off:function(type,fn,context){
		var typeListeners,
			contextId,
			listeners,
			i,
			len;

		if(!this._events) {return;}

		if(!fn){
			// typeListeners=this._events[type];
			// if(typeListeners){
			// 	for(contextId in typeListeners.listerners)
			// }
		}

	}

	_on:function(type,fn,context){
		this._events=this._events||{};
		var typeListeners=this._events[type];
		if(!typeListeners){
			typeListeners={
				listeners:{},
				count:0
			};
			this._events[type]=typeListeners;
		}

		var contextId=context&&context!==this&&AGIS.stamp(context),
			newListener={fn:fn,ctx:context};

		 if(!contextId){
		 	contextId='no_context';
		 	newListener.ctx=undefined;
		 }	

		 var listeners=typeListeners.listeners[contextId];
		 if(!listeners){
		 	listeners=[];
		 	typeListeners.listeners[contextId]=listeners;
		 }

		 //check if fn already there
		 for(var i=0,len=listeners.length;i<len;i++){
		 	if(listeners[i].fn===fn){
		 		return;
		 	}
		 }

		 listeners.push(newListener);
		 typeListeners.count++;
	},


});

var proto=AGIS.Evented.prototype;
proto.addEventListener=proto.on;

AGIS.Mixin= {Events:proto};