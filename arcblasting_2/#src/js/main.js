$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger,.menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
