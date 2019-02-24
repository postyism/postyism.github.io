$(document).ready(function() {
	setTimeout(fadeInImages, 100);
});

$(window).resize(fadeInImages);

function fadeInImages() {
	$(".content-page").fadeIn(1000);
	// if ($(this).width() > 768) {
	// 	$(".landingimage").fadeIn(1500);
	// 	//console.log("fadeIn");
	// };
}

$(document).ready(function(){
	$(".move").click(function(){
		$(".index-content").fadeOut(500);
		$(".header").animate({top: "-100px"},500);
	}); 
});

function delay(URL){
    setTimeout(function(){window.location = URL },500);
}