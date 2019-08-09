var sum = 0; // 存放所有方块对应值的和
var arr = []; // 存放8块图片的容器
 
window.onload = function() {
	
	// 随机产生不相同的8个随机数
	var index = [];
	for(var i = 0; i < 8; i++){
		index[i] = parseInt(Math.random()*8);
		for(var j = 0; j < i; j++){
			if(index[i] == index[j]){break;}
		}
		if(j != i){i--;}
	}
	
	
	// 获得所有方块对应值的和
	$.each($('.image-item'), function() {
		sum += parseInt($(this).css("left")) + parseInt($(this).css("top"));
	});
	
	// 把浮动的8个方块的名字,存入容器
	for(var i = 1; i < 9; i++){
		var str = "img" + i;
		arr[i-1] = document.getElementById(str);
	}
	
	// 打乱8块方块位置
	for(var i = 0; i < 8; i++) {
		var mod = i - parseInt(i / 3) *3;
		var setLeft = mod * 245;
		var setTop = parseInt(i / 3) * 200;
		arr[index[i]].style.left = setLeft + "px";
		arr[index[i]].style.top = setTop + "px";
	}
 
	// 隐藏第九块图片
	$("#img9").hide(); // $("#img9").show();
	
	// 绑定每块图片的单击事件
	$('.image-item').click(function(){
		
		// 存放单击图片对应的数值
		var num = parseInt($(this).css("left")) + parseInt($(this).css("top"));
		
		// 存放当前8块方块对应值的和
		var presentSum = 0;
		
		// 计算当前8块方块对应值的和
		for(var i = 0; i < arr.length; i++) {
			presentSum += parseInt($(arr[i]).css("left")) + parseInt($(arr[i]).css("top"));
		}
	
		// 存放当前空格对应的要数值
		var notExist = 0;
		// 计算9块方格中,哪一块是空的
		notExist = sum - presentSum;
		
		// 标识 
		var flag = notExist - num;
		
		// 触发声音
		document.getElementById("music").play();
		
		// 判断方块的移动方向
		if(flag == 200 || flag == -200) {
			var setTop = parseInt($(this).css("top")) + flag;
			// 上下移动方块(带动画)
			$(this).animate({top: setTop + "px"});
		} else if(flag == 245 || flag == -245) {
			var setLeft = parseInt($(this).css("left")) + flag;
			// 左右移动方块(带动画)
			$(this).animate({left: setLeft + "px"});
		}
		
		
		
		// 判断是否拼好
		var judge = []; // 存放当前所有方块对应的值
		for(var i = 0; i < 8; i++) {
			judge[i] = parseInt(arr[i].style.left) + parseInt(arr[i].style.top);
			if(judge[i] == num) {
				judge[i] += flag;
			}
		}
		
		for(var j = 0; j < 8; j++) {
			var mod = j - parseInt(j / 3) *3;
			var setLeft = mod * 245;
			var setTop = parseInt(j / 3) * 200;
			var temp = setLeft + setTop;
			if(temp != judge[j]) {
				break;
			}
		}
		
		if(j == 8) {
			// 显示第九块图片
			$("#img9").slideDown();
			// 取消单击绑定
			$('.image-item').unbind("click")
		} 
		
	});
	
	
}
