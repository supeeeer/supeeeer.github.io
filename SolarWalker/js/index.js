document.getElementById("start").onclick=jump;

function jump(){
	window.location.href="study.html";
}

function zhengquedaan(n){
	document.getElementById('daan').style.display=n?'block':'none';     /* 点击按钮打开/关闭 对话框 */
	document.getElementById('daan1').style.display=n?'block':'none';     /* 点击按钮打开/关闭 对话框 */
}
