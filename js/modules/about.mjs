/*------------------
CREATE ABOUT ME PAGE
--------------------*/
export const containerAbout = document.createElement("section");


export function about() {
    containerAbout.innerHTML = "";


    //Skippa eller ha på alla sidor??
    const line = document.createElement("hr");
    containerAbout.prepend(line);

    /*-------- 
    UTBILDNING
    ---------*/
    const education = [
        "2021-2023 Front end developer, Medieinstitutet",
        "2014-2015 Arkitektur och design, Nyckelviksskolan",
        "2013-2014 Grundutbildning konst, Basis konstskola",
        "2007-2010 Mode och design, St Martins gymnasium"
    ];

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

    /*-------- 
    ERFARENHET
    ---------*/
    const experience = [
        "2019-2021 Kontorsassistent, Nivå Landskapsarkitektur",
        "2016-2019 Butiksmedarbetare, BAUHAUS",
        "2015-2016 Värvare, UNHCR"
    ];

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

    /*------- 
    KOMPETENS
    --------*/
    const skills = [
        "HTML",
        "CSS/SASS",
        "Javascript",
        "Typescript",
        "Angular"
    ];

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
    /*----- 
    OM MIG
    ------*/

    const containerAboutMe = document.createElement("article");
    containerAboutMe.className = "container__about";
    containerAboutMe.innerHTML = "<h3>Om mig</h3>" + "<p>Jag studerar just nu till front end developer/webbutvecklare distans på Medieinstitutet och tar examen juni 2023. I utbildningen får jag lära mig grunden till modern webbutveckling: HTML, CSS/SASS, Javascript, Angular och Reactjs. Söker alltid nya utmaningar och sätt att utvecklas. Har ett stort intresse för design, teknik och problemlösning. Tidigare har jag arbetat inom service och kontor och studerar nu för att utvecklas mer tekniskt och kreativt i min yrkesroll. Har även studerat konst och design och har dessa som mina hobbies.</p>";
    containerAbout.append(containerAboutMe, containerEducation, containerExperience, containerSkills);
}