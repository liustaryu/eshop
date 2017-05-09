/*setInterval(function(){
	console.log("haha");
},3000)	
 每隔多少毫秒输出*/


var btnBox = getClass('carousel-btns')[0];
var aBtns = btnBox.getElementsByTagName('li');
var aItem = getClass("carousel-item");
var oImgBox = getClass("carousel-imgs")[0];
var oCarousel = getClass("carousel")[0];
var iNow = 0;
var timer;


for(var i=0;i<aBtns.length;i++){
	aBtns[i].index = i;
	aBtns[i].onclick = function(){
		change(this.index);
		iNow = this.index;
	/*	for(var j=0;j<aBtns.length;j++){
			aBtns[j].className="";
		}
		oImgBox.style.left = -aItem[0].o ffsetWidth * this.index +"px";
		this.className="selected";*/
	}
}

	//setInterval(function(){
	//iNow++
	/*if(iNow==aBtns.length){
		iNow = 0;
	}*/
	//iNow = iNow%aBtns.length;
	//chang(iNow);
	/*for(i=0;i<aBtns.length;i++){
		aBtns[i].className="";
	}
	oImgBox.style.left = -aItem[0].offsetWidth * index +"px";
	aBtns[index].className="selected";*/
//},3000)

function change(idx){
	for(i=0;i<aBtns.length;i++){
		aBtns[i].className="";
	}
	/*animate(oImgBox,{
		left:-aItem[0].offsetWidth * idx
	});animate封装好的方法直接引用*/
	oImgBox.style.left = -aItem[0].offsetWidth * idx +"px";
	aBtns[idx].className = "selected";
}
oCarousel.onmouseover = function(){
	clearInterval(timer);
}
oCarousel.onmouseout = function(){
	run();
}
function run(){
	timer = setInterval(function(){
		iNow++;
	//iNow = iNow%aBtns.length;
		if(iNow==aBtns.length){
			iNow = 0;
		}	
		change(iNow);
	},2000)
}
run();