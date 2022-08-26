const container = $(".container");
const fakebtn = $("#fake-btn");
const content = $("#fake-text");
let i = 0;

fakebtn.click(function () {
  container.toggleClass("show-nav");
});

for (i; i <= 100; i++) {
  let width = Math.floor(Math.random() * 20);
  width < 5 ? (width = 5) : "";
  content.append(`<div class="fake-text" style="width: ${width}%;"></div>`);
}
