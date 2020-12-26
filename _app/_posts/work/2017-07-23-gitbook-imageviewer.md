---
layout: post
title: Gitbook Image Viewer
category: work
permalink: work/gitbook-imageviewer/
tags: works_community
last-modified: 201707231146
---

> Electron 的图片点击默认是没有任何效果的，如果用户要查看大图就非常麻烦，同时，他默认打开链接的方式是在自己中打开，用户体验非常糟糕

## 需要 jQuery

在 <code>&lt;body&gt;</code> 标签的最后加入 
```html
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
```

## Renderer Process

在网页的 javascript 中，我们使用 ipc 和 Main Process 通信，官方文档中写道：

> The `ipcRenderer` module is an instance of the [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) class. It provides a few methods so you can send synchronous and asynchronous messages from the render process (web page) to the main process. You can also receive replies from the main process.

所以我们在 Renderer Process 中使用 ipcRenderer 模块

```javascript
const {
  ipcRenderer
} = window.require("electron")
```
钩住图片和链接的的 onclick

当图片或者链接被点击时，我们阻止 Electron 的默认操作并将请求发送到 Main Process 中处理，因为和主线程息息相关，我们是用同步的方式发送请求

> #### ipcRenderer.sendSync(channel[, arg1][, arg2][, ...])
>
> - `channel` String
> - `...args` any[]
>
> Send a message to the main process synchronously via `channel`, you can also send arbitrary arguments. Arguments will be serialized in JSON internally and hence no functions or prototype chain will be included.
>
> The main process handles it by listening for `channel` with `ipcMain` module, and replies by setting `event.returnValue`.
>
> **Note:** Sending a synchronous message will block the whole renderer process, unless you know what you are doing you should never use it.

**⚠ 注：由于 macOS 中的 预览.app 打开 gif 时会卡死，所以此处选择了忽略 gif 的点击事件**

```javascript
function rehook() {
  $('img').on("click", function(event) {
    var file = $(event.target).attr('src')
    if (!file.endsWith("back.png") && !file.endsWith(".gif")) {
      ipcRenderer.sendSync('openPic', file)
    }
  })

  $('a').on("click", function(event) {
    var link = $(event.target).attr('href')
    if(link.startsWith("http")){
      event.preventDefault()
      ipcRenderer.sendSync('openURL', link)
    }else if(link.endsWith(".pdf")){
      event.preventDefault()
      ipcRenderer.sendSync('openPDF', link)
    }
  })
}
```

这样，在网页加载完成后调用 `rehook()` 即可钩住，比如在网页的最后使用

```html
<script>
	rehook()
</script>
```
**但是要注意的是，如果使用 pjax 刷新了页面，需要手动重新 `rehook()`**



## Main Process

主进程中，我们需要：

- ipcMain 模块 - 用于接受 ipcRenderer 传输的内容
- path 模块 - 用于构建路径
- shell 模块 - 用于打开文件

```javascript
const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')
const path = require('path')
const shell = require('electron').shell
```
我们可以使用 shell.openExternal (url) 来在浏览器中打开链接

> #### shell.openExternal(url)
>
> url String
> options Object (可选) macOS
> activate Boolean - true 让打开的应用在前面显示，默认为 true.
> callback Function (可选) - 如果指定将执行异步打开. macOS
> error Error
>


在 ipcMain 接收到指定的请求后打开文件或网页
```javascript
ipcMain.on("openPic", (sender, filename) => {
  var fpath = path.join(__dirname, filename)
  shell.openItem(fpath)
  sender.returnValue = fpath
})
ipcMain.on("openURL", (sender, openUrl) => {
  shell.openExternal(openUrl)
  sender.returnValue = openUrl
})
```