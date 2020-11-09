	var color = '#e76529';
$(document).ready(function(){
		$(".color-web").children("ul").hide();
		$(".li").click(function(){
		color = $(this).css("background-color");
		$(".text-color").css({"color": color });
		$("hr").css({"border-color": color});
		$(".bg-color").css({"background-color": color});
		})

		$('#setting').click(function(){
			$(this).next().animate({width:'toggle'}, 300);
		})


	$(".pricing_table").children().on({
		mouseenter : function(){
			$(this).css("background-color", color);
			$(this).children(".footer").children(".action_button").css("background-color", color);	
			$(this).children(".features").children("ul").children(".price-text").css({"color": "white"});
			$(this).children(".features").children("ul").children(".price-text").children("strong").css("color", "white");
			$(this).children(".price_body").css("background-color", "white");
			$(this).children("h2").css("color", "white");

		},
		mouseleave : function(){
			$(this).css("background-color", "white");
			$(this).children(".footer").children(".action_button").css("background-color", "white");	
			$(this).children(".features").children("ul").children(".price-text").css({"color": "gray"});
			$(this).children(".features").children("ul").children(".price-text").children("strong").css("color", "gray");
			$(this).children(".price_body").css("background-color", color);
			$(this).children("h2").css("color", "gray");
		}
	})
	$(".menu-hover").on({
		mouseenter : function(){
			$(this).css("background-color" , color);
		},
		mouseleave : function(){
			$(this).css("background-color" , 'white');
		}
	})

	// 	$(".menu-hover").on({
	// 	click : function(){
	// 		// $(".menu-hover").children().css("background-color" , 'white');
	// 		$(this).children().css("background-color" , color);
	// 	},
		
	// })

	$(".li-color").on({
		mouseenter : function(){
			$(this).css("background-color" , color);
		},
		mouseleave : function(){
			$(this).css("background-color" , 'white');

		}
	})

	$("#setting").on({
		mouseenter : function(){
			$(this).css("background-color" , color);
		},
		mouseleave : function(){
			$(this).css("background" , 'none');

		}
	})
	$(".contact-item").children().children().children('i').on({
		mouseenter : function(){
			$(this).css("background-color" , color);
			$(this).css("color" , "white");
		},
		mouseleave : function(){
			$(this).css("background-color" , '#f7f7f7');
			$(this).css("color" , 'gray');
		}
	})


})
