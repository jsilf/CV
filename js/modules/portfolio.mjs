import { container } from '../main.js';

/*------------------------------
PORTFOLIO PAGE WITH GITHUB REPOS
--------------------------------*/

export function fetchRepositories() {
    fetch("https://api.github.com/users/jsilf/repos")
        .then(response => {
            return response.json();
        })
        .then(json => {

            let repoContainer = document.createElement("article");
            repoContainer.id = "githubRepos";
            container.append(repoContainer);
            for (let i = 0; i < json.length; i++) {
                let githubLink = document.createElement("a");
                repoContainer.append(githubLink);
                githubLink.innerHTML = "";
                githubLink.id = i;
                githubLink.target = "_blank";
                githubLink.setAttribute("href", json[i].html_url);
                githubLink.innerHTML = json[i].name;
            }
            // console.log("Github API: ", json);
        });
}
