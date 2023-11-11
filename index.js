let drop = document.querySelectorAll(".drop");
drop.forEach((e) => {
  e.addEventListener("click", function () {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      e.firstElementChild.innerHTML =
        '<img src="images/icon-arrow-up.svg" alt="">';
    } else {
      e.firstElementChild.innerHTML =
        '<img src="images/icon-arrow-down.svg" alt="">';
    }
  });
});
let login = document.querySelector(".login");
let menu = document.querySelector(".menu");
menu.addEventListener("click", function () {
  document.body.classList.toggle("close");
  if (document.body.classList.contains("close")) {
    menu.innerHTML =
      '<img src="images/icon-close-menu.svg" alt="" class="mob open" />';
  } else {
    menu.innerHTML =
      '<img src="images/icon-menu.svg" alt="" class="mob open" />';
  }
});
