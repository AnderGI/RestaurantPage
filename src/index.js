import "./styles.css";
import { registerEvents } from "./Modules/DOMEvents";
import { appendHeaderNavBar, renderHomePage } from "./Modules/DOMRenderer";

window.addEventListener("DOMContentLoaded", function () {
  appendHeaderNavBar();
  //render the home page; the default one
  renderHomePage();
  //register all dom events
  registerEvents();
});
