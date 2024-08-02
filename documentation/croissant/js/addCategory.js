function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
    }
}

function changeLocationTo(path) {
    window.location.href = path;
}

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('.main-content');
    sidebar.classList.toggle('hidden');
    mainContent.classList.toggle('with-sidebar-hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    var sidebarHTML = `
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
    document.getElementById('sidebar-container').innerHTML = sidebarHTML;
});