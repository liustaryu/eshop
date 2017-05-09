var aTbody = document.getElementsByTagName('tbody')[0];
var aTr = aTbody.getElementsByTagName('tr');
var oCheckAll = document.getElementById('checkAll');
var aCheckBtn = getClass("checkbtn",aTbody);
var oTopBtn = document.getElementById('top-btn');

for(i=0;i<aTr.length;i++){
	aTr[i].onclick = function(){
		var oCheck = this.getElementsByTagName('input')[0];
		if(this.className =="selected"){
			this.className = "";
			oCheck.checked= false;
		}else{
			this.className = "selected";
			//var oCheck = this.getElementsByTagName('input')[0];
			oCheck.checked= true;
		}
		var aCheckTr = getClass("selected",aTbody);
		if(aCheckTr.length == aTr.length){
			oCheckAll.checked = true;
		}else{
			oCheckAll.checked = false;
		}

	}
}
/*oCheckAll.onclick = function(){
	//console.log("this.checked");第一次true,第二次fasle;
	for(i=0;i<aTr.length;i++){
		if(this.checked == true){
			aTr[i].className = "selected";
		}else{
			aTr[i].className = "";	
		}
		aCheckBtn[i].checked = this.checked;
	}
}*/

oTopBtn.onclick = function(e){
	var target = e.target || event.srcElement;
	if(e.target != oCheckAll){
		oCheckAll.checked = !oCheckAll.checked;
	}
	for(i=0;i<aTr.length;i++){
	if(oCheckAll.checked == true){
		aTr[i].className = "selected";
	}else{
		aTr[i].className = "";	
	}
	aCheckBtn[i].checked = oCheckAll.checked;
	}
}
