AGIS.DomUtil = {
    get: function(id) {
        return typeof id === 'string' ? document.getElementById(id) : id;
    },

    create:function(tagName,className,container){
    	var el=document.createElement(tagName);
    	el.className=className||'';

    	if(container){
    		container.appendChild(el);
    	}

    	return el;
    },

    setPosition:function(ele,point){
    	ele._agis_pos=point;
    	if(AGIS.Browser.any3d){
    		//Todo
    	}else{
    		ele.style.left=point.x+'px';
    		ele.style.top=point.y+'px';
    	}
    },

    addClass: function(ele, name) {
        if (ele.classList !== undefined) {
            var classes = AGIS.Util.splitWords(name);
            for (var i = 0, len = classes.length; i < len; i++) {
                ele.classList.add(classes[i]);
            }
        } else if (!AGIS.DomUtil.hasClass(ele, name)) {
        	var className=AGIS.DomUtil.getClass(ele);
        	AGIS.DomUtil.setClass(ele,(className ? className + ' ' : '') + name);
        }
    },

    setClass:function(ele,name){
    	if(ele.className.baseVal===undefined){
    		ele.className=name;
    	}else{
    		ele.className.baseVal=name;
    	}
    },

    hasClass: function(ele, name) {
        if (ele && ele.classList !== undefined) {
            return ele.classList.contain(name);
        }

        var className = AGIS.DomUtil.getClass(ele);
        return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
    },

    getClass: function(ele) {
        return ele.className.baseVal === undefined ? ele.className : ele.className.baseVal;
    },

    getStyle: function(el, style) {
        var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);
        if ((!value || value === 'auto') && document.defaultView) {
            var css = document.defaultView.getComputedStyle(el, null);
            value = css ? css[style] : null;
        }

        return value==='auto'?null:value;
    },

}