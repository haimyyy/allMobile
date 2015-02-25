var num;
$(document).ready(function() {
	var d = new Date();
	if (d.getHours() > 12) {
		$('body').css({
			"background-image" : "url('images/background_dark.jpg')"
		});
	}

	var images = [];
	for ( j = 1; j < 8; j++) {
		images[j] = 'images/ba' + j + '.jpg';
	}
	var sHTML = "";
	for ( j = 1; j < images.length; j++) {
		sHTML += '<li><img src="' + images[j] + '" /></li>';

	};
	$('#images').append(sHTML);
	
	$("a#firstHerf").attr('href', 'article.html?prodID=1');
	$("a#secHerf").attr('href', 'article.html?prodID=2');
	$("a#thiredHerf").attr('href', 'article.html?prodID=3');

	if (window.location.href.split('?')[0] == "http://127.0.0.1:8020/FinalProject_ver2/article.html") {
		num = window.location.href.split('?')[1].match(/\d+/)[0];
		if (num == 1)
			$("#title").html("למה כדאי לחכות לגלקסי 5");
		if (num == 2) {
			$("#title").html("למה כדאי לחכות לאייפון 4")
		};
		if (num == 3) {
			$("#title").html("למה כדאי לחכות ל-LG3")
		};
	}
});
