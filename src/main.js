import Canvas from "./circle/canvas.js";
import Nav from "./nav/nav.js";
import Projects from "./projects/projects.js";
import Scroll from "./scroll.js";
import Skills from "./skills/skills.js";
import Wheel from "./wheel.js";

// Entire Scroll Event
const scroll = new Scroll();
const wheel = new Wheel();

// Home
const canvas = new Canvas();

// Nav
const nav = new Nav();

// All Section Scroll Event
const sections = document.querySelectorAll(".section");

function scrollToSection() {}

window.addEventListener("scroll", scrollToSection);

// Skills Section
const skills = new Skills();

// Projects Section
const projects = new Projects();
