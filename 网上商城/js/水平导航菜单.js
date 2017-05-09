function getClass(cls,context){
var result = [];
	context = context || document;
	var arr = context.getElementsByTagName("*");
	for(var i=0;i<arr.length;i++){
		if(arr[i].className.indexOf(cls) != -1){
			result.push(arr[i]); 
		}
	}
	return result;
}

var oMenuBox = document.getElementById('menu-box');
var aLi = getClass("menu-btn",oMenuBox);
var aUl= getClass("sub-menu",oMenuBox);

/*for(i=0;i<aLi.length;i++){
	aLi[i].index = i;
	aLi[i].onmouseover = function(){
		aUl[this.index].style.display="block";
	}
	aLi[i].onmouseout = function(){
		aUl[this.index].style.display="";
	}
}*/