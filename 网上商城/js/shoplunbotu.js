var aCar = getClass("carousel")[0];
var aCarImgs = getClass("carousel-imgs",aCar)[0];
var aCarItem = getClass("carousel-item",aCar);
var aUl = getClass("carousel-btns")[0];
var aLi = aUl.getElementsByTagName('li');
var iNow = 0;
var timer;

for(i=0;i<aLi.length;i++){
	aLi[i].index = i;
	aLi[i].onclick = function(){
	change(this.index);
	iNow = this.index;
	}
}
function change(idx){
	for(i=0;i<aLi.length;i++){
			aLi[i].className = "";
		}
		aLi[idx].className = "selected";
		aCarImgs.style.left=-aCarItem[0].offsetWidth*idx+"px";
}
function run(){
	timer = setInterval(function(){
		iNow++;
		iNow = iNow%aLi.length;
		change(iNow);
	},2000) 
}
run();
aCar.onmouseover = function(){
	clearInterval(timer);
}
aCar.onmouseout = function(){
	run();
}