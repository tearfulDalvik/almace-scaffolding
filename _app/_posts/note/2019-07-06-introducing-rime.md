---
layout: post
title: RIME - An Intelligent ChsIME
category: note
permalink: note/introducing-rime/
heading-bg: https://yoooooooo.tk/cdn/img/home-watermarks.svg
heading-bg-color: "#171a1f"
heading-bg-text: "#fff"
scheme-bg: "#171a1f"
scheme-link: "#ffd0a9"
scheme-code: "#89f8ff"
scheme-text: "#ffffff"
tags: notes
plugin: lightense
---

## What's This?
In a general word, this is an Input Engine that could handle any languages in the world rather than just an Input Method, ergo it can handle Emoji, Greek Alphabets, Symbols, and any Unicode characters easefully, and of course, it is super fast.  
It is also fun that this IME requires amount of customize via editing configuration files.

## Symbol Suggestions
![](https://img.ifengge.cn/images/5ae7ad79efdf526da83c4faa3958f0c0.png){: .size-right.no-resize}
If you type a symbol like 「?」, RIME will suggest you both full and half width symbol of 「?」, as well as other forms of which in Unicode, such as 「¿」,「‽」, and 「⸘」.
###### _pinyin_simp.custom.yaml
```yaml
patch:
  punctuator:
    half_shape:
        "?": ["？", "?", "¿", "‽", "⸘"]

```
## Custom Shortcuts
![](https://img.ifengge.cn/images/7a360be5a689b993049aec446de7f49a.png){: .size-left.no-resize}
You can even customize dictionary to provide shortcuts, which means you can type ```/em``` to enter frequently used Emojis, or ```/ar``` to type arrows
###### _pinyin_simp.custom.yaml
```yaml
patch:
  punctuator:
    symbols:
      "/em": [😀,😁,😂,😃,😄,😅,😆,😉,😊,😋,😎,😍,😘,😗,😙,😚,😇,😐,😑,😶,😏,😣,😥,😮,😯,😪,😫,😴,😌,😛,😜,😝,😒,😓,😔,😕,😲,😷,😖,😞,😟,😤,😢,😭,😦,😧,😨,😬,😰,😱,😳,😵,😡,😠]
      "/ar": [⬆,↗,➡,↘,⬇,↙,⬅,↖,↕,↔,↩,↪,⤴,⤵,🔃,🔄,🔙,🔚,🔛,🔜,🔝]
      "/dn": [⌘, ⌥, ⇧, ⌃, ⎋, ⇪, , ⌫, ⌦, ↩︎, ⏎, ↑, ↓, ←, →, ↖, ↘, ⇟, ⇞]
```
  
## Quick Menu
![](https://img.ifengge.cn/images/39226827eded528c633e88445f14a898.png){: .size-right.no-resize}

