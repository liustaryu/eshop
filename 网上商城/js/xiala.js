var aTbody = document.getElementsByTagName('tbody')[0];
var aTr = aTbody.getElementsByTagName('tr');
var aCheckBtn = getClass("checkbtn",aTbody);
var aTopBtn = document.getElementById('top-btn');
var aCheckAll = document.getElementById('checkAll');


for(i=0;i<aTr.length;i++){
	aTr[i].onclick = function(){
		var oCheck = this.getElementsByTagName("input")[0];
		if(this.className == "selected"){
			oCheck.checked = false;
			this.className = "";
		}else{
		oCheck.checked = true;
		this.className = "selected";	
		}
		var aSel = getClass('selected',aTbody);
		if(aSel.length == aTr.length){
			aCheckAll.checked = true;
		}else{
			aCheckAll.checked = false;
		}
	}
}
/*aCheckAll.onclick = function(){
	for(i=0;i<aTr.length;i++){
		if(aCheckAll.checked == true){
			aTr[i].className = "selected";
			aCheckBtn[i].checked = true;
		}else{
			aTr[i].className = "";
			aCheckBtn[i].checked = false;
		}
	}	
}*/


aTopBtn.onclick = function(e){
	/*if(aCheckAll.checked == true){
		aCheckAll.checked = false;
	}else{
		aCheckAll.checked = true;
	}*/
	var target = e.target || event.srcElement;
	if(target != aCheckAll){
		aCheckAll.checked = !aCheckAll.checked;
	}
	
	for(i=0;i<aTr.length;i++){
		if(aCheckAll.checked == true){
			aTr[i].className = "selected";
			aCheckBtn[i].checked = true;
		}else{
			aTr[i].className = "";
			aCheckBtn[i].checked = false;
		}
	}	
}