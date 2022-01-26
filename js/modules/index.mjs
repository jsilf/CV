/*-----------------------------
CREATE A MENU FOR THE HOME PAGE
-------------------------------*/
import { container } from '../main.js';
import { about } from './about.mjs';
import { contact } from './contact.mjs';

export function menu() {
    const containerIntro = document.createElement("section");
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

    const introMenuItems = ["om mig", "portfolio", "kontakt"];

    const introMenu = document.createElement("div");
    introMenu.className = "intro__menu-ul";

    container.append(containerIntro, introMenu);

    for (let i = 0; i < introMenuItems.length; i++) {

        const introMenuLink = document.createElement("a");
        introMenuLink.id = [i];
        introMenuLink.className = "intro__menu-link";
        introMenuLink.setAttribute("href", "#");
        introMenu.append(introMenuLink);
        introMenuLink.innerText = introMenuItems[i];
        const introMenuIndex = introMenuItems[i];

        introMenuLink.addEventListener("click", () => {
            if (introMenuIndex === "about me") {
                console.log("about me");
                about();
                // contact().remove();
            } else if (introMenuIndex === "portfolio") {
                console.log("portfolio");
                portfolio();
            } else if (introMenuIndex === "contact") {
                console.log("contact");
                contact();
            }
        });
    }


    containerIntro.append(introLogo, introName, introTitle, introMenu);
}

