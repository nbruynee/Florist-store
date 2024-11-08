//------Hàm mở đóng menu dropdown khi nhấn vào icon user-------//
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

// Display/ hide dropdown when click into icon
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Lắng nghe sự kiện click ngoài dropdown để ẩn dropdown
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdownMenu');
    const icon = document.querySelector('.info-user'); // Lấy icon hoặc phần tử kích hoạt dropdown

    // If click outside dropdown and have not to icon, hide it
    if (!dropdown.contains(event.target) && !icon.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});