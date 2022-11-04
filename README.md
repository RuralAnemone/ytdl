# ytdl
youtube downloading bookmarklet with various functionalities

if you want to just use the same downloader that I use then here's the code:
```js
javascript:fetch("https://cdn.jsdelivr.net/gh/RuralAnemone/ytdl/code.js").then(data=>{data.text().then(text=>{eval(text)})});
```
