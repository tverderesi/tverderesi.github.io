const LoadText = $(".loading-text");
const bg = $(".bg");
const title = $("h1");

let load = 0;

let interval = setInterval(() => {
  load++;
  LoadText.html(`${load}%`);
  LoadText.css("opacity", 1 - load / 100);
  title.css("opacity", load / 100);
  bg.css("filter", `blur(${30 - (30 * load) / 100}px)`);

  if (load > 99) {
    clearInterval(interval);
  }
}, 30);
