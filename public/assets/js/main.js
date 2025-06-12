"use strict";

$(function () {
  // スムーススクロール
  $('a[href^="#"]').on("click", function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // matchHeight
  $(".mh").matchHeight();
});
