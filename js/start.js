let userLang = navigator.language || navigator.userLanguage;
console.log(window.location.pathname)
fetch(window.location.pathname + '/' + userLang + "/index.html")
    .then(response => {
        if (response.ok) {
            window.location.replace(window.location.pathname + userLang)
        } else {
            window.location.replace(window.location.pathname + '/en')
        }
    })
    .catch(() => window.location.replace(window.location.pathname + '/en'));