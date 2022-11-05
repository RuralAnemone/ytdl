if (window.confirm("attempt to download directly from url?")) {
  var vid = location.href
} else {
  var vid = prompt("video url?")
}

var uri = "https://projectlounge.pw/ytdl/download?url="

//vid = vid // manipulate this with code if you need to // for example: encodeURIComponent(vid) or btoa(vid) - some sites need an encoded video URN for some reason. try downloading a video like normal at first, or reading their api documentation (if they have any)

location = uri + vid
