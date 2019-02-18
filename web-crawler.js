var Crawler = require("js-crawler");

new Crawler().configure({depth: 2})
.crawl("https://www.google.co.kr/search?hl=ko&tbm=isch&source=hp&biw=1123&bih=969&ei=VStlXOv1KciR8wXtq5agDQ&q=%EB%82%98%EB%AC%B4&oq=%EB%82%98%EB%AC%B4&gs_l=img.3..35i39j0l9.1252.1833..1978...0.0..2.137.502.0j4......2....1..gws-wiz-img.....0.lJzGPHovgGE", function onSuccess(page) {
  console.log(page.url);
});