import { $ } from "./selectors";
import { createHeaderNavBar, createFooter, createHomePage } from "./DOMCreator";

const contentDiv = $("#content");

function appendHeaderNavBar() {
  contentDiv.append(createHeaderNavBar());
}

function appendMainTag() {
  contentDiv.appendChild(document.createElement("main"));
}

function renderHomePage() {
  //add header navbar to container
  appendHeaderNavBar();
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

export { renderHomePage };
