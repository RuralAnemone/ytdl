var vid = window.confirm("attempt to download directly from url?") ? location.href : prompt("video url?") // boolean condition ? run this if true : run this if false

var uri = "https://projectlounge.pw/ytdl/download?url=" // change this to your preferred downloader uri, but this one works fine for me

open(uri + vid) // new tab in case there are errors