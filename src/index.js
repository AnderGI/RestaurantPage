import "./styles.css";
import { registerEvents } from "./Modules/DOMEvents";
import {
  appendFooter,
  appendHomePage,
  appendMainTag,
  appendNavBar,
} from "./Modules/DOMRenderer";
//every second animate the slider
//setInterval(animateSlider, 3000);

window.addEventListener("DOMContentLoaded", function () {
  //append the main elements of the website
  appendNavBar();
  appendMainTag();
  //render the home page; the default one
  appendHomePage();
  //appendFooter();
  //register all dom events
  registerEvents();
});
