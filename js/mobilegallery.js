$(document).ready(function(){
	$(window).resize(function() {
		var win = $(this);
		if (win.width() < 768) {
			$('#gallerymusic').addClass('grid-tattoo');
		} 
		else {
			$('#gallerymusic').removeClass('grid-tattoo');
		}
	});
});
