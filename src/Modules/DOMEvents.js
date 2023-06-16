//Register events and call renderFunctions (call DOMelement creators and append it to main)
import { $$ } from "./selectors";
import { scrolledClassHeader } from "./addHeaderBackground";
import { renderHomePage } from "./DOMRenderer";

const callRenderFunctions = {
  home: renderHomePage,
  menu: console.log("menu"),
  "contact us": console.log("contact"),
  "nearest hospital": console.log("hospital"),
};

function registerNavLinkClicked() {
  const navLinks = [...$$("#content a.navLink")];
  navLinks
    .filter((link) => link.classList.contains("selected"))
    .forEach((link) => link.classList.remove("selected"));

  const clikedLink = this;

  if (!clikedLink.classList.contains("selected"))
    clikedLink.classList.add("selected");

  //callRenderFunctions[clikedLink.textContent.toLowerCase()]();
}

export function registerEvents() {
  const navLinks = [...$$("#content a.navLink")];
  window.addEventListener("scroll", scrolledClassHeader);
  navLinks.forEach((link) => {
    link.addEventListener("click", registerNavLinkClicked);
  });
}
