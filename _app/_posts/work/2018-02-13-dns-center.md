---
layout: post
title: DNS Panel
category: work
permalink: work/php-based-dns-panel/
tags: works_community 
scheme-text: "#000"
scheme-link: "#a73300"
scheme-hover: "#ff4e00"
scheme-code: "#a73300"
last-modified: 201801221001
plugin: lightense
css: |
  body {
    background-image: linear-gradient(to bottom, #fff500, #ff8f00);
  }

  .lightense-backdrop {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 2147483646;
    padding: 0;
    margin: 0;
    transition: opacity 300ms ease;
    cursor: zoom-out;
    opacity: 0;
    background-color: rgba(255, 255, 255, .98);
    visibility: hidden;
  }
  
  @supports (-webkit-backdrop-filter: blur(30px)) {
    .lightense-backdrop {
      background-color: rgba(255, 255, 255, .6);
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
    }
  }
  
  .lightense-wrap {
    position: relative;
    transition: transform 300ms cubic-bezier(.2, 0, .1, 1);
    z-index: 2147483647;
    pointer-events: none;
  }
  
  .lightense-target {
    cursor: zoom-in;
    transition: transform 300ms cubic-bezier(.2, 0, .1, 1);
    pointer-events: auto;
  }
  
  .lightense-open {
    cursor: zoom-out;
  }
  
  .lightense-transitioning {
    pointer-events: none;
  }
---

This is a DNS manager panel running with PowerDNS, and this means you can have a **Desktop and Mobile Friendly** frontend for self-hosted-DNS management.

## Features
- Wildly record types support, such as LOC, TLSA, ALIAS, DNSKEY, CAA, and what PowerDNS supports.
- Nameserver distributed in ```China and Japan```.
- CNAME Flattening for any host!
- DNSSEC support.
- Custom SOA and NS records.
- Works under both ipv4 and ipv6 network.
- Mobile devices friendly.

> Using of this panel comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.

**This panel has only Chinese because I am Chinese :)**

If you want to have a try, [Register an account](https://account.ifengge.cn/register/) and use the email address you've registered to send me a mail with the message that you want to use this service.