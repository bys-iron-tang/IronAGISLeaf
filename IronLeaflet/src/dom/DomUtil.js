AGIS.DomUtil={
	get:function(id){
		return typeof id==='string'?document.getElementById(id):id;
	},

	addClass:function(ele,name){
		if(ele.classList!==undefined){
			var classes=AGIS.Util.splitWords(name);
			for(var i=0,len=classes.length;i<len;i++){
				ele.classList.add(classes[i])
			}
		}else if(!AGIS.DomUtil.hasClass(ele,name)){

		}
	},

	hasClass:function(ele,name){
		if(ele&&ele.classList!==undefined){
			return ele.classList.contain(name);
		}

		var className=AGIS.DomUtil.getClass(ele);
		return className.length>0 && new RegExp('(^|\\s)'+name+'(\\s|$)').test(className);
	},

	getClass:function(ele){
		return ele.className.baseVal===undefined?ele.className:ele.className.baseVal;
	},

	getStyle:function(el,style){
		
	},

}