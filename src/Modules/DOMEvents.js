//Register events and call renderFunctions (call DOMelement creators and append it to main)
import { $$ } from "./selectors";
import { scrolledClassHeader } from "./addHeaderBackground";
import { renderHomePage, renderMenuPage } from "./DOMRenderer";

const callRenderFunctions = {
  home: renderHomePage,
  menu: renderMenuPage,
  "contact us": console.log("contact"),
  "nearest hospital": console.log("hospital"),
};

export function registerNavLinkClicked() {
  const navLinks = [...$$("#content a.navLink")];
  navLinks
    .filter((link) => link.classList.contains("selected"))
    .forEach((link) => link.classList.remove("selected"));

  const clikedLink = this;

  if (!clikedLink.classList.contains("selected"))
    clikedLink.classList.add("selected");

  callRenderFunctions[clikedLink.textContent.toLowerCase()]();
}

export function dishesHoveredClassToggler(e) {
  const element = e.target;
  //dish-details
  //dish-image
  if (element.classList.contains("hovered")) {
    element.classList.remove("hovered");

    if (element.classList.contains("dish-image")) {
      const nextElementSibling = element.nextElementSibling;
      nextElementSibling.classList.add("hovered");
    }

    if (element.classList.contains("dish-details")) {
      const previousElementSibling = element.previousElementSibling;
      previousElementSibling.classList.add("hovered");
    }
  }
}
