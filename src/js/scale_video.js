$(document).ready(function() {

	$('video#bgvideo').on("loadedmetadata", scaleVideo);
	$(window).on("resize", scaleVideo);

	function scaleVideo() {

		// Gets the window height and width and saved them as variables

		var windowHeight = $(window).height();
		var windowWidth = $(window).width();

		// alert(windowHeight + ' and the window width is ' + windowWidth);

		// Gets the video width and height

		var videoNativeWidth = $('video#bgvideo')[0].videoWidth;
		var videoNativeHeigth = $('video#bgvideo')[0].videoHeight;

		// alert('Our window dimensions are: ' + windowHeight +'x'+windowWidth + ' and our video width and height is: ' + videoNativeHeigth +'x'+ videoNativeWidth);

		// Get the Scale Factors

		var heightScaleFactor = windowHeight / videoNativeHeigth;
		var widthScaleFactor = windowWidth / videoNativeWidth;

		// Get the highest scale factor

		if (widthScaleFactor > heightScaleFactor) {
			var scale = widthScaleFactor;
		}

		else {
			var scale = heightScaleFactor;
		}

		var scaledVideoHeight = videoNativeHeigth * scale;
		var scaledVideoWidth = videoNativeWidth * scale;
		$('video#bgvideo').height(scaledVideoHeight);
		$('video#bgvideo').width(scaledVideoWidth);
	}
});