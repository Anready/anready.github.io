const postsContainer = document.getElementById('posts-container');

let posters = postsEn
if (window.location.pathname.includes("/ru")) {
    posters = postsRu
}

posters.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post0';
    if (post.link) {
        postElement.className = 'post';
        postElement.addEventListener("click", function() {
            window.location.href = post.link
        });
    }

    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;

    const postContent = document.createElement('p');
    postContent.textContent = post.content;

    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    postsContainer.appendChild(postElement);
});


let userLang = navigator.language || navigator.userLanguage;
let currentPath = window.location.pathname;

let pathSegments = currentPath.split('/');
let languageCode = pathSegments[pathSegments.length - 2];

fetch(window.location.pathname.replace(languageCode, userLang) + "index.html")
    .then(response => {
        if (response.ok) {
            if (languageCode !== userLang) {
                show(window.location.pathname.replace(languageCode, userLang))
            }
        }
    })
    .catch();

function show(language) {
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    let redirectBtn = document.getElementById("redirectBtn");
    let redirectTitle = document.getElementById("text");

    const languageId = getIdByLanguageName(userLang);
    let as = maybe[languageId]
    redirectTitle.textContent = as[1]
    redirectBtn.textContent = as[2]


    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    redirectBtn.onclick = function() {
        window.location.href = language
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function getIdByLanguageName(languageName) {
    for (let id in maybe) {
        if (maybe[id][0] === languageName) {
            return id;
        }
    }
    return null;
}

