function openModal() {
  $("#myModal").css({ display: "block" });
}

function closeModal() {
  $("#myModal").css({ display: "none" });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
}


// $(document).keydown(function(){
// 	if (e.keyCode = 37)  
// 	n = n - 1;
// 	if (e.keyCode = 39)
// 	n = n + 1;  
// });

// $(document).keydown(function(e) {
// 	e.preventDefault(); 
// 	switch(e.which) {
// 		case 37:
// 		// Left Key Pressed
// 		goToComic('prev');
//         break;

//         case 39:    
//         // Right Key Pressed
//         goToComic('next');
//         break;
//     }
// });

// var galleryIndex = 1;
// showGallery(galleryIndex);
// function plusGallery(n){
// 	showGallery(galleryIndex += n);
// }
// function currentGallery(n){
// 	showGallery(galleryIndex = n);
// }
// function showGallery(n){
// 	var e;
// 	var gallery = document.getElementsByClassName("grid-tattoo");
// 	if (n > gallery.length) {slideIndex = 1}
// 	if (n < 1) {galleryIndex = gallery.length}
// 	for (e = 0; e < gallery.length; e++) {
// 		gallery[e].style.display = "none";
// 	}
// 	gallery[slideIndex-1].style.display = "inline-grid";
// }