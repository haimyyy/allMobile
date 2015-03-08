var num;
var me, me2;
var sHTML = "";
$(document).ready(function() {
	//change the background after 12 o'clock pm
	var d = new Date();
	if (d.getHours() > 12) {
		$('body').css({
			"background-image" : "url('images/background_dark.jpg')"
		});
	}
	//get data from images json
	$.getJSON("js/phones.json", function(data) {
		var phones = data.Phones;
		$.each(phones, function(index, value) {
			sHTML += '<li style=background-image:url(' + value.image + ')>';
			sHTML += '<img src= images/hoverMobile.png style=display:none ><div style=display:none>' + value.name + ' ' + value.CompName + ' ' + value.date + '</div></li>';
		});
		//append data to html
		$("#images").append(sHTML);
		//hover function with the proprties
		$("#images li").hover(function() {
			me = $(this).children("img");
			me2 = $(this).children("div");
			$(me2).show();
			$(me).show();
		}, function() {
			me = $(this).children("img");
			me2 = $(this).children("div");
			$(me2).hide();
			$(me).hide();
		});
	});
	//send Id to article page
	$("a#firstHerf").attr('href', 'article.html?prodID=1');
	$("a#secHerf").attr('href', 'article.html?prodID=2');
	$("a#thiredHerf").attr('href', 'article.html?prodID=3');

	//get data from articles json
	$.getJSON("js/articles.json", function(data) {
		//get Id
		num = window.location.href.split('?')[1].match(/\d+/)[0];
		$.each(data.Articles, function(index, value) {
			if (num == value.id) {
				//change title
				$("#title").html(value.title);
				//change images
				$(".article1 img").attr("src", value.image);
			}
		});
	});
});
