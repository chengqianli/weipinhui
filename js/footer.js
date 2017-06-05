$.get("../json/footer_ul.json", function(data) {
	var html = template("foot", {
		"list": data
	});
	document.getElementsByClassName("footer-cen")[0].innerHTML = html;
	$(".footer-cen li").hover(function() {

		$(this).css({
			"color": "#f10582",
			"transform": "translateX(10px)"
		});
	}, function() {
		$(this).css({
			"color": "",
			"transform": "translateX(0px)"
		});

	})
});
