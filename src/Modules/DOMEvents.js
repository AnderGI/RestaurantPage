//Register events and call renderFunctions (call DOMelement creators and append it to main)
import { $$ } from "./selectors";
import {
  appendHomePage,
  appendContactPage,
  appendMenuPage,
  appendHospitalPage,
} from "./DOMRenderer";

const navLinks = [...$$("#content a.navLink")];

const callRenderFunctions = {
  home: appendHomePage,
  menu: appendMenuPage,
  "contact us": appendContactPage,
  "nearest hospital": appendHospitalPage,
};

function registerNavLinkClicked() {
  navLinks
    .filter((link) => link.classList.contains("selected"))
    .forEach((link) => link.classList.remove("selected"));

  const clikedLink = this;

  if (!clikedLink.classList.contains("selected"))
    clikedLink.classList.add("selected");

  callRenderFunctions[clikedLink.textContent.toLowerCase()]();
}

export function registerEvents() {
  navLinks.forEach((link) => {
    link.addEventListener("click", registerNavLinkClicked);
  });
}
