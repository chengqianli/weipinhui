$(".header-top-con .address:first-child").hover(function() {
		$(this).attr({
			class: "address_2"
		});
		$(this).css({
			background: "#fff",
			border: "1px solid #cdcdcd"
		});
		$(".adds").css("display", "block");
	}, function() {
		$(this).attr({
			class: "address"
		});
		$(".adds").css("display", "none");
		$(this).css({
			background: "",
			border: ""
		});
	});
	/*所有span划过的时候的样式*/
	$("span a").hover(function() {
		$(this).css({
			color: "#f10582"
		});
	}, function() {
		$(this).css({
			color: ""
		});
	});
	/*top_ul中的li划过的时候变三角图标*/
	$(".top_ul li").hover(function() {
		$(this).find("i[class='ico-dis']").attr({
			class: "ico-red"
		});

		$(this).find("div:first").css("display", "block");
		if($(this).hasClass("ok1")) {
			$(this).css({
				background: "#fff",
				borderBottom: "0",
				boxSizing: "border-box",
				border: "1px solid #cdcdcd"
			});
		}
		/*斜杠消失*/
		$(this).find("o").html(" ");
	}, function() {
		$(this).find("i[class='ico-red']").attr({
			class: "ico-dis"
		});
		$(this).find("div:first").css("display", "none");
		$(this).css({
			background: "",
			borderColor: "#f5f5f5",
			borderBottom: "0"
		});
		$(this).find("o").html("/");
	});
	$(".shop-car").hover(function() {
		$(this).find("a").eq(0).css("color", "#f10582");
	}, function() {
		$(this).find("a").eq(0).css("color", "");
	})
	/*导航固定*/
	window.onscroll = function() {
		var nav = document.getElementsByClassName("main-nav")[0];
		var _top = document.documentElement.scrollTop || document.body.scrollTop;
		if(_top > 150) {
			nav.style.position = "fixed";
			nav.style.top = 0;
		} else {
			nav.style.position = "absolute";
			nav.style.top = "128px";
		}
	}
	