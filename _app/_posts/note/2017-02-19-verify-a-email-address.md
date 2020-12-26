---
layout: post
title: Verify A Real Email Address
category: note
permalink: note/email-address-verify/
tags: notes
last-modified: 201712071140
---

> 哈哈哈哈真是涨姿势了，我只是做下搬运，可以点击查看 [原文](https://haacked.com/archive/2007/08/21/i-knew-how-to-validate-an-email-address-until-i.aspx/)

## E-Mail 地址还可以是这些？？
- Abc\@def@example.com
- Fred\ Bloggs@example.com
- Joe.\\Blow@example.com
- "Abc@def"@example.com
- "Fred Bloggs"@example.com
- customer/department=shipping@example.com
- $A12345@example.com
- !def!xyz%abc@example.com
- _somename@example.com

## 作为程序员，我们应该如何写正则
还是有闲不住的人把它弄出来了：

```java
public void EmailTests(string email, bool expected)
{
  string pattern = @"^(?!\.)(""([^""\r\\]|\\[""\r\\])*""|" 
    + @"([-a-z0-9!#$%&'*+/=?^_`{|}~]|(?<!\.)\.)*)(?<!\.)" 
    + @"@[a-z0-9][\w\.-]*[a-z0-9]\.[a-z][a-z\.]*[a-z]$";

  Regex regex = new Regex(pattern, RegexOptions.IgnoreCase);
  Assert.AreEqual(expected, regex.IsMatch(email)
    , "Problem with '" + email + "'. Expected "  
    + expected + " but was not that.");
}
```

 运行结果：
```
[RowTest]
[Row(@"NotAnEmail", false)]
[Row(@"@NotAnEmail", false)]
[Row(@"""test\\blah""@example.com", true)]
[Row(@"""test\blah""@example.com", false)]
[Row("\"test\\\rblah\"@example.com", true)]
[Row("\"test\rblah\"@example.com", false)]
[Row(@"""test\""blah""@example.com", true)]
[Row(@"""test""blah""@example.com", false)]
[Row(@"customer/department@example.com", true)]
[Row(@"$A12345@example.com", true)]
[Row(@"!def!xyz%abc@example.com", true)]
[Row(@"_Yosemite.Sam@example.com", true)]
[Row(@"~@example.com", true)]
[Row(@".wooly@example.com", false)]
[Row(@"wo..oly@example.com", false)]
[Row(@"pootietang.@example.com", false)]
[Row(@".@example.com", false)]
[Row(@"""Austin@Powers""@example.com", true)]
[Row(@"Ima.Fool@example.com", true)]
[Row(@"""Ima.Fool""@example.com", true)]
[Row(@"""Ima Fool""@example.com", true)]
[Row(@"Ima Fool@example.com", false)]
```

厉害了我的哥
