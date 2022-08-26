const LoadText = $(".loading-text");
const bg = $(".bg");
const title = $("h1");

const load_anim = $(".loading-anim");
const progress_bar = $(".progress-bar");

let load = 0;
$("body").on("click", function (param) {
  loader = new Promise(resolve => {
    const width = document.documentElement.clientWidth / 2;
    let interval = setInterval(() => {
      load++;
      LoadText.html(`${load}%`);
      LoadText.css("opacity", 1 - load / 100);
      title.css("opacity", load / 100);
      bg.css("filter", `blur(${30 - (30 * load) / 100}px)`);

      load_anim.css("width", 0.01 * width * load);
      load_anim.css("opacity", 1 - load / 100);
      progress_bar.css("opacity", 1 - load / 100);
      if (load > 99) {
        clearInterval(interval);
        resolve();
      }
    }, 30);
  });
  loader.then(unload);
});

function unload() {
  const width = document.documentElement.clientWidth / 2;
  let interval2 = setInterval(() => {
    load--;
    LoadText.html(`${load}%`);
    LoadText.css("opacity", 1 - load / 100);
    title.css("opacity", load / 100);
    bg.css("filter", `blur(${30 - (30 * load) / 100}px)`);
    load_anim.css("width", (width * load) / 100);
    load_anim.css("opacity", 1 - load / 100);
    progress_bar.css("opacity", 1 - load / 100);
    if (load == 0) {
      clearInterval(interval2);
    }
  }, 30);
}
