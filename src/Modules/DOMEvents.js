//Register events and call renderFunctions (call DOMelement creators and append it to main)
import { $$ } from "./selectors";

import {
  renderContactUsPage,
  renderHomePage,
  renderMenuPage,
  renderNearestHospitalPage,
} from "./DOMRenderer";

const callRenderFunctions = {
  home: renderHomePage,
  menu: renderMenuPage,
  "contact us": renderContactUsPage,
  "nearest hospital": renderNearestHospitalPage,
};

function registerNavLinkClicked() {
  const navLinks = [...$$("#content a.navLink")];
  //remove the selected classlists from the one that have them and add to the one that is being clicked
  navLinks
    .filter((link) => link.classList.contains("selected"))
    .forEach((link) => link.classList.remove("selected"));

  const clikedLink = this;

  clikedLink.classList.add("selected");

  callRenderFunctions[clikedLink.textContent.toLowerCase()]();
}

function dishesHoveredClassToggler(e) {
  const element = e.target;

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

export { registerNavLinkClicked, dishesHoveredClassToggler };
