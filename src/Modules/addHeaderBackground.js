import { $ } from "./selectors";
export function scrolledClassHeader() {
  const header = $("div#content header");
  const headerHeight = header.offsetHeight;
  if (window.scrollY > headerHeight) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
}
