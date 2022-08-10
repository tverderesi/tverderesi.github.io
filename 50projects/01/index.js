const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("active")) {
      console.log("found you bitch");
      panel.classList.remove("active");
    } else {
      RemoveActiveClasses();
      panel.classList.add("active");
      console.log("cliquei no painel");
    }
  });
});
// for (prop of panel.classList) { if (prop == "active") { panel.classList.remove("active");
//   console.log("cheguei no if"); } else { RemoveActiveClasses(); panel.classList.add("active");
//     console.log(panel.classList); console.log("cheguei no else");

function RemoveActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
