// 屏幕放大缩小
/*var cassEl=document.createElement("style");
	document.documentElement.firstElementChild.appendChild(cassEl);
	function setPxPerRem(){
		var dpr=1;
		var pxPerRem=document.documentElement.clientWidth*dpr/20;
		cassEl.innerHTML='html{font-size:'+pxPerRem+'px!important;}';
	}
	setPxPerRem();*/


var scroll = new IScroll("#wrapper",{
	mouseWheel:true,
	scrollbars:true
});
