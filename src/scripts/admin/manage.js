const currentPath = window.location.pathname.split("/").pop(); // Đổi tên thành currentPath
console.log("Current Page:", currentPath); // Kiểm tra giá trị đường dẫn hiện tại

const sidebarLinks = document.querySelectorAll('.sidebar-link');

sidebarLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active-link'); // Thêm lớp "active-link" cho trang hiện tại
    }
});

