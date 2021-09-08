class Nav {
  constructor() {
    this.navBtn = document.querySelector(".nav__btn");
    this.setEventListener();
  }

  setEventListener = () => {
    this.navBtn.addEventListener("click", () => {
      console.log("hh");
    });
  };
}

export default Nav;
