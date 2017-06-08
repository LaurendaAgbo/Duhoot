
$(function() {
		var selectedClass = "";
		$("a").click(function(){
		selectedClass = $(this).attr("data-rel");
    $("#posts").hide();
		$("#posts div.col-xs-12").not("."+selectedClass).hide();
     setTimeout(function() {
      $("."+selectedClass).show();
      $("#posts").show();
    }, 500);
		
	});
});