import { $, $$ } from "./selectors";
import {
  createHeaderNavBar,
  createFooter,
  createHomePage,
  createMenuPageDishes,
} from "./DOMCreator";
import { dishesHoveredClassToggler } from "./DOMEvents";

const contentDiv = $("#content");

function appendHeaderNavBar() {
  contentDiv.append(createHeaderNavBar());
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

export { appendHeaderNavBar, renderHomePage, renderMenuPage };
