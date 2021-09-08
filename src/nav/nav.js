class Nav {
  constructor() {
    this.navBtn = document.querySelector(".nav__btn");
    this.nav = document.querySelector("nav");
    this.setEventListener();
  }

  setEventListener = () => {
    this.navBtn.addEventListener("click", () => {
      this.nav.classList.toggle("open");
    });
  };
}

export default Nav;
