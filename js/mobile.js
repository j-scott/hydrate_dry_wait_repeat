// detects if site is being viewed on mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$("#content").css('display', 'none')
}
else {
	$("#mobile-viewers").css('display', 'none')
}