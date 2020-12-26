---
layout: post
title: Systemd-Ghost
category: work
permalink: work/systemd-ghost/
tags: works_tools
scheme-text: "#fff"
scheme-bg: "#000"
last-modified: 201711141518
---

Ghost 日常挂机，常年 502。用 Ghost-CLI 更新都要出错，而且不自带守护程序。我都要搞烦了。。
自己改了下 TryGhost 的 systemd 配置文件，就可以直接用 systemctl 管理啦，还可以开机启动。

### 配置
文件位置和文件内容都在里面了：

```shell
➜  ~ cat /etc/systemd/system/ghost.service
[Unit]
Description=ghost
After=network.target

[Service]
Type=simple
# Edit WorkingDirectory, User and Group as needed
WorkingDirectory=/var/www/ghost/current/
User=www
Group=www
ExecStart=/usr/bin/npm start --production
Restart=always
SyslogIdentifier=Ghost

[Install]
WantedBy=multi-user.target
```

### 这样操作
启动：`systemctl start ghost`  
停止：`systemctl stop ghost`  
开机启动：`systemctl enable ghost`  
以后挂了就会自动重启了哈哈哈

> 参考资料
> [TryGhost/Ghost-Config: Cross-platform meta data and configurations](https://github.com/TryGhost/Ghost-Config)
