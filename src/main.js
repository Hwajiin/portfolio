import Nav from "./nav/nav.js";
import Skills from "./skills/skills.js";

// Nav
const nav = new Nav();

// All Section Scroll Event
const sections = document.querySelectorAll(".section");

function scrollToSection() {}

window.addEventListener("scroll", scrollToSection);

// Skills Section
const skills = new Skills();
