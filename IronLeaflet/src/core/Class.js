
AGIS.Class=function(){};
AGIS.Class.extend=function(props){

	//寄生组合式继承，为的解决在指定子类型原型时候调用父类型构造函数的问题
	var NewClass=function(){
		//call the constructor
		if(this.initialize){
			this.initialize.apply(this,arguments);
		}

		// call all constructor hooks
		this.callInitHooks();
	};

	var parentProto=NewClass.__super__=this.prototype;
	//实现实例继承，获取超类型的一个副本
	var proto=AGIS.Util.create(parentProto);
    //重新指定proto实例的constructor属性
	proto.constructor=NewClass;
	//将创建的对象赋值给子类型的原型
	NewClass.prototype=proto;

	//继承父类的static 属性
	for(var i in this){
		if(this.hasOwnProperty(i)&&i!=='prototype'){
			NewClass[i]=this[i];
		}
	}

	AGIS.extend(proto,props);

	proto._initHooks=[];

	//add method for calling all hooks
	proto.callInitHooks=function(){
		if(this._initHookCalled){return;}
		if(parentProto.callInitHooks){
			parentProto.callInitHooks.call(this);
		}

		this._initHookCalled=true;

		for(var i=0;len=proto._initHooks.length;i<len;i++){
			proto._initHooks[i].call(this);
		}
	};

	return NewClass;
};

AGIS.Class.addInitHook=function(fn){
	var args=Array.prototype.slice.call(arguments,1);
	var init=typeof fn==='function'?fn:function(){
		this[fn].apply(this,args);
	};

	this.prototype._initHooks=this.prototype._initHooks||[];
	this.prototype._initHooks.push(init);
	return this;
};

AGIS.Class.mergeOptions=function(options){
	AGIS.extend(this.prototype.options,options);
	return this;
};

