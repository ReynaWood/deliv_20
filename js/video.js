var video = document.getElementById("player1")

window.addEventListener("load", function() {
	video.load()
	console.log("Loaded video")

	video.loop = false
	video.autoplay = false

});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play video")

	document.getElementById("volume").textContent = (video.vollume*100) + "%"
});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("Paused video")
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Slowed video")
	console.log("Playback rate: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log("Fast video")
	console.log("New playback rate: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		console.log("Exceeds video duration! Resetting to start...")
		video.currentTime = 0
	}
	else {video.currentTime += 10}
	console.log("Skipping forward")
	console.log("New position: " + video.currentTime + " sec.")
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false
		document.getElementById("mute").textContent = "Mute"
		console.log("Unmuted video")
	}
	else {
		video.muted = true
		document.getElementById("mute").textContent = "Unmute"
		console.log("Muted video")
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.getElementById("slider").value / 100
	document.getElementById("volume").textContent = (video.volume * 100) + "%"
	console.log("Volume changed")
	console.log("New volume is: " + (video.volume * 100) + "%")
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
	console.log("Old school")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
	console.log("Original")
});