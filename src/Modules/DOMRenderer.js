import { $, $$ } from "./selectors";
import { registerNavLinkClicked } from "./DOMEvents";
import { scrolledClassHeader } from "./addHeaderBackground";
import {
  createHeaderNavBar,
  createFooter,
  createHomePage,
  createMenuPageDishes,
  createNearestHospitalPage,
} from "./DOMCreator";
import { dishesHoveredClassToggler } from "./DOMEvents";
import { renderMap } from "./GoogleMaps";

const contentDiv = $("#content");

function appendHeaderNavBar() {
  contentDiv.append(createHeaderNavBar());
  const navLinks = [...$$("header a")];
  navLinks.forEach((link) => {
    link.addEventListener("click", registerNavLinkClicked);
  });
  window.addEventListener("scroll", scrolledClassHeader);
}

function appendMainTag() {
  contentDiv.appendChild(document.createElement("main"));
}

function renderHomePage() {
  //append main to container
  appendMainTag();

  //render the home page (default) in main
  const mainTag = $("#content main");
  mainTag.replaceChildren();
  if (mainTag.classList.contains("menu")) {
    mainTag.classList.remove("menu");
  }
  mainTag.append(...createHomePage());

  //add footer in main
  mainTag.append(createFooter());
  contentDiv.append(mainTag);
}

function renderMenuPage() {
  const mainTag = $("#content main");
  mainTag.replaceChildren();
  mainTag.setAttribute("class", "menu");
  mainTag.append(...createMenuPageDishes());
  mainTag.append(createFooter());

  //listen to events
  [...$$("div.dish div")].forEach((dish) => {
    dish.addEventListener("mouseover", (e) => {
      dishesHoveredClassToggler(e);
    });
  });
}

function renderNearestHospitalPage() {
  const mainTag = $("#content main");
  mainTag.replaceChildren();
  if (mainTag.classList.contains("menu")) {
    mainTag.classList.remove("menu");
  }
  mainTag.append(createNearestHospitalPage());
  mainTag.append(createFooter());
  //render map
  renderMap();
}
export {
  appendHeaderNavBar,
  renderHomePage,
  renderMenuPage,
  renderNearestHospitalPage,
};
