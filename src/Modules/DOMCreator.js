function createHeaderNavBar() {
  const header = document.createElement("header");
  const generalNav = document.createElement("nav");
  const leftNav = document.createElement("nav");
  const leftNavUl = document.createElement("ul");

  for (let list = 1; list <= 3; list++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("class", "navLink");
    if (list === 1) {
      a.classList.add("selected");
      a.append("Home");
    } else if (list === 2) {
      a.append("Menu");
    } else {
      a.append("Contact Us");
    }

    li.appendChild(a);
    leftNavUl.append(li);
  }
  leftNav.appendChild(leftNavUl);
  generalNav.appendChild(leftNav);

  const navbarLogo = document.createElement("h1");
  navbarLogo.setAttribute("id", "logo");
  navbarLogo.append("Heart Attack Grill");
  generalNav.appendChild(navbarLogo);

  const rightNavbar = document.createElement("nav");
  rightNavbar.innerHTML =
    '<ul><li><a href="#" class="navLink">Nearest Hospital</a></li></ul>';
  generalNav.appendChild(rightNavbar);

  header.appendChild(generalNav);

  return header;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = "<p>Tempting fate, one burger at a time.</p>";
  return footer;
}

function createHomePage() {
  //Main Banner
  const mainBanner = document.createElement("section");
  mainBanner.setAttribute("id", "mainBanner");
  const bannerBlockquote = document.createElement("blockquote");
  bannerBlockquote.append("Fighting anorexia since 2005");
  mainBanner.appendChild(bannerBlockquote);

  //Disclaimer Section
  const disclaimerSection = document.createElement("section");
  disclaimerSection.setAttribute("id", "disclaimer");

  const disclaimerTitle = document.createElement("h1");
  disclaimerTitle.append("Disclaimer");
  disclaimerSection.append(disclaimerTitle);

  const disclaimerBlockquote = document.createElement("blockquote");
  disclaimerBlockquote.append(
    "Our dishes defy the laws of portion control, cholesterol sanity, and common sense."
  );
  disclaimerSection.append(disclaimerBlockquote);

  //Disclaimer Form
  const disclaimerForm = document.createElement("form");
  disclaimerForm.setAttribute("action", "#");
  disclaimerForm.setAttribute("method", "get");

  const formSection = document.createElement("section");

  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.setAttribute("name", "disclaimer");
  inputCheckbox.setAttribute("value", "checked");
  inputCheckbox.setAttribute("id", "disclaimer");
  formSection.appendChild(inputCheckbox);

  const labelForCheckbox = document.createElement("label");
  labelForCheckbox.setAttribute("for", "disclaimer");
  labelForCheckbox.innerHTML =
    'I have read the <a href="#">disclaimer</a> and agreed to the <a href="#">terms of service</a>';

  formSection.appendChild(labelForCheckbox);
  disclaimerForm.appendChild(formSection);

  const inputSubmit = document.createElement("input");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("value", "I Accept");
  disclaimerForm.appendChild(inputSubmit);

  disclaimerSection.appendChild(disclaimerForm);

  return [mainBanner, disclaimerSection];
}

export { createHomePage, createHeaderNavBar, createFooter };
