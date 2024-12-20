const postsRu = [
    { title: "Привет всем", content: "Здесь будут интересные и полезные посты. Добро пожаловать!" },
    { title: "Обновление", content: "Первая стабильная версия блога"},
    { title: "Тестовый пост", content: "Пост про ассемблер от ChatGPT", link: "posts/test.html" }
].reverse();

const postsEn = [
    { title: "Hello Everyone", content: "Here will be interesting and useful posts. Welcome!" },
    { title: "Update", content: "First stable version of the blog" },
    { title: "Test Post", content: "Post about assembler from ChatGPT", link: "posts/test.html" }
].reverse();


const maybe = {
    "en": [
        "en",
        "Would you like to view this article in English?",
        "Yes, take me to the English version"
    ],
    "ru": [
        "ru",
        "Может вы бы хотели посмотреть эту же страницу на русском?",
        "Да, перейти на русскую версию"
    ]
}