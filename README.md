# ytdl
youtube downloading bookmarklet with various functionalities

if you want to just use the same downloader that I use then here's the code:
```js
javascript:fetch("https://cdn.jsdelivr.net/gh/RuralAnemone/ytdl/code.js").then(data=>{data.text().then(text=>{eval(text)}).catch(e=>alert(`somehow turning the code into text failed lol\n\n${e}`))}).catch(e=>alert(`oh no, a CORS error!!!\n\n${e}`));
```

open a pr or an issue if you want to add some more features!