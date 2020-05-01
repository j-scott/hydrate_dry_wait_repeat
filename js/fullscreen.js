/*
fullscreen.js

code for changing colours on fullscreen/normal mode
*/

// when html loads
$( document ).ready(function() {
	// set poster background white
	$(".vjs-poster").css('background-color', 'white');
});

// listen if video goes into full screen
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
    if (document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
    	// set poster and js background to be black
		$(".vjs-poster").css('background-color', 'black')
		$(".video-js").css('background-color', 'black')

		// Colour of buttons on video bar to white
		$(".vjs-button").css('color', 'white');
		$(".vjs-remaining-time-display").css('color', 'white');
	}
	else {
    	// set poster and js background to be white
		$(".vjs-poster").css('background-color', 'white')
		$(".video-js").css('background-color', 'white')

		// Colour of buttons on video bar to black
		$(".vjs-button").css('color', 'black');
		$(".vjs-remaining-time-display").css('color', 'black');
	}
}