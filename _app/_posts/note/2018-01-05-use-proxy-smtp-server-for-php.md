---
layout: post
title: Use SMTP Server by Proxy for PHP
category: note
permalink: note/use-proxy-smtp-server-for-php-mail-function/
tags: notes
---


> 开发时应注意此坑，还是应该直接上 PHPMailer  
> It is worth noting that the mail() function is not suitable for larger volumes of email in a loop. This function opens and closes an SMTP socket for each email, which is not very efficient.

## 原理
PHP 使用系统自带的 sendmail 二进制文件发送邮件，但是我们可以在 php.ini 中更换 sendmail 程序。
ssmtp 可以让我们使用外部的 smtp 服务器像 sendmail 一样发送邮件，我们只需将 php.ini 中的 sendmail 更换为 ssmtp 即可。

## 安装
```yum install -y ssmtp which```

## 配置
首先用 which 找到 ssmtp 的安装位置：```which ssmtp```，然后编辑配置 ssmtp 配置文件：```vim /etc/ssmtp/ssmtpd.conf```
**里面的说明很详细，但是特别注意如果你的 smtp 服务器要求验证，需要手动添加两行：**
```conf
AuthUser=username
AuthPass=password
```
搞定后还需要配置一下 php.ini：```vim /etc/php.ini```，搜索 sendmail 并将 sendmail 路径替换为 ssmtp 路径即可。最后别忘了重启：
```shell
systemctl restart php-fpm
systemctl restart httpd
```
