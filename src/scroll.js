// handleScroll function 개선해야됨
// 현재는 단순 구현된 부분

class Scroll {
  constructor() {
    this.sections = document.querySelectorAll(".section");
    this.navList = document.querySelector(".nav__list");
    this.navItems = document.querySelectorAll(".nav__list li");
    this.home = document.querySelector("#home");
    this.skills = document.querySelector("#skills");
    this.projects = document.querySelector("#projects");
    this.aboutMe = document.querySelector("#aboutMe");
    this.navHome = document.querySelector(".nav__home");
    this.navSkills = document.querySelector(".nav__skills");
    this.navProjects = document.querySelector(".nav__projects");
    this.navAboutMe = document.querySelector(".nav__aboutMe");
    this.setEventListener();
  }

  setEventListener = () => {
    this.navList.addEventListener("click", this.handleClick);
    window.addEventListener("scroll", this.handleScroll);
  };

  handleClick = (e) => {
    const target = e.target;
    this.navItems.forEach((item) => item.classList.remove("active"));
    this.sections.forEach((section) => {
      if (target.dataset.scroll === section.dataset.scroll) {
        section.scrollIntoView({ behavior: "smooth" });
        e.target.classList.add("active");
      }
    });
  };

  handleScroll = (e) => {
    this.navItems.forEach((item) => item.classList.remove("active"));
    const homeHeight = this.home.getBoundingClientRect().height;
    const skillsHeight = this.skills.getBoundingClientRect().height;
    const projectsHeight = this.projects.getBoundingClientRect().height;
    const aboutMeHeight = this.aboutMe.getBoundingClientRect().height;
    if (scrollY <= this.home.offsetTop + homeHeight / 2) {
      this.navHome.classList.add("active");
    } else if (scrollY <= this.skills.offsetTop + skillsHeight / 2) {
      this.navSkills.classList.add("active");
    } else if (scrollY <= this.projects.offsetTop + projectsHeight / 2) {
      this.navProjects.classList.add("active");
    } else if (scrollY <= this.aboutMe.offsetTop + aboutMeHeight / 2) {
      this.navAboutMe.classList.add("active");
    }
  };
}

export default Scroll;
