const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
    } else {
      RemoveActiveClasses();
      panel.classList.add("active");
    }
  });
});

function RemoveActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}
