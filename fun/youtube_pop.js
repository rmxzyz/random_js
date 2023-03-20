javascript:var pop,video=document.getElementsByTagName("video")[0];function popout(){video.requestPictureInPicture()}function popin(){document.exitPictureInPicture()}video.addEventListener("enterpictureinpicture",e=>pop=popin),video.addEventListener("leavepictureinpicture",e=>pop=popout),(pop=pop||popout)();

//use in a youtube video and the video will pop out and you can see it when on another tab. orig by krazete
