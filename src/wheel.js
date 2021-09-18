const UP = "UP";
const DOWN = "DOWN";

class Wheel {
  constructor() {
    this.sections = document.querySelectorAll(".section");
    this.setEventListener();
  }

  setEventListener = () => {
    this.sections.forEach((section) =>
      section.addEventListener("mousewheel", this.detectDirection)
    );
  };

  detectDirection = (e) => {
    const delta = e.wheelDelta / 120;
    const direction = delta < 0 ? DOWN : UP;

    const sectionsArr = Array(...this.sections);
    const currentSection = e.currentTarget;
    const currentIdx = sectionsArr.findIndex(
      (section) => section === currentSection
    );
    let nextSection;

    if (direction === DOWN && currentIdx < sectionsArr.length - 1) {
      const nextIdx = currentIdx + 1;
      nextSection = sectionsArr[nextIdx];
    } else if (direction === UP && currentIdx > 0) {
      const nextIdx = currentIdx - 1;
      nextSection = sectionsArr[nextIdx];
    } else {
      return;
    }

    this.slideAnimate(nextSection);
  };

  slideAnimate = (nextSection) => {
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };
}

export default Wheel;
