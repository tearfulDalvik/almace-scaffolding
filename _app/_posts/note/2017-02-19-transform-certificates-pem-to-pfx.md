---
layout: post
title: Transform PEM Certificates Into IIS PFX
category: note
permalink: note/transform-pem-to-pfx/
tags: notes
last-modified: 201712220852
---

Transforming your PEM certificates into pfx format makes IIS works perfectly. 

## Use Openssl to make changes
```shell
$ yum install openssl -y
$ openssl pkcs12 -export -out iis.pfx -inkey privkey.pem -in cert.pem -certfile cert1.pem
```