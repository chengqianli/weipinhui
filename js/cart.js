$(function(){
	var userName = getCookie("user");
	var str = getCookie("cart");
	var obj = str?JSON.parse(str):{};
	/*判断是否登录了*/
	userName=userName?userName:"";
	if(userName==""){
		$(".info-box .person-info").html("<a href=''>登录</a><a href=''>注册</a>");
	}else{
		$(".info-box .person-info").html("你好,<a href='' class='person'>"+userName+"</a>");
	}
	/*判断登录状态结束*/
	/*开始加载购物车商品列表*/
	var html = "";
	$.get("../json/goodsList.json", function(data) {
		for(var attr in obj){
			html+="<div class='item'><div class='item-info'><img src='"+data[attr].bigImg+"'/><p><a href=''>"+data[attr].goodsName+"</a></p></div><div class='list-price list-item'>"+data[attr].price+
			"</div><div class='list-num list-item'><a href='javascript:void(0)' class='minus'>-</a><input type='text' id='val' value='"+obj[attr]+"'/><a href='javascript:void(0)' class='add'>+</a></div><div class='list-moneys list-item'>"+data[attr].price*obj[attr]+"</div><div class='list-del list-item' dataid='"+attr +"'><i class='iconfont'>&#xe618;</i></div></div>";
		}
		$(".lists-center").html(html);
		$(".list-del .iconfont").on("click",function(){
			delete obj[$(this).parent().attr("dataid")];
			var stri = JSON.stringify(obj);
			setCookie("cart",stri,7);
			location.reload();
		});
		cal();
		/*加*/
		$(".add").on("click",function(){
			var num = parseInt($(this).parent().find("#val").val());
			$(this).parent().find("#val").val(num+1);
			var pic =  $(this).parent().parent().find(".list-price").html()*(num+1);
			$(this).parent().parent().find(".list-moneys").html(pic);
			cal();
		});
		/*减*/
		$(".minus").on("click",function(){
			var num = parseInt($(this).parent().find("#val").val());
			if(num==1){
			}else{
				$(this).parent().find("#val").val(num-1);
				var pic =  $(this).parent().parent().find(".list-price").html()*(num-1);
				$(this).parent().parent().find(".list-moneys").html(pic);
				cal();
			}
		});
		/*文本框改变事件*/
		$("#val").on("change",function(){
			console.log(22)
			cal();
		});
		/*点击加减的存cookie函数*/
		/*function saveCookie(){
			
		}*/
		/*计算总价格*/
		function cal(){
			var cook = getCookie("cart");
			var obj = JSON.parse(cook);
			var ss = 0;
			for(var attr in obj){
				ss+=obj[attr]*data[attr].price
			}
			$(".all-prices").html("￥"+ss);
		}
	});
	/*加载购物车列表结束*/
	
})
