---
layout: post
title: Build your own site!
category: work
permalink: work/build-your-site/
tags: works_community
---
[Download Printable PDF ➡︎](https://accelerate.akacdn.app/cdn/obj/build-your-own-site.pdf)
{: .largetype}
## Preview
<script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.2.228/build/pdf.min.js" integrity="sha256-+toLFVggqOkqWdaf1sm90mfo7CQo8OW2J31Bl+B/KKM=" crossorigin="anonymous"></script>
<div id="pdf-canvases" class="size-large"></div>
<script async defer>
// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url = 'https://accelerate.akacdn.app/cdn/obj/build-your-own-site.pdf';

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.2.228/build/pdf.worker.min.js';

// Asynchronous download of PDF
var loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(function(pdf) {
  // Fetch the first page
  for(var pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
  pdf.getPage(pageNumber).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport({scale: scale});

    // Prepare canvas using PDF page dimensions
    var container = document.getElementById('pdf-canvases');
    var canvas = document.createElement('canvas');
    container.appendChild(canvas);
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);
    renderTask.promise.then(function () {
      console.log('Page rendered');
    });
  });
  }
}, function (reason) {
  console.error(reason);
});
</script>