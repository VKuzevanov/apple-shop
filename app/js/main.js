(function($) {
$(function() {

  $('input, select').styler();

});
})(jQuery);

$(document).ready(function() {
    $(".view__pagination-toggle-select").change(function() {
        var mainView = $(".view__pagination-toggle-select option:selected").val();

        "row" === mainView && (
        	$(".products-item").removeClass("grid")
        	), 

        "grid" === mainView && (
        $(".products-item").removeClass("row"),
        0 == $(".products-item").hasClass(mainView) && $(".products-item").addClass(mainView)

         )
    });
var 
    	e = 300, 
    	s = 1200,
    	t = 700,
    	l = $(".up-btn");
    $(window).scroll(function() {

        $(this).scrollTop() > e ? l.addClass("up-btn__visible") : l.removeClass("up-btn__visible")

    }), l.on("click", function(e) {
        e.preventDefault(), $("body,html").animate({scrollTop: 0}, t)
    });
}());
