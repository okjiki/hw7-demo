var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1"); 
    video.autoplay = false; 
    video.loop = false; 
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

	//Play video button
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	 });
  
	 //Pause video button
	 document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	 });
  
	 //slow down video speed button
	 document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9; // Slow down video speed by 10%
		console.log("New speed is " + video.playbackRate);
	 });
  
	 //speed up video speed button
	 document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9; // Increase video speed
		console.log("New speed is " + video.playbackRate);
	 });
  
	 //skip ahead button
	 document.querySelector("#skip").addEventListener("click", function() {
		if(video.currentTime + 10 > video.duration) {
		   video.currentTime = 0; // If skip exceeds video length, reset to start
		} else {
		   video.currentTime += 10; // Skip ahead by 10 seconds
		}
		console.log("Current location is " + video.currentTime);
	 });
  
	 //mute button
	 document.querySelector("#mute").addEventListener("click", function() {
		if(video.muted) {
		   video.muted = false;
		   this.innerHTML = "Mute";
		} else {
		   video.muted = true;
		   this.innerHTML = "Unmute";
		}
	 });
  
	 //volume slider
	 document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
		console.log("Volume is: " + video.volume * 100 + "%");
	 });
  
	 //old school style
	 document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	 });
  
	 //remove old school style
	 document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	 });
  
});


//document.querySelector("#play").addEventListener("click", function() {
 	//console.log("Play Video");
// });

