 var flag_c = 1;
 var flag_e = 1;

$(".btn-circle").click(
	function(){
		flag_c*=-1;
		if(flag_c==-1){
			$("#moon").css("animation-play-state","paused");
			$(".btn-circle").html("GO");
			console.log($("#moon").position().left);
		}
		else{
			$("#moon").css("animation-play-state","running");
			$(".btn-circle").html("STOP");
			console.log($("#moon").position().left);
		}
	}
);

$(".btn-eclips").click(
	function(){
		flag_e*=-1;
		if(flag_e==-1){
			$("#moon").css("visibility","hidden");
			$("#eclipsemoon").css("visibility","visible");
			$("#light").css("visibility","visible");
			$(".btn-eclips").html("ROUND");
		}
		else{
			$("#moon").css("visibility","visible");
			$("#eclipsemoon").css("visibility","hidden");
			$("#light").css("visibility","hidden");
			$(".btn-eclips").html("ECLIPSE");
		}
	}
);

$("#slipe-light").change(
	function(){
		var light = $("#slipe-light").val();
		console.log(light);
		$("#light").css("border-left",light*10 + "px solid #fFF3CD");
	}
);

//
