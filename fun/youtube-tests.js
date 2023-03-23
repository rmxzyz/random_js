var vid = document.querySelector('video')
if(!vid) {alert("Go to a source with a video.")}
if(vid) {
  function pause() {vid.pause()}
  function play() {vid.play()}
  var length = document.querySelector("video").duration;   
  function setPlaybackRate(rate) {vid.playbackRate = rate}
  function setMuted(bool) {vid.muted = bool}
  function setVolume(vol) {vid.volume = vol}
  function togglePlay() {video.click()}
  

  
  
}
