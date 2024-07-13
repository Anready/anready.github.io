const postsContainer = document.getElementById('posts-container');
let posters = postsEn
if (window.location.pathname.includes("/ru")) {
    posters = postsRu
}

posters.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.addEventListener("click", function() {
        window.location.href = post.link
    });

    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;

    const postContent = document.createElement('p');
    postContent.textContent = post.content;

    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    postsContainer.appendChild(postElement);
});