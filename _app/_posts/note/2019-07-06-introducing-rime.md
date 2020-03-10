---
layout: post
title: RIME - An Intelligent ChsIME
category: note
permalink: note/introducing-rime/
heading-bg: https://s1.yoooooooo.tk/cdn/img/home-watermarks.svg
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
It is also fun that this IME requires dozens of customizing via editing configuration files.

## Symbol Suggestions
![](https://img.akacdn.app/images/5ae7ad79efdf526da83c4faa3958f0c0.png){: .size-right.no-resize}
If you type a symbol like 「?」, RIME will suggest you both full and half-width symbol of 「?」, as well as other forms of which in Unicode, such as 「¿」,「‽」, and 「⸘」.
###### _pinyin_simp.custom.yaml
```yaml
patch:
  punctuator:
    half_shape:
        "?": ["？", "?", "¿", "‽", "⸘"]

```
## Custom Shortcuts
![](https://img.akacdn.app/images/28607c7a7a8a65c598479b61171e8c24.png){: .size-left.no-resize}
You can even customize dictionary to provide shortcuts, which means you can type ```/em``` to enter frequently used Emojis, or ```/ar``` to type arrows
###### _pinyin_simp.custom.yaml
```yaml
patch:
  punctuator:
    symbols:
      "/em": [😀,😁,😂,😃,😄,😅,😆,😉,😊,😋,😎,😍,😘,😗,😙,😚,😇,😐,😑,😶,😏,😣,😥,😮,😯,😪,😫,😴,😌,😛,😜,😝,😒,😓,😔,😕,😲,😷,😖,😞,😟,😤,😢,😭,😦,😧,😨,😬,😰,😱,😳,😵,😡,😠]
      "/ar": [⬆,↗,➡,↘,⬇,↙,⬅,↖,↕,↔,↩,↪,⤴,⤵,🔃,🔄,🔙,🔚,🔛,🔜,🔝]
      "/pc": [⌘, ⌥, ⇧, ⌃, ⎋, ⇪, , ⌫, ⌦, ↩︎, ⏎, ↑, ↓, ←, →, ↖, ↘, ⇟, ⇞]
```
  
## Quick Menu
![](https://img.akacdn.app/images/39226827eded528c633e88445f14a898.png){: .size-right.no-resize}
Defaultly, to reach out this menu you just need to press ``` Control(⌃) + ` ```  

This menu provides several options to change input maneuver, which provides flavored input methods and different language supports. In the submenu of each engine, its option can be fully customized.

This menu can switch between Chinese and English (Of course it can also be done by just pressing ⇧), full or half-width for symbols, suggest Emojis by words or not and even encodings!

After a configuration file has been changed, press ``` ⌃ + ⌥ + ` ``` to take effects.

## Mixed Typing &amp; Super Fast
These pictures demonstrated RIME's mixed input ability. With dictionary customize, RIME can offer special characters input by regular 26 keys. Additional, RIME is super fast either. Its react speed taken me aback when I have my dictionary over 50000 words.

|
:-: | :-:
English and Chinese | Emoji by words
![eng](https://img.akacdn.app/images/a1759048c6440e677b9a995d9bd5ba57.png){: .no-resize} | ![emoji](https://img.akacdn.app/images/126422ef2331c59b6f44852c8f2561d5.png){: .no-resize}
Phonetic | Jargons
![phonetic](https://img.akacdn.app/images/82e7a96c5b19ec3fa70e7e1f2e9fd671.png){: .no-resize} | ![dic](https://img.akacdn.app/images/0344279d9a3b800abc76bc97cc036ce0.png){: .no-resize}

## Intelligent IME Knows My Mind
Multiple language users always have trouble in switching IMEs since they might want to type different languages in different apps. 
RIME will remember what input maneuver is used in each app latestly, and it will adapt apps in the next time.

It can recognize Vim, iTerm, Alfred, etc by default. Besides, you can define it explicitly in configuration files.

## MISC
[Official Site](https://rime.im/)
{: .largetype}
