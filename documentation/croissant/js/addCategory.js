function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
    }
}

function changeLocationTo(path) {
    if (window.location.href.includes("/kotlin/") || window.location.href.includes("/java/")) {
        window.location.href = "../" + path;
    } else {
        window.location.href = path;
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const screenWidth = window.innerWidth;

    // Переключение видимости боковой панели
    sidebar.classList.toggle('visible');

    // Проверка ширины экрана и переключение видимости основной страницы
    if (screenWidth > 650) {
        if (sidebar.classList.contains('visible')) {
            mainContent.classList.add('with-sidebar-visible');
        } else {
            mainContent.classList.remove('with-sidebar-visible');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sidebar-container').innerHTML = `
        <div class="category" onclick="changeLocationTo('index.html')">Start</div>    
        <div class="category" onclick="toggleVisibility('cat1')">Java</div>
        <div id="cat1" class="hidden">
            <div class="subcategory" onclick="changeLocationTo('java/setup.html')">Set - Up</div>
            <div class="subcategory" onclick="changeLocationTo('java/permissions.html')">Checking Permissions</div>
            <div class="subcategory" onclick="changeLocationTo('java/list.html')">Getting List Of Files/Folders</div>
            <div class="subcategory" onclick="changeLocationTo('java/opening.html')">Opening files</div>
            <div class="subcategory" onclick="changeLocationTo('java/errors.html')">Receiving and handling errors</div>
        </div>
        <div class="category" onclick="toggleVisibility('cat2')">Kotlin</div>
        <div id="cat2" class="hidden">
            <div class="subcategory" onclick="changeLocationTo('kotlin/setup.html')">Set - Up</div>
            <div class="subcategory" onclick="changeLocationTo('kotlin/permissions.html')">Checking Permissions</div>
            <div class="subcategory" onclick="changeLocationTo('kotlin/list.html')">Getting List Of Files/Folders</div>
            <div class="subcategory" onclick="changeLocationTo('kotlin/opening.html')">Opening files</div>
            <div class="subcategory" onclick="changeLocationTo('kotlin/errors.html')">Receiving and handling errors</div>
        </div>
    `;

    const mediaQuery = window.matchMedia('(max-width: 650px)');

    // Функция для обработки изменения состояния медиазапроса
    function handleMediaQueryChange(e) {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');

        if (!e.matches) {
            // Если ширина экрана 650px или меньше
            toggleSidebar();
        } else {
            // Если ширина экрана больше 650px
            if (sidebar.classList.contains('visible')) {
                sidebar.classList.remove('visible');
                mainContent.classList.remove('with-sidebar-visible');
            }
        }
    }

    // Добавление слушателя изменений медиазапроса
    mediaQuery.addListener(handleMediaQueryChange);

    // Вызов функции для первоначального применения стилей
    handleMediaQueryChange(mediaQuery);
});

function copyCode() {
    const codeBlock = document.getElementById("code-block");
    let range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges()
    document.getElementById("copy-button").textContent = "Code copied!";

    setTimeout(function() {
        document.getElementById("copy-button").textContent = "Copy code";
    }, 2000);
}
