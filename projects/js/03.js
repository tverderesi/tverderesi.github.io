const open = $("#open");
const close = $("#close");
const container = $(".container");

open.click(function () {
  container.addClass("show-nav");
});

close.click(function () {
  container.removeClass("show-nav");
});
