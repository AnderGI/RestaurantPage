import { $ } from "./selectors";
import {
  createContactPage,
  createHomePage,
  createMenuPage,
  createHospitalPage,
  createNavBar,
  createFooter,
} from "./DOMCreator";
const contentDiv = $("#content");

function appendNavBar() {
  contentDiv.append(createNavBar());
}

function appendMainTag() {
  contentDiv.appendChild(document.createElement("main"));
}

function appendHomePage() {
  const mainTag = $("#content main");
  if ([...mainTag.classList].length > 0) mainTag.removeAttribute("class");
  mainTag.classList.add("homePage");
  mainTag.replaceChildren();
  console.log(mainTag);

  mainTag.append(...createHomePage());
  mainTag.append(createFooter());
  contentDiv.append(mainTag);
}
function appendMenuPage() {
  createMenuPage();
  //mainTag.appendChild(createMenuPage());
}
function appendContactPage() {
  createContactPage();
  //mainTag.appendChild(createContactPage());
}
function appendHospitalPage() {
  createHospitalPage();
  //mainTag.appendChild(createHospitalPage());
}

export {
  appendHomePage,
  appendContactPage,
  appendMenuPage,
  appendHospitalPage,
  appendNavBar,
  appendMainTag,
};
