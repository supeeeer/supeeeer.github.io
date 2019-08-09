$("#text1").onClick=textChange;

var flag=1;

function textChange(text,num){
	console.log("ok");
	$("#bd-lt-text").fadeOut(newText(text,num));
	$(".line").animate({width:"0"});
	$(".bd-rt-item").css("opacity",".5");
	$(".bd-rt-item").children("div").css("background-color","#fff");
	$(".bd-rt-item").children("a").css("color","#fff");
	
	$(text).next().animate({width:"100%"});
	$(text).parent().css("opacity","1");
	$(text).css("color","#fe8532");
	$(text).siblings().css("background-color","#fe8532");
}

function newText(text,num){
	console.log(num);
	$(".append").slideUp(800);
	if(num==1){
		$(text).parent().siblings("div").slideDown(800);
		$(text).parent().siblings("div").text("初亏，是发生日食的一个阶段，它的出现表明日食已经开始。由于月亮自西向东绕地球运转，所以日食总是在太阳圆面的西边缘开始的。当月亮的东边缘刚接触到太阳圆面的瞬间（即月面的东边缘与月面的西边缘相外切的时刻），称为初亏。");
		$(".bd-rt-img").css("background"," url(img/IMG-study2-1.png) no-repeat right");
	}else if(num==2){
		$(text).parent().siblings("div").slideDown(800);
		$(text).parent().siblings("div").text("食既，指日全食或月全食过程中，月亮阴影与太阳圆面或地球阴影与月亮圆面第一次内切时二者之间的位置关系，也指发生这种位置关系的时刻。食既发生在初亏之后。");
		$(".bd-rt-img").css("background"," url(img/IMG-study2-2.png) no-repeat right");
	}else if(num==3){
		$(text).parent().siblings("div").slideDown(800);
		$(text).parent().siblings("div").text("食甚，是指在一次日食中，月球的角直径，与太阳角直径的比例；而指一次月食中，地球本影的角直径，与月球角直径的比例。 ");
		$(".bd-rt-img").css("background"," url(img/IMG-study2-3.png) no-repeat right");
	}else if(num==4){
		$(text).parent().siblings("div").slideDown(800);
		$(text).parent().siblings("div").text("生光，月球继续东移，当西沿相切于太阳西沿，太阳开始露出，光芒开始重现，称为生光。日全食结束。 ");
		$(".bd-rt-img").css("background"," url(img/IMG-study2-4.png) no-repeat right");
	}else if(num==5){
		$(text).parent().siblings("div").slideDown(800);
		$(text).parent().siblings("div").text("复圆，生光后月球遮挡太阳越来越少，当月球西沿相切于太阳东沿，太阳圆盘形状完全恢复，整个日食过程结束。 ");
		$(".bd-rt-img").css("background"," url(img/IMG-study2-5.png) no-repeat right");
	}
}
