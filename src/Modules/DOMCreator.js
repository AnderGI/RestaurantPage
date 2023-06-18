import BurgerEat from "../images/burger_eat.jpg";
import Burger from "../images/burger.jpg";
import Burger1 from "../images/burger1.png";
import Burger2 from "../images/burger2.png";
import Burger3 from "../images/burger3.png";
import Burger4 from "../images/burger4.png";
import Burger5 from "../images/burger5.png";
import Burger7 from "../images/burger7.png";
import Burger8 from "../images/burger8.png";
import Hotdog from "../images/hotdog.jpg";
import Shake from "../images/shake.jpg";
import Fries from "../images/frenchFries.jpg";
import Chessecake from "../images/chesseCake.jpg";

const menuItems = [
  {
    name: "Single Bypass Burger",
    price: 9.7,
    discount: false,
    extraIngredients: "5 bacon slices",
    extraIngredientsPrice: 0.92,
    image: Burger,
  },
  {
    name: "Double Bypass Burger",
    price: 11.55,
    discount: false,
    extraIngredients: "10 bacon slices",
    extraIngredientsPrice: 1.85,
    image: Burger1,
  },
  {
    name: "Triple Bypass Burger",
    price: 13.63,
    discount: false,
    extraIngredients: "15 bacon slices",
    extraIngredientsPrice: 2.75,
    image: Burger2,
  },
  {
    name: "Quadruple Bypass Burger",
    price: 15.01,
    discount: false,
    extraIngredients: "20 bacon slices",
    extraIngredientsPrice: 3.7,
    image: Burger3,
  },
  {
    name: "Quintuple Bypass Burger",
    price: 18.01,
    discount: false,
    extraIngredients: "25 bacon slices",
    extraIngredientsPrice: 4.62,
    image: Burger4,
  },
  {
    name: "Sextuple Bypass Burger",
    price: 20.09,
    discount: false,
    extraIngredients: "30 bacon slices",
    extraIngredientsPrice: 5.64,
    image: Burger5,
  },
  {
    name: "Septuple Bypass Burger",
    price: 21.02,
    discount: false,
    extraIngredients: "35 bacon slices",
    extraIngredientsPrice: 6.47,
    image: Burger7,
  },
  {
    name: "Octuple Bypass Burger",
    price: 24.02,
    discount: false,
    extraIngredients: "40 bacon slices",
    extraIngredientsPrice: 7.39,
    image: Burger8,
  },
  {
    name: "1/2 Pound Coromary Dog",
    price: 9.47,
    discount: false,
    extraIngredients: "10 bacon slices",
    extraIngredientsPrice: 1.85,
    image: Hotdog,
  },
  {
    name: "Curvyliner Fries",
    price: 9.65,
    discount: false,
    extraIngredients: "Extra Butter Souce",
    extraIngredientsPrice: 2.98,
    image: Fries,
  },
  {
    name: "ButterFat Shake",
    price: 4.62,
    discount: false,
    extraIngredients: "Extra butter fat",
    extraIngredientsPrice: 4.2,
    image: Shake,
  },
  {
    name: "1/2 Fatty Chessecake with white chocolateand organic butter",
    price: 16.25,
    discount: false,
    extraIngredients: "Healthy berries buried with chocolate",
    extraIngredientsPrice: 5.7,
    image: Chessecake,
  },
];
//11
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
  const img = document.createElement("img");
  img.src = BurgerEat;
  mainBanner.append(img);
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

function createMenuPageDishes() {
  const dishes = [];
  for (const item of menuItems) {
    const {
      name,
      price,
      discount,
      extraIngredients,
      extraIngredientsPrice,
      image,
    } = item;

    const dishDiv = document.createElement("div");
    dishDiv.setAttribute("class", "dish");

    const dishImageDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = image;
    dishImageDiv.append(img);
    dishImageDiv.setAttribute("class", "dish-image");
    dishDiv.append(dishImageDiv);

    const dishDetailsDiv = document.createElement("div");
    dishDetailsDiv.setAttribute("class", "dish-details");
    const h2 = document.createElement("h2");
    h2.textContent = name;
    dishDetailsDiv.append(h2);
    for (let i = 1; i <= 3; i++) {
      const p = document.createElement("p");
      if (i === 1) p.textContent = `Price : $${price}`;
      if (i === 2) p.textContent = `Extra Ingredients : ${extraIngredients}`;
      if (i === 3)
        p.textContent = `Extra Ingredients Price : $${extraIngredientsPrice}`;
      dishDetailsDiv.append(p);
    }

    dishDetailsDiv.classList.add("hovered");
    dishDiv.append(dishDetailsDiv);
    dishes.push(dishDiv);
  }

  return dishes;
}

function createNearestHospitalPage() {
  const mapDiv = document.createElement("div");
  mapDiv.setAttribute("id", "map");
  return mapDiv;
}

export {
  createHomePage,
  createHeaderNavBar,
  createFooter,
  createMenuPageDishes,
  createNearestHospitalPage,
};
