//增加和设置cookie
function setCookie(name,val,date){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+date)
	document.cookie=name+"="+val+";"+"expires="+oDate+";path=/";
}
//获取cookie
function getCookie(name){
	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	for(var i = 0;i < arrCookie.length;i++){
		var str = arrCookie[i].split("=");
		if(name == str[0]){
			return str[1];
		}
	}
	
}