export let container = document.getElementById("container__");
/*--------
INDEX PAGE
----------*/
import { menu } from './modules/index.mjs';
menu();

/*-----------
ABOUT ME PAGE
-------------*/
import { about } from './modules/about.mjs';
about();

/*------------------
PORTFOLIO/FETCH PAGE
--------------------*/
import { fetchRepositories } from './modules/portfolio.mjs';
fetchRepositories();

/*-------------
CONTACT ME PAGE
---------------*/
import { contact } from './modules/contact.mjs';
contact();

let menuButton = document.getElementById("menu__button");
let menuContainer = document.getElementById("menu__container");

function myMenuButton() {

    const menuItems = ["home", "about me", "portfolio", "contact"];

    menuButton.addEventListener("click", () => {
        menuContainer.innerHTML = "";
        let menuUL = document.createElement("ul");

        for (let i = 0; i < menuItems.length; i++) {

            let menuList = document.createElement("li");
            let menuLink = document.createElement("a");
            menuLink.setAttribute("href", "#");
            menuUL.append(menuList);
            menuList.append(menuLink);
            menuContainer.append(menuUL);
            let menuInd = menuItems[i];

            if (menuLink != menuInd) {
                menuLink.innerText = menuItems[i];
            } else {
                console.log("visa ej meny");
            }
            menuLink.addEventListener("click", () => {
                console.log("gå in på den här sidan: ", menuInd);
            });

        }
    });
}
// myMenuButton();
