import { $ } from "./selectors";
import {
  createContactPage,
  createHomePage,
  createMenuPage,
  createHospitalPage,
} from "./DOMCreator";
const mainTag = $("#content main");

function appendHomePage() {
  mainTag.removeAttribute("class");
  mainTag.classList.add("homePage");

  mainTag.append(...createHomePage());
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
};
