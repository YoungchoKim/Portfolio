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
