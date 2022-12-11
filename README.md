# ytdl
youtube downloading bookmarklet with various functionalities

if you want to just use the same downloader that I use then here's the code:
```js
javascript:fetch("https://cdn.jsdelivr.net/gh/RuralAnemone/ytdl/code.js").then(data=>{data.text().then(text=>{eval(text)}).catch(e=>alert(`somehow turning the code into text failed lol\n\n${e}`))}).catch(e=>alert(`oh no, a CORS error!!!\n\n${e}`));
```

open a pr or an issue if you want to add some more features!

<hr>

do you think I should merge all of my ytdl stuff into this one bookmarklet or no

idk

open an issue or contact me on discord or something if you think so