$(function() {
	this.txtInput = $(".regForm .txt");
	var _this = this;
	$.each(_this.txtInput, function(i, n) {
		/*获取焦点事件*/
		_this.txtInput.eq(i).focus(function() {
			switch(i) {
				case 0:
					if($(this).val() == "") {
						no2();
						$(this).removeClass("bg-pink");
						no1(0);
					} else if(checkMoile($(this).val())) {
						no2();
						$(this).removeClass("bg-pink");
						no1(0);
					} else if(!checkMoile($(this).val())) {
						no2();
						$(this).removeClass("bg-pink");
						no1(2);
					} else {
						no2();
						no1(1);
					}
					break;

				case 1:
					if($(this).val() == "") {
						no2();
						$(this).removeClass("bg-pink");
						pw(0);
					} else {
						no2();
						var s = checkPw($(this).val());
						$(this).removeClass("bg-pink");
						pw(s);
					}
					break;
				case 2:
					if($(this).val() == "") {
						no2();
						$(this).removeClass("bg-pink");
						re_pw(0);
					} else {
						no2();
						var s = checkPw($(this).val());
						$(this).removeClass("bg-pink");
						pw(s);
					}
					break;
			}
		})
		/*失去焦点事件*/
		_this.txtInput.eq(i).blur(function() {
			switch(i) {
				case 0:
					if($(this).val() == "") {
						no1(1);
						$(this).addClass("bg-pink");
						$("#post-num").css({
							"background": "",
							"color": ""
						});

					} else if(checkMoile($(this).val())) {
						no2();
						$("#post-num").css({
							"background": "pink",
							"color": "#f10582"
						});
						$(this).removeClass("bg-pink");
					} else if(!checkMoile($(this).val())) {
						$(this).addClass("bg-pink");
						$("#post-num").css({
							"background": "",
							"color": ""
						});
						no1(2);
					} else {
						no1(1);
					}
					break;
				case 1:
					if($(this).val() == "") {
						pw(1);
						$(this).addClass("bg-pink");
					} else {
						var s = checkPw($(this).val());
						$(this).removeClass("bg-pink");
						pw(s);
					}
					break;
				case 2:
					if($(this).val() == "") {
						no2();
						$(this).addClass("bg-pink");
						/*再次输入密码的提示*/
						re_pw(0);
					} else if($(this).val() == $("#pw").val()) {
						no2();
					} else {
						no2();
						re_pw(1);
					}
					break;
			}
		})
	})
	/*手机号码提示信息*/
	function no1(i) {
		$(".ui-tooltips div").eq(i).css("display", "block").siblings().css("display", "none");
	}
	/*密码提示信息*/
	function pw(i) {
		if(i == 0) {
			$("#pw-tool div").eq(i).css({
				"display": "block",
				"top": "25px"
			}).siblings().css("display", "none");

		} else {
			$("#pw-tool div").eq(i).css("display", "block").siblings().css("display", "none");
		}
	}
	/*再次输入密码提示信息*/
	function re_pw(i) {
		$("#re-pw div").eq(i).css("display", "block").siblings().css("display", "none");

	}
	/*清空所有提示*/
	function no2() {
		$(".ui-tooltips div").css("display", "none");
		$("#pw-tool div").css("display", "none");
	}
	/*检验手机号码*/
	function checkMoile(tel) {
		if((/^1[3|4|5|7|8][0-9]{9}$/.test(tel))) {
			return true;
		} else {
			return false;
		}
	}
	/*检验密码的合法性*/
	function checkPw(pw) {
		if(pw.length < 6) {
			return 2;
		} else if(pw.length >= 6 && Number(pw)) {
			return 3;
		} else {
			return 0;
		}
	}
	$("#reg-btn").on("click", regist_Btn);
	/*注册*/
	function regist_Btn() {
		if($("#pw").val()==$("#re-pw").val()){
			$.post("http://localhost/html/weipinhui/php/regist.php",{"username":$("#tel").val(),"password":$("#pw").val()},function(data){
				if(data==1){
					location.href("../html/login.html");
				}else{
					console.log("该手机号码已被注册")
				}
			})
		}else{
			alert("两次密码不一致，请确认！");
		}
		
		return false;
	}
})