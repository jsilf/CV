/*--------------------
CREATE CONTACT ME PAGE
----------------------*/
export const containerContact = document.createElement("footer");

export function contact() {
    containerContact.innerHTML = "";

    containerContact.className = "container__contact";
    const contactHeading = document.createElement("h4");
    contactHeading.innerText = "Kontakta mig";
    const address = document.createElement("address");
    const contactMail = document.createElement("a");
    contactMail.setAttribute("href", "mailto:");
    contactMail.className = "contact__mail";
    contactMail.innerText = "jesilfver@gmail.com";

    const contactProfileImg = document.createElement("img");
    contactProfileImg.src = "./img/profilbild1.jpg";
    contactProfileImg.className = "contact__img";

    const linkedinLink = document.createElement("a");
    linkedinLink.setAttribute("href", "https://www.linkedin.com/in/jessica-silfver");
    linkedinLink.className = "fab fa-linkedin";

    const githubLink = document.createElement("a");
    githubLink.setAttribute("href", "https://github.com/jsilf");
    githubLink.className = "fab fa-github-square";

    address.append(contactMail, linkedinLink, githubLink);
    containerContact.append(contactHeading, address, contactProfileImg);
}