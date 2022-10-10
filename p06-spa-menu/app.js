
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".bag").slideToggle("fast");

	$('nav ul li.mati').each(function(index, el) {
		var bagID = el.id.split('_')[1];
		$('.bag#' + bagID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.bag:visible').fadeOut('fast', function() {
		$('.bag#' + pilihIsi).fadeIn('fast');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});