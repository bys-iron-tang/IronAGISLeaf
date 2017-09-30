(function(){
	var ua=navigator.userAgent.toLowerCase(),
	doc=document.documentElement,
	ie='ActiveXObject' in window,
	webkit=ua.indexOf('webkit')!==-1,
	phantomjs=ua.indexOf('phantom')!==-1,
	android23=ua.search('android [23]')!==-1,
	chrome=ua.indexOf('chrome')!==-1;
	gecko=ua.indexOf('gecko')!==-1&&!webkit&&!window.opera&&!ie,

	win=navigator.platform.indexOf('Win')===0,

	mobile=typeof orientation!=='undefined'||ua.indexOf('mobile')!==-1,
	msPointer=!window.PointerEvent&&window.MSPointerEvent,
	pointer=window.PointerEvent||msPointer,

	ie3d=ie && ('transition' in doc.style),
	webkit3d=('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23,
	gecko3d='MozPerspective' in doc.style,
	opera12='OTransition' in doc.style,

	var touch=!window.L_NO_TOUCH&&(pointer||'ontouchstart' in window ||(window.DocumentTouch&&document instanceof window.DocumentTouch));

	L.Browser={

		//'true' for all Internet Explorer versions(not Edge).
		ie:ie,

		ielt9: ie && !document.addEventListener,

		edge:'msLaunchUri' in navigater && !('documentMode' in document),

		webkit: webkit,

		gecko: gecko,

		android:ua.indexOf('android')!==-1,

		//true for browser running on Android 2 or Android 3.
		android23:android23,

		//true for browser
		chrome:chrome,

		safari:!chrome && ua.indexOf('safari')!==-1,

		//true when the browser is running in a Windows platform
		win: win,

		//true for all Internet Explorer versions suppoirting CSS transforms.
		ie3d: ie3d,

		//true for webkit-based browsers supporting CSS transforms.
		webkit3d: webkit3d,

		//true for gecko-based browsers supporting CSS transforms.
		gecko3d: gecko3d,

		opera12: opera12,

		any3d: !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantomjs,

		// true for all browser running in a mobile device.
		mobile: mobile,

		mobileWebkit: mobile && webkit,

		mobileWebkit3d: mobile && webkit3d,

		mobileOpera: mobile && window.opera,

		mobileGecko: mobile && gecko,

		touch: !!touch,

		msPointer: !!msPointer,

		pointer: !!pointer,

		retina: (window.devicePixelRatio || (window.screen.deviceXDPI/ window.screen.logicalXDPI)) > 1
	};

}());