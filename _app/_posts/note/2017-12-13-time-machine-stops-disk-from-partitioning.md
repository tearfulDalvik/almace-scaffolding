---
layout: post
title: Time Machine Stops Disk from Partitioning
category: note
permalink: note/time-machine-stops-disk-from-partitioning/
tags: notes
last-modified: 201801081446
---

## 症状
在我准备安装 Windows 时，关于本机中显示的可用空间有 100 多 G，但是其中可清除空间 100 多 G，剩余空间只有 50 G 左右。运行 Boot Camp 后，即使只给 Windows 分区 20 G 的容量，也会分区出现错误。（同样的错误仍发生在磁盘工具中，表现为直接成功但是没有任何修改）
我使用 OmniDiskSweeper 扫描了一下磁盘，总共也就用了几十 G，这让我很不爽。

因为是有很多可用空间但是仍然有一部分空间无法分出来，我一开始以为是以前占用了后面的扇区，即使删除了一些，也还有一些文件会占用。但是即使这样，空白的 20 G 也是应当能被分区出来的  
然后我就觉得是 APFS 的问题了（当然不是）  
然后我选择添加分区，就发现问题了

在磁盘空间中，我直接在容器中添加了一块分区，这次有了直观的错误代码（49153），终于能 Google 了，Google 后发现是 Time Machine 的问题，原文在 [macos high sierra - APFS Container Resize error code is 49153 - Stack Overflow](https://stackoverflow.com/questions/46424915/apfs-container-resize-error-code-is-49153)

## 解决
首先在设置中关闭**时间机器**（关闭自动备份并移除磁盘，这并不影响备份的数据）
```shell
$ tmutil listlocalsnapshots /
``` 

查看缓存的快照：

```shell
$ tmutil thinlocalsnapshots / 9999999999999999
```

这条命令。。我没找到文档，看上去是把很多备份增量打包成一个
最后用这个手动干掉最后的一个吧：

```shell
$ tmutil deletelocalsnapshots
```
