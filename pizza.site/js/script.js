$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger,.menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
$(document).ready(function () {
  $(".popup-toggle").click(function (event) {
    $(".toggle-right").toggleClass("active");
    $(".toggle-left").toggleClass("active");
    $(".toggle-right-bg").toggleClass("active");
    $(".toggle-left-bg").toggleClass("active");
    $("span.big").toggleClass("active");
    $("span.little").toggleClass("active");
    $(".image-b").toggleClass("active");
    $(".image-l").toggleClass("active");
  });
});
