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
  // スクロールが到達したらアニメーション
  $(window).on("scroll", function () {
    let animate = $(".animate-fade");
    animate.each(function () {
      let animOffset = $(this).offset().top;
      let scrollPos = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scrollPos > animOffset - windowHeight + windowHeight / 2) {
        let delay = $(this).data("delay");
        $(this).addClass("fade");
        if (delay) {
          $(this).addClass(`fade-delay${delay}`);
        }
      }
    });
  });
});
