AGIS.Point=function(x,y,round){
	this.x=(round?Math.round(x):x);
	this.y=(round?Math.round(y):y);
};

AGIS.Point.prototype={
	clone:function(){
		return new AGIS.Point(this.x,this.y);
	},

	divideBy:function(num){
		return this.clone()._divideBy(num);
	},

	_divideBy:function(num){
		this.x/=num;
		this.y/=num;

		return this;
	}
};

AGIS.point=function(x,y,round){
	if(x instanceof AGIS.Point){
		return x;
	}

	return new AGIS.Point(x,y,round);
};