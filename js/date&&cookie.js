var dateUtil = {
	isLeapYear: function(year) {
		if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			return true;
		}
		return false;

	},
	formatDate: function(oDate, str) {
		var yy = oDate.getFullYear();
		var mm = oDate.getMonth() + 1;
		var dd = oDate.getDate();
		mm = mm < 10 ? "0" + mm : mm;
		dd = dd < 10 ? "0" + dd : dd;
		var dateStr = yy + str + mm + str + dd;
		return dateStr;

	},
	getDays: function(year, month) {
		switch(month + 1) {
			case 2:
				if(dateUtil.isLeapYear(year)) {
					return 29;
				}
				return 28;
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
			default:
				return 31;
		}
	},
	getChaDays: function(oDate1, oDate2) {
		var ms = oDate1 - oDate2; //两个日期相减，得到相差的毫秒数
		var cha = Math.abs(ms / 1000);
		return cha;
	},
	getNDays: function(oDate, n, str) {
		var day = oDate.getDate();
		oDate.setDate(day + 30); //设置日期时，直接加一个数，自动判断
		return dateUtil.formatDate(oDate, str);
	}
}

function getStyle(obj, attr) {
	if(typeof getComputedStyle == "function") {
		return getComputedStyle(obj, false)[attr];
	} else {
		return obj.currentStyle[attr];
	}
	/*	if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		}*/
}

function addEvent(obj, type, fn) {
	if(obj.addEventListener) {
		obj.addEventListener(type, fn);
	} else {
		obj.attachEvent("on" + type, fn);
	}
}

function removeEvent(obj, type, fn) {
	if(obj.removeEventListener) {
		obj.removeEventListener(type, fn);
	} else {
		obj.detachEvent("on" + type, fn);
	}
}
//
function getCookie(name) {
	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	for(var i in arrCookie) {
		var arr = arrCookie[i].split("=");
		if(name == arr[0]) {
			return arr[1];
		}
	}
}

function setCookie(name, val, day) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + day);
	document.cookie = name + "=" + val + ";expires=" + oDate;
}

function removeCookie(name) {
	setCookie(name, 1, -1);
}