export const container = document.getElementById("container");
const containerIntro = document.createElement("section");
const menuNav = document.createElement("nav");
container.append(containerIntro, menuNav, containerAbout, repoContainer, containerContact);

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

intro();
menu();

/*-------
OM MIG VY
---------*/
import { about, containerAbout } from './modules/about.mjs';

/*----------
PORTFOLIO VY
------------*/
import { fetchRepositories, repoContainer } from './modules/portfolio.mjs';

/*-------------
KONTAKTA MIG VY
---------------*/
import { contact, containerContact } from './modules/contact.mjs';

/*-----------
HEM VY + MENU
-------------*/
function intro() {
    containerIntro.innerHTML = "";
    containerIntro.className = "container__intro";

    const introLogo = document.createElement("img");
    introLogo.id = "logo";
    introLogo.src = "./img/logo.png";

    const introName = document.createElement("h1");
    introName.className = "intro__name";
    introName.innerText = "Jessica Silfver";

    const introTitle = document.createElement("h2");
    introTitle.className = "intro__title";
    introTitle.innerText = "Front end developer student";

    containerIntro.append(introLogo, introName, introTitle);
}

function menu() {
    const menuItems = ["hem", "om mig", "portfolio", "kontakt"];
    menuNav.className = "menu__nav";
    const menuUl = document.createElement("ul");
    menuNav.append(menuUl);

    for (let i = 0; i < menuItems.length; i++) {
        const menuLink = document.createElement("a");
        const menuLi = document.createElement("li");
        menuLi.className = "menu__nav-li";
        menuUl.append(menuLi);
        menuLi.append(menuLink);
        menuLink.id = [i];
        menuLink.className = "menu__nav-link";
        menuLink.setAttribute("href", "#");
        menuLink.innerText = menuItems[i];
        const menuIndex = menuItems[i];

        menuLink.addEventListener("click", (e) => {
            e.preventDefault();

            if (menuIndex === "hem") {
                intro();
                containerAbout.innerHTML = "";
                repoContainer.innerHTML = "";
                containerContact.innerHTML = "";
                containerContact.style.display = "none";
            }
            else if (menuIndex === "om mig") {
                about();
                containerIntro.innerHTML = "";
                repoContainer.innerHTML = "";
                containerContact.innerHTML = "";
                //lade på style none för att border inte försvann med innerHTML
                containerContact.style.display = "none";
            }
            else if (menuIndex === "portfolio") {
                fetchRepositories();
                containerIntro.innerHTML = "";
                containerAbout.innerHTML = "";
                containerContact.innerHTML = "";
                containerContact.style.display = "none";
            }
            else if (menuIndex === "kontakt") {
                contact();
                containerIntro.innerHTML = "";
                containerAbout.innerHTML = "";
                repoContainer.innerHTML = "";
                containerContact.style.display = "flex";
            }
            else {
                intro();
            }
        });
    }
}