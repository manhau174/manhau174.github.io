up  = $('.up');
down = $('.down');

up.click(function(){
	$(this).css("display", "none");
	$(this).next().css("display", "block");
	$(this).parent().prev().slideToggle("slow");
})

down.click(function(){
	$(this).css("display", "none");
	$(this).prev().css("display", "block");
	$(this).parent().prev().slideToggle("slow");
})