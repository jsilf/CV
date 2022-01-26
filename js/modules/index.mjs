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

    const introMenuItems = ["about me", "portfolio", "contact"];

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
            } else if (introMenuIndex === "contact") {
                console.log("contact");
            }
        });
    }





    containerIntro.append(introLogo, introName, introTitle, introMenu);



    //     let sunvsmoon = document.createElement("img");
    //     sunvsmoon.id = ”sunvsmoon”;
    //     sunvsmoon.src = ”sun.jpg”;

    //     document.body.append(sunvsmoon);

    //     sunvsmoon.addEventListener(”click”, () => {
    //         console.log(”click på knapp”);

    //         console.log(sunvsmoon.getAttribute(”src”));

    //         If(sunvsmoon.getAttribute(”src”) === ”sun.jpg”) {

    //             console.log(”det var en sol”);
    //     sunvsmoon.setAttribute(”src”, ”moon.jpg”);
    // } else {

    //     console.log(”det var inte en sol”);
    //     sunvsmoon.setAttribute(”src”, ”sun.jpg”);
    // }
    // });





}

