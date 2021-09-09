class Skills {
  constructor() {
    this.header = document.querySelector("header");
    this.home = document.querySelector("#home");
    this.section = document.querySelector("#skills");
    this.box = document.querySelector(".skills__box");
    this.setEventListener();
  }

  setEventListener = () => {
    window.addEventListener("scroll", this.handleScale);
  };

  handleScale = (e) => {
    const HEADER_HEIGHT = this.header.getBoundingClientRect().height;
    const homeHeight = this.home.getBoundingClientRect().height;
    const scrollTop = this.section.offsetTop;
    // const shownHalf = homeHeight / 2;
    // 어디에 맞춰서 트랜지션 제거할지 고민,,,

    if (scrollY >= scrollTop - HEADER_HEIGHT) {
      this.box.classList.add("active");
    } else if (scrollY < HEADER_HEIGHT) {
      this.box.classList.remove("active");
    }
  };
}

export default Skills;
