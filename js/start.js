let userLang = navigator.language || navigator.userLanguage;
fetch("https://anready.github.io/" + userLang + "/index.html")
    .then(response => {
        if (response.ok) {
            window.location.replace("https://anready.github.io/" + userLang)
        } else {
            window.location.replace("https://anready.github.io/en")
        }
    })
    .catch(() => window.location.replace("https://anready.github.io/en"));