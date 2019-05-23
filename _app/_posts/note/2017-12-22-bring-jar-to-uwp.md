---
layout: post
title: Bring JAR Libraries to UWP
category: note
permalink: note/bring-jar-libraries-to-uwp/
tags: notes
last-modified: 201712261106
---

偶然看到了我以前用 UWP 写的 Passport For Windows，准备继续的时候才想起当时弃坑是因为想让 UWP 版的 Passport 用上全局的 cipher.dll，而这个 DLL 依赖了仅限桌面平台的 IKVM.OpenJDK 库，今天终于找到办法让 UWP 也用上 IKVM，也就是说 UWP 也可以用上 JAR 库了

## 环境
- Git - 这里建议直接用 Cmder 了
- [Java SE Development Kit 8 - Downloads](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Apache Ant - Binary Distributions](http://ant.apache.org/bindownload.cgi?Preferred=http%3A%2F%2Fmirrors.tuna.tsinghua.edu.cn%2Fapache%2F)
- [NAnt - A .NET Build Tool -  Browse /nant at SourceForge.net](https://sourceforge.net/projects/nant/files/nant/)

你需要自己编译这货：

```shell
$ git clone https://github.com/shannah/cn1-ikvm-uwp.git
```

**官网上，NAnt 和 Ant 都没有安装文件，只有二进制文件，我们需要手动将 NAnt 的路径弄到环境变量里去。**

将 Apache-Ant 拷贝到 cn1-ikvm-uwp 目录，然后在 Cmder 中 cd 到 cn1-ikvm-uwp 目录中，编译：

```shell
$ apache-ant-1.10.1\bin\ant.bat  compile-all
```

等待编译完成后在 Visual Studio 中即可添加引用



## References
- [shannah/cn1-ikvm-uwp: IKVM fork with UWP support for Codename One](https://github.com/shannah/cn1-ikvm-uwp)