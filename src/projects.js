"use strict";

const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  if (filter == null) {
    return;
  }
  handleActiveSelection(e.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  // 프로젝트 필터링
  projects.forEach((project) => {
    if (filter === "all" || project.dataset.type == filter) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
}
