export const repoContainer = document.createElement("article");

/*---------------------------
PORTFOLIO VY MED GITHUB REPOS
-----------------------------*/

export function fetchRepositories() {
    repoContainer.innerHTML = "";
    fetch("https://api.github.com/users/jsilf/repos")
        .then(response => {
            return response.json();
        })
        .then(json => {
            repoContainer.className = "container__repos";
            const repoWrap = document.createElement("div");
            repoWrap.id = "githubRepos";
            const repoUl = document.createElement("ul");
            repoUl.id = "githubUl";
            const repoHeading = document.createElement("h3");
            repoHeading.innerText = "Mina Github repos";
            repoContainer.append(repoHeading, repoWrap);
            repoWrap.append(repoUl);

            for (let i = 0; i < json.length; i++) {
                const link = document.createElement("a");
                const liLink = document.createElement("li");
                repoUl.append(liLink);
                liLink.append(link);
                link.id = i;
                liLink.className = "repo__list";
                link.target = "_blank";
                link.setAttribute("href", json[i].html_url);
                link.innerText = json[i].name;
            }
        });
}
