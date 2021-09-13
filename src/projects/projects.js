class Projects {
  constructor() {
    this.projects = document.querySelectorAll(".projects__item");
    this.setEventListener();
  }

  setEventListener = () => {
    this.projects.forEach((project) =>
      project.addEventListener("mouseenter", this.removeFilter)
    );
    this.projects.forEach((project) =>
      project.addEventListener("mouseleave", this.addFilter)
    );
  };

  removeFilter = (e) => {
    const project = e.target;
    const thumbnail = project.querySelector(".projects__item__thumbnail");
    thumbnail.classList.add("colorIn");
  };

  addFilter = (e) => {
    const project = e.target;
    const thumbnail = project.querySelector(".projects__item__thumbnail");
    thumbnail.classList.remove("colorIn");
  };
}

export default Projects;
