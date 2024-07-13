let currentPath = window.location.pathname;

let pathSegments = currentPath.split('/');
let languageCode = pathSegments[pathSegments.length - 3];

let back = document.getElementById("back");
back.onclick = function() {
    window.history.back();
}

let userLang = navigator.language || navigator.userLanguage;


fetch(window.location.pathname.replace(languageCode, userLang))
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
