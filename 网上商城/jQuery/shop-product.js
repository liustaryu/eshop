var $selBtn=$(".sel-btn");
var $selMenu=$(".sel-menu");

$selBtn.on("mousedown",function(){
	$(this).addClass(" selected");
})
$selBtn.on("mouseup",function(){
	$(this).removeClass(" selected");
	$selMenu.toggle();
})
/*$selBtn.on("click",function(){
	$selMenu.toggle();
})*/
$("li",$selMenu).on("click",function(){
	$("p",$selBtn).html($(this).html());
	$selMenu.hide();
})
$(document).on("click",function(e){
	if(e.target!=$("p",$selBtn)[0]){
		$selMenu.hide();
	}
})


$("#tab-box li").on("click",function(){
	$(this).addClass("active");
	$(".tab-item").eq($(this).index()).show().siblings().hide();
})

var iNow=0;
$(".small-img li").on("click",function(){
	$(".dialog-box").show().find(".content").animate({
		top:'50%'
	},2000);
	$(".dialog-body img").attr("src",$(this).find("img").attr("src"));
	iNow=$(this).index();
});
$(".dialog-box").on("click",function(e){
	if(e.target==$(".dialog-box")[0]||e.target==$(".dialog-close")[0]){
		$(this).hide();
		$(".content").stop().css("top","-249px");
	}
	
});


$(".dialog-prev").on("click",function(){
	iNow--;
	if(iNow==-1){
		iNow=$(".small-img li").length-1;
	}
	var $NextImgSrc=$(".small-img img").eq(iNow).attr("src");
	$(".dialog-body img").eq(0).before('<img src="'+$NextImgSrc+'"/>');
	$(".dialog-body img").eq(0).siblings("img").fadeOut(2000,function(){
		$(this).remove();
	});
})
$(".dialog-next").on("click",function(){
	iNow++;
	if(iNow==$(".small-img li").length){
		iNow=0;
	}
	var $NextImgSrc=$(".small-img img").eq(iNow).attr("src");
	$(".dialog-body img").eq(0).before('<img src="'+$NextImgSrc+'"/>');
	$(".dialog-body img").eq(0).siblings("img").fadeOut(2000,function(){
		$(this).remove();
	});
})
var timer;
function run(){
	timer=setInterval(function(){
	$(".dialog-next").click();
	},2000);
}
run();
$(".dialog-body").on("mouseover",function(){
clearInterval(timer);
$(".dialog-body span").show();
})
$(".dialog-body").on("mouseout",function(){
$(".dialog-body span").hide();

run();
})