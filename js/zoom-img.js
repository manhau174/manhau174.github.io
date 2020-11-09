var zoom  = $(".postfolio-item");

zoom.on({
	mouseenter : function(){
		$(this).children("img").css(
			{"transform" : "scale(10)"});
	},
	mouseleave : function(){
		$(this).children("img").css({"transform" : "scale(1)"});
	}
})