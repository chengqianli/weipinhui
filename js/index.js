$(function() {

	/*左上角地址*/

	/*banner轮播*/
	//定义接口数据
	var imgData = ["../imgs/1467620677036.jpg", "../imgs/1467620750077.jpg", "../imgs/1467620773404.jpg", "../imgs/1467620677036.jpg", "../imgs/1467620750077.jpg"];
	var txtData = ["端午节88折活动", "从头焕新的变美秘笈", "型童迎新 唤醒夏日", "夏之美履 你要get到的时髦套路"];
	var index = 0;
	var timer = setInterval(banner_move, 3000);

	function banner_move() {
		if(index == $(".index-content .center-con li").size()) {
			index = 0;
		}
		$(".index-content .center-con li").eq(index).fadeIn().siblings().fadeOut();
		$(".underline").animate({
			"left": index * 200 + 75
		}, 500);
		index++;
	}
	$(".index-content .center-con ul").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(banner_move, 3000);
	});
	/*滑动文字*/
	$(".index-content .banner-txt li").hover(function() {
		clearInterval(timer);
		index = $(this).index();
		banner_move();
	}, function() {
		timer = setInterval(banner_move, 3000);
	});
	/*计时器函数<!--所有会场模板对应的js代码-->*/
	$.get("../json/all_brand.json", function(data) {
		var html = template("all-brand", {
			"list": data
		});
		document.getElementById("J-index-floor").innerHTML = html;
		$(".brand-item").hover(function() {
			$(this).animate({
				"opacity": ".6"
			}, 500, function() {
				$(this).animate({
					"opacity": "1"
				}, 500);
			});
			$(this).find(".shoucang").fadeIn(100);
		}, function() {
			$(this).find(".shoucang").fadeOut(100);
		});
		var now = new Date();
		for(var i = 0; i < $(".times").size(); i++) {
			var nextDate = new Date($(".times").eq(i).html());
			var tim = Math.round(dateUtil.getChaDays(now, nextDate));
			var day = Math.round(tim / (60 * 60 * 24));
			$(".times").eq(i).html(tim);
		}
		setInterval(function() {
			for(var i = 0; i < $(".times").size(); i++) {
				var s = parseInt($(".times").eq(i).html()) - 1;
				$(".times").eq(i).html(s);
			}

		}, 1000)

	})
})