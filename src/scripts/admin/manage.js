const currentPath = window.location.pathname.split("/").pop();
console.log("Current Page:", currentPath); 

const sidebarLinks = document.querySelectorAll('.sidebar-link');

sidebarLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active-link'); 
    }
});

