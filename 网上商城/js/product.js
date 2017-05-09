var oTabBox = document.getElementById('tab-box'),
	aLi = oTabBox.getElementsByTagName('li'),
	aDiv = getClass("tab-item",oTabBox);
	for(i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].onclick = function(){
			for(j=0;j<aDiv.length;j++){
				aDiv[j].style.display = "none";
				aLi[j].className = "";
			}
			this.className = "active";
			aDiv[this.index].style.display = "block";
		}
	}
var oOption = document.getElementById("option");
var aUl = oOption.getElementsByTagName('ul')[0];
var oP = oOption.getElementsByTagName('p')[0];
var aBtn = getClass("sel-btn")[0];
var aLi2 = oOption.getElementsByTagName('li');
var oSpan = oOption.getElementsByTagName('span');


aBtn.onmousedown=function(){
	aBtn.className= "sel-btn selected";
	oP.style.color="#fff"
}

aBtn.onmouseup=function(){
	if(aUl.style.display=="none" || aUl.style.display==""/*第一次内联取到空*/){
		aUl.style.display = "block";
	}else{
		aUl.style.display = "none";
	}
	oP.style.color = "#000"
	aBtn.className = "sel-btn";

}


for(var i=0;i<aLi2.length;i++){
	aLi2[i].onclick = function(){
		oP.innerHTML = this.innerHTML;
		aUl.style.display = "none";
		
	}
}
//e.target事件源,点谁就是谁;
//事件处理函数
//事件
document.body.onclick = function(e){
	var target = e.target || event.srcElement;
	//target兼容性
	if(target !=aBtn && target !=oP && target !=oSpan){
		aUl.style.display = "none";
	}
}


/*弹层开始*/
var oSmallImg = getClass("small-img")[0];
var aDialogLi = oSmallImg.getElementsByTagName('li');
var oDialogBox = getClass("dialog-box")[0];
var oDialogBody = getClass("dialog-body")[0];
var oDialogImg = oDialogBody.getElementsByTagName('img')[0];
var oDialogClose = getClass("dialog-close",oDialogBox)[0];
var oDialogPrev = getClass("dialog-prev",oDialogBox)[0];
var oDialogNext = getClass("dialog-next",oDialogBox)[0];
var oSlidesBtn = getClass("slides-btn",oDialogBox)[0];
var oContent = getClass("content",oDialogBox)[0];
var iNow = 0;

for(var i=0;i<aDialogLi.length;i++){
	aDialogLi[i].index = i;
	aDialogLi[i].onclick = function(){
		var oImg = this.getElementsByTagName('img')[0];
		oDialogBox.style.display = "block";
		oContent.style.animation = "show 1s ease forwards";
		oDialogImg.src = oImg.src;
		iNow = this.index;
	}
}
//关闭弹层
oDialogBox.onclick = function(e){
	var target = e.target || event.srcElement;
	if(target == oDialogBox || target == oDialogClose){
		oDialogBox.style.display = "none";

	}
}
oDialogPrev.onclick = function(){
	iNow--;
	if(iNow == -1){
		iNow = aDialogLi.length-1;
	}
	//var prevLi = aDialogLi[iNow];
	//oDialogImg.src = prevLi.getElementsByTagName('img')[0].src;
	slidesNext();
}

oDialogNext.onclick = function(){
	iNow++;
	iNow = iNow%aDialogLi.length;
	/*if(iNow == aDialogLi.length){
		iNow = 0;
	}*/
	//var nextLi = aDialogLi[iNow];
	//oDialogImg.src = nextLi.getElementsByTagName('img')[0].src;
	slidesNext();
}
function slidesNext(){
	//取到下一个li
	var nextLi = aDialogLi[iNow];
	//取到下一个li里的图片的src属性
	var nextSrc = nextLi.getElementsByTagName('img')[0].src;
	//创建一个新的img
	var oImg = document.createElement("img");
	oImg.src = nextSrc;
	//获取到原有图片
	var oldImg = oDialogBody.children[0];
	//插入一张新图,在原有图片之前,后一张优先级更高
	oDialogBody.insertBefore(oImg,oldImg);
	//原有图片动画隐藏
	oldImg.style.animation = 'hide 1s ease forwards';
	//隐藏后 remove掉
	setTimeout(function(){
		oDialogBody.removeChild(oldImg);
	},1000)
}

var timer = "";
oSlidesBtn.onclick = function(){
	if(timer){
		clearInterval(timer);
		timer = "";
	}else{
		timer = setInterval(function(){
			oDialogNext.onclick();
		},1000)
	}
}


