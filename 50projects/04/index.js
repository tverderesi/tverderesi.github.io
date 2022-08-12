search = $(".search");
btn = $(".btn");
btnicon = $(".btn i");
input = $(".input");
darkmode = $(".darkmode");
body = $("body");
darkmodeicon = $("button.darkmode i");

btn.on("click", function () {
  search.toggleClass("active");
  input.focus();
});

darkmode.on("click", function () {
  body.toggleClass("dark");
  darkmode.toggleClass("dark");
  btn.toggleClass("dark white-text");
  input.toggleClass("dark");
  darkmodeicon.toggleClass("white-text");
  btnicon.toggleClass("white-text");

  darkmodeicon.hasClass("fa-moon")
    ? darkmodeicon.removeClass("fa-moon").addClass("fa-sun")
    : darkmodeicon.removeClass("fa-sun").addClass("fa-moon");

  if (body.hasClass("dark")) {
    body.css(
      "background-image",
      "url(https://images.pexels.com/photos/3389618/pexels-photo-3389618.jpeg)"
    );
  } else {
    body.css(
      "background-image",
      "url(https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg)"
    );
  }
});
