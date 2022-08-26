const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const color_picker = document.getElementById("color-picker");
const okay = document.getElementById("okay");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive < circles.length ? currentActive++ : circles.length;
  update();
});

prev.addEventListener("click", () => {
  currentActive > 1 ? currentActive-- : 1;
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    idx < currentActive ? circle.classList.add("active") : circle.classList.remove("active");
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

if (okay != null) {
  okay.addEventListener("click", () => {
    let color_string = String(color_picker.value);
    let btn_color = tinycolor(color_string);
    if (btn_color.isLight()) {
      document.documentElement.style.setProperty("--bg-color", "rgb(83, 83, 83)");
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--btn-text-color", "black");
    }
    if (btn_color.isDark()) {
      document.documentElement.style.setProperty("--bg-color", " white");
      document.documentElement.style.setProperty("--text-color", "black");
      document.documentElement.style.setProperty("--btn-text-color", "white");
    }

    document.documentElement.style.setProperty("--line-border-fill", `${color_picker.value}`);
  });
}
