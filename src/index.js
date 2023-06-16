import "./styles.css";
import { scrolledClassHeader } from "./Modules/addHeaderBackground";
import { registerEvents } from "./Modules/DOMEvents";
//every second animate the slider
//setInterval(animateSlider, 3000);
window.addEventListener("scroll", scrolledClassHeader);
window.addEventListener("DOMContentLoaded", registerEvents);
