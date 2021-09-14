class Projects {
  constructor() {
    this.projects = document.querySelectorAll(".projects__item");
    this.detailBackground = document.querySelector(".detail__background");
    this.closeBtn = document.querySelector(".close-btn");
    this.detailData = this.detailBackground.querySelector(".detail__data");
    this.projectData;
    this.setEventListener();
    this.fetchData();
  }

  setEventListener = () => {
    this.projects.forEach((project) =>
      project.addEventListener("mouseenter", this.removeFilter)
    );

    this.projects.forEach((project) =>
      project.addEventListener("mouseleave", this.addFilter)
    );

    this.projects.forEach((project) =>
      project.addEventListener("click", this.showDetail)
    );

    this.closeBtn.addEventListener("click", () => {
      this.detailBackground.classList.remove("showDetail");
    });
  };

  removeFilter = (e) => {
    const project = e.currentTarget;
    const thumbnail = project.querySelector(".projects__item__thumbnail");
    thumbnail.classList.add("colorIn");
  };

  addFilter = (e) => {
    const project = e.currentTarget;
    const thumbnail = project.querySelector(".projects__item__thumbnail");
    thumbnail.classList.remove("colorIn");
  };

  showDetail = async (e) => {
    const project = e.currentTarget;
    if (!this.detailBackground.classList.contains("showDetail")) {
      this.detailBackground.classList.add("showDetail");
    }

    const target = this.projectData.projects.find(
      (item) => item.title === project.dataset.title
    );

    const html = this.createHTML(target);
    this.detailData.innerHTML = html;

    const thumbnail = this.detailData.querySelector(".detail__thumbnail");
    if (thumbnail) {
      thumbnail.style.backgroundImage = `url(${target.image})`;
    }
  };

  createHTML = (data) => {
    return `
      <div class="detail__thumbnail"></div>
      <div class="detail__metadata">
        <h1 class="detail__title">${data.title}</h1>
        <p>${data.since}</p>
        <button class="deploy">${data.path}</button>
      </div>
    `;
  };

  getData = async () => {
    const res = await fetch("src/data/project_data.json");
    const data = await res.json();
    return data;
  };

  fetchData = async () => {
    this.projectData = await this.getData();
  };
}

export default Projects;
