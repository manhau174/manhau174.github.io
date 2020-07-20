$('.search').click(function(){
	$(".postfolio-img").css({"transform" : "scale(1)"});
  	$('.modal-body').empty();
  	var title = $(this).parent().prev().attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('.postfolio-item').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});

$('.link').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent().prev().attr("title");
  	$('.modal-body').html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero animi, maiores at et quae explicabo perferendis iure sint, soluta accusamus, quibusdam dolorum cum velit deserunt deleniti quisquam earum tenetur porro! Beatae pariatur, expedita, quibusdam non, adipisci doloribus sit iusto in esse ad ipsum totam voluptatibus explicabo soluta reprehenderit mollitia quos? <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero animi, maiores at et quae explicabo perferendis iure sint, soluta accusamus, quibusdam dolorum cum velit deserunt deleniti quisquam earum tenetur porro! Beatae pariatur, expedita, quibusdam non, adipisci doloribus sit iusto in esse ad ipsum totam voluptatibus explicabo soluta reprehenderit mollitia quos?");
  	$('.modal-title').html(title);
  	$('#myModal').modal({show:true});
});