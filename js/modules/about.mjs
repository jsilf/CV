/*------------------
CREATE ABOUT ME PAGE
--------------------*/

import { container } from '../main.js';

export function about() {

    const education = ["2021-2023 Front end developer, Medieinstitutet", "2014-2015 Arkitektur och design, Nyckelviksskolan", "2013-2014 Grundutbildning konst, Basis konstskola"];

    const containerEducation = document.createElement("article");
    containerEducation.className = "container__education";
    containerEducation.innerHTML = "<h3>Utbildning</h3>";
    const educationUl = document.createElement("ul");
    educationUl.className = "education__list";

    for (let i = 0; i < education.length; i++) {
        const educationList = document.createElement("li");
        educationList.innerText = education[i];
        containerEducation.append(educationUl);
        educationUl.append(educationList);
    }

    const experience = ["2019-2021 Kontorsassistent, Nivå Landskapsarkitektur", "2016-2019 Butiksmedarbetare, BAUHAUS", "2015-2016 Värvare, UNHCR"];

    const containerExperience = document.createElement("article");
    containerExperience.className = "container__experience";
    containerExperience.innerHTML = "<h3>Arbetslivserfarenhet</h3>";
    const experienceUl = document.createElement("ul");
    experienceUl.className = "experience__list";

    for (let i = 0; i < experience.length; i++) {
        const experienceList = document.createElement("li");
        experienceList.innerText = experience[i];
        containerExperience.append(experienceUl);
        experienceUl.append(experienceList);
    }

    const skills = ["HTML", "CSS/SASS", "Javascript", "Typescript", "Angular"];

    const containerSkills = document.createElement("article");
    containerSkills.className = "container__skills";
    containerSkills.innerHTML = "<h3>Kompetens</h3>";
    const skillUl = document.createElement("ul");
    skillUl.className = "skills__list";

    for (let i = 0; i < skills.length; i++) {
        const skillList = document.createElement("li");
        skillList.innerText = skills[i];
        containerSkills.append(skillUl);
        skillUl.append(skillList);
    }

    const containerAbout = document.createElement("article");
    containerAbout.className = "container__about";
    containerAbout.innerHTML = "<h3>Om mig</h3>" + "<p>Extraction in single shot single origin, frappuccino redeye half and half medium french press.</p>";

    container.append(containerEducation, containerExperience, containerSkills, containerAbout);
}