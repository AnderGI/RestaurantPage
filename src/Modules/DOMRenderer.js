import { $, $$ } from "./selectors";
import { registerNavLinkClicked } from "./DOMEvents";
import { scrolledClassHeader } from "./addHeaderBackground";
import {
  createHeaderNavBar,
  createFooter,
  createHomePage,
  createMenuPageDishes,
  createNearestHospitalPage,
  createContactUsPage,
} from "./DOMCreator";
import { dishesHoveredClassToggler } from "./DOMEvents";
import { renderMap } from "./GoogleMaps";

const contentDiv = $("#content");

function emptyMainContainer() {
  const mainTag = $("#content main");
  mainTag.replaceChildren();
}

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
  emptyMainContainer();

  //render the home page (default) in main

  if (mainTag.classList.contains("menu")) {
    mainTag.classList.remove("menu");
  }
  mainTag.append(...createHomePage());

  //add footer in main
  mainTag.append(createFooter());
  contentDiv.append(mainTag);
}

function renderMenuPage() {
  emptyMainContainer();
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
  emptyMainContainer();
  if (mainTag.classList.contains("menu")) {
    mainTag.classList.remove("menu");
  }
  if (mainTag.classList.contains("contactUs")) {
    mainTag.classList.remove("menu");
  }
  mainTag.append(createNearestHospitalPage());
  mainTag.append(createFooter());
  //render map
  renderMap();
}

function renderContactUsPage() {
  emptyMainContainer();
  if (mainTag.classList.contains("menu")) {
    mainTag.classList.remove("menu");
  }
  mainTag.classList.add("contactUs");
  mainTag.append(createContactUsPage());
  mainTag.append(createFooter());
}
export {
  appendHeaderNavBar,
  appendMainTag,
  renderHomePage,
  renderMenuPage,
  renderNearestHospitalPage,
  renderContactUsPage,
};
