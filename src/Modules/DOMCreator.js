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
function createMenuPage() {
  console.log("Menu Page");
}
function createContactPage() {
  console.log("Contact Page");
}
function createHospitalPage() {
  console.log("Hospital Page");
}

export {
  createHomePage,
  createContactPage,
  createMenuPage,
  createHospitalPage,
};
