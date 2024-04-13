var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector(".video");
	console.log(video);
});
// Initialize the video element and turn off autoplay and turn off looping.//
window.addEventListener("load", function() {
	document.querySelector(".video").autoplay = false;
	console.log("Video Autoplay is off");
	document.querySelector(".video").loop = false;
	console.log("Video Loop is off");
});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 < video.duration) {
		video.currentTime += 15;
	} else {
		video.currentTime = 0;
		video.play();
	}
	console.log("Current location " + video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
});
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	console.log("Volume is " + video.volume * 100);
});
document.querySelector("#volume").addEventListener("click", function() {
	if (video.volume == 0) {
		video.volume = 1;
		document.querySelector("#volume").innerHTML = "Volume";
		console.log("Volume is " + video.volume * 100);
	} else {
		video.volume = 0;
		document.querySelector("#volume").innerHTML = "Mute";
		console.log("Volume is " + video.volume * 100);
	}
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School");
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
});
