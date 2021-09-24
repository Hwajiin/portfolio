class Projects {
  constructor() {
    this.projectsList = document.querySelector(".projects__list");
    this.projects = document.querySelectorAll(".projects__item");
    this.detailBackground = document.querySelector(".detail__background");
    this.closeBtn = document.querySelector(".close-btn");
    this.detailData = this.detailBackground.querySelector(".detail__data");
    this.projectData;
    this.setEventListener();
    this.fetchData();
    this.isDown = false;
    this.startX;
    this.scrollLeft;
  }

  setEventListener = () => {
    this.projectsList.addEventListener("mousedown", (e) => {
      e.preventDefault();
      this.isDown = true;
      this.startX = e.pageX - this.projectsList.offsetLeft;
      this.scrollLeft = this.projectsList.scrollLeft;
    });

    this.projectsList.addEventListener("mousemove", (e) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.projectsList.offsetLeft;
      const walk = x - this.startX;
      this.projectsList.scrollLeft = this.scrollLeft - walk;
      console.log(walk);
    });

    this.projectsList.addEventListener("mouseup", () => (this.isDown = false));
    this.projectsList.addEventListener("mouseout", () => (this.isDown = false));

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

  moveScroll = () => {};

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
