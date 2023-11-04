const txt = document.querySelectorAll(".text");
const slider = document.querySelector(".slider");
const veil = document.querySelector(".intro");
const header = document.querySelector(".header");
const IconSkill = document.querySelectorAll(".pl-container");
window.addEventListener("load", (ev) => {
  txt.forEach((el) => {
    el.classList.add("show");
  });

  setTimeout(() => {
    slider.classList.add("anim");
  }, 2500);

  setTimeout(() => {
    veil.style.transform = "translateY(-100)";
    veil.style.transition = "0.5";
  }, 3500);

  setTimeout(() => {
    header.style.zIndex = "1";
  }, 3550);

  setTimeout(() => {
    veil.style.zIndex = "-1";
  }, 3600);

  IconSkill.forEach((el) => {
    setTimeout(() => {
      el.classList.add("moveinout");
    }, 3610);
  });
});
