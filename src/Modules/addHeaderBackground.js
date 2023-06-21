import { $ } from "./selectors";
export function scrolledClassHeader() {
  const header = $("div#content header");
  const headerHeight = header.offsetHeight;
  //when the distance from scroll of the y axis is bigger than the header navbar height change its color
  if (window.scrollY > headerHeight) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
}
