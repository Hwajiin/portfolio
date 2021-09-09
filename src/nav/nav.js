class Nav {
  constructor() {
    this.navBtn = document.querySelector(".nav__btn");
    this.nav = document.querySelector("nav");
    this.setEventListener();
  }

  setEventListener = () => {
    // About nav toggle btn
    this.navBtn.addEventListener("click", () => {
      if (this.nav.classList.contains("open")) {
        this.nav.classList.remove("open");
        this.nav.classList.add("close");
      } else {
        this.nav.classList.add("open");
        this.nav.classList.remove("close");
      }
    });
  };
}

export default Nav;
