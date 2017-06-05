$(function() {
	$("#main .goods-small-img").on("mousemove", function(e) {
		var evt = e || event;
		var x = evt.pageX - $(".goods-small-img").offset().left - $("#zoom").width() / 2;
		var y = evt.pageY - $(".goods-small-img").offset().top - $("#zoom").height() / 2;
		$("#zoom").css("display", "block");
		if(x <= 0) {
			x = 0;
		}
		if(y <= 0) {
			y = 0;
		}
		if(x >= $(".img").width() - $("#zoom").width()) {
			x = $(".img").width() - $("#zoom").width();
		}
		if(y >= $(".img").height() - $("#zoom").height()) {
			y = $(".img").height() - $("#zoom").height();
		}
		$("#zoom").css("left", x);
		$("#zoom").css("top", y);
		$(".img img").css("left", -(1100 / 420) * x);
		$(".img img").css("top", -(1390 / 531) * y);
		$(this).find("img").css({
			"height": "1390",
			"width": "1100"
		});
	});
	$("#main .goods-small-img").on("mouseleave", function() {
		$("#zoom").css("display", "none");
		$(".img img").css("left", 0);
		$(".img img").css("top", 0);
		$(this).find("img").css({
			"height": "531",
			"width": "420"
		});
	});

	$(".btn-text svg").hover(function() {
		$(".help-info").css("display", "block");
	}, function() {
		$(".help-info").css("display", "none");

	});
	$(".help-info").hover(function() {
		$(".help-info").css("display", "block");

	}, function() {
		$(".help-info").css("display", "none");
	});
	$(".product-text .top").hover(function() {
		$(this).css("border-bottom", "none");
		$(".product-text .bottom").css("display", "block");
	}, function() {
		$(this).css("border-bottom", "");
		$(".product-text .bottom").css("display", "none");
	});
	$(".product-text .bottom").hover(function() {
		$(".product-text .bottom").css("display", "block");

	}, function() {
		$(".product-text .bottom").css("display", "none");

	});
	/*添加购物车*/
	$(".add-car-btn").hover(function() {
		$(this).animate({
			"opacity": .7
		}, 200);
	}, function() {
		$(this).animate({
			"opacity": 1
		});
	});
	var str = getCookie("cart");
	var obj = str ? JSON.parse(str) : {};
	var sum = 0;
	for(var i in obj) {
		sum += obj[i];
	}
	$(".sum").html(sum);
	$(".add-car-btn").on("click", function(e) {
		stopPropagation(e);
		var str = getCookie("cart");
		var obj = str ? JSON.parse(str) : {};
		var sum = 0;
		for(var i in obj) {
			sum += obj[i];
		}
	$(".sum").html(sum);
		var id = $(this).attr("data-id");
		obj[id] = obj[id] ? ++obj[id] : 1;
		var objToStr = JSON.stringify(obj);
		setCookie("cart", objToStr, 7);
		$(".sum").html(++sum);
		$(".cars").animate({
			"right": "38px"
		}, 500);
		readCookie();
	});
	/*阻止冒泡事件*/
	function stopPropagation(e) {
		if(e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
	}
})