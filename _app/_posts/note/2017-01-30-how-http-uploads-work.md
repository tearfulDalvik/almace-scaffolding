---
layout: post
title: How HTTP Uploads Work
category: note
permalink: note/how-http-uploads-work/
tags: notes
last-modified: 2017112423
---

Firstly create a file named ```upload.html```：
```html
<html>
    <body>
        <form action="https://localhost/upload.php" method="post"enctype="multipart/form-data">
            <label for="file">Filename:</label>
            <input type="file" name="file" id="file" /> 
            <br />
            <input type="submit" name="submit" value="Submit" />
        </form>
    </body>
</html>
```

Then create a file named ```upload.php``` on your server:

```php
<?php
    if ($_FILES["file"]["error"] > 0)
    {
        echo "ERROR : " . $_FILES["file"]["error"];
    }
    else
    {
        echo "ok";
    }
?>
```
You should use a packet capture app like [Fiddler](http://www.telerik.com/fiddler)

Then open this HTML file in your browser, you'll find an upload body in Fiddler after uploading a file. 

It is worth noting that there is a header like ```Content-Type: multipart/form-data; boundary=----WebKitFormBoundarymqPli0Nio8W8mU3Z```, this is an important part when uploading a file. Boundary parameters are used to split files if you upload more than 1 files once. (Like & in GET), and it can be defined as any characters. (According to [html - What is the boundary in multipart/form-data? - Stack Overflow](https://stackoverflow.com/questions/3508338/what-is-the-boundary-in-multipart-form-data))

## So the format is

```
--boundary
Content-Disposition: form-data; name="file"; filename="FILE NAME"
Content-Type: MIME Type

UPLOAD CONTENT

--boundary
Content-Disposition: form-data; name="submit"

Submit
--boundary--
```