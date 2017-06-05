$(function() {
	/*获取cookie*/
	if($("#checkbox").prop("checked")){
		$(".un input").val(getCookie("user")?getCookie("user"):"");
		$(".pw input").val(getCookie("password")?getCookie("password"):"");
	}
	$(".other p a").hover(function() {
		$(this).css("backgroundImage", "url(../imgs/icon2.jpg)");
	}, function() {
		$(this).css("backgroundImage", "url(../imgs/icon.jpg)");
	});
	$(".more").on("click", function() {
		$(".other-con").fadeToggle();
		$(".more span").toggleClass("clk_jiaobiao");
	});
	$.each($(".txt"), function(i, u) {
		$(".txt").eq(i).blur(function() {
			if($(this).val().length == 0) {
				$(this).css({
					"border-color": "#f10582"
				});
				$(".info").eq(i).css("visibility", "visible");
			} else {
				$(this).css({
					"border-color": ""
				});
				$(".info").eq(i).css("visibility", "hidden");
			}
		})
	});
	$(".login_btn a").on("click",function(){
		if($(".un input").val().length==0||$(".pw input").val().length==0){
			alert("有东西没写");
		}else{
			$.post("http://localhost/html/weipinhui/php/login.php",{"tel":$(".un input").val(),"password":$(".pw input").val()},function(data){
				if(data==0){
					alert("该手机号或用户名不存在");
				}else if(data==1){
					$(".info").eq(1).html("密码错误").css("visibility", "visible");
				}else{
					setCookie('user',$(".un input").val(),7);
					setCookie('password',$(".pw input").val(),7);
					location.assign("index.html");
				}
			})
		}
		return false;
	})
})