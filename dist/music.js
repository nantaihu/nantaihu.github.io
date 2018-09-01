const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "最重要的小事",
        artist: '五月天',
        url: 'http://www.ytmp3.cn/down/52243.mp3',
        cover: 'https://wx4.sinaimg.cn/mw690/957bcbf4gy1fuphwh04mhj20ku0jy768.jpg',
      },
      {
        name: '私奔到月球',
        artist: '五月天',
        url: 'http://www.ytmp3.cn/down/52244.mp3',
        cover: 'https://wx4.sinaimg.cn/mw690/957bcbf4gy1fuphwh04mhj20ku0jy768.jpg',
      },
      
    ]
});

