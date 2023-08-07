// window 글로벌 객체. 브라우저에서 기본으로 제공
// window.document.querySelector();

const header = document.querySelector(".header");
console.log(header);
const headerHeight = header.getBoundingClientRect().height;
console.log(headerHeight);

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
console.log("home", homeHeight);

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
  console.log(home.style.opacity);
});

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});
