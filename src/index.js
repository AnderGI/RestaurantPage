import "./styles.css";
import { registerEvents } from "./Modules/DOMEvents";
import {
  appendHeaderNavBar,
  appendMainTag,
  renderHomePage,
} from "./Modules/DOMRenderer";

window.addEventListener("DOMContentLoaded", function () {
  appendHeaderNavBar();
  appendMainTag();
  //render the home page; the default one
  renderHomePage();
});
