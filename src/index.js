import "./styles.css";
import { registerEvents } from "./Modules/DOMEvents";
import { renderHomePage } from "./Modules/DOMRenderer";

window.addEventListener("DOMContentLoaded", function () {
  //render the home page; the default one
  renderHomePage();
  //register all dom events
  registerEvents();
});
