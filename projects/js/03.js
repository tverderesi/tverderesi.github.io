const open = $("#open");
const close = $("#close");
const container = $(".container");

open.click(function () {
  container.addClass("show-nav");
  console.log("oi");
});

close.click(function () {
  container.removeClass("show-nav");
});
