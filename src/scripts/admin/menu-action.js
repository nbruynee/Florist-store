function toggleDropdownEllipse(element) {
    const dropdown = element.closest('.container-opt').querySelector('.dropdown-menu');
    
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

document.addEventListener('click', function (e) {
    const isClickInside = e.target.closest('.container-opt');
    
    if (!isClickInside) {
        document.querySelectorAll('.dropdown-menu').forEach(function (dropdown) {
            dropdown.style.display = 'none';
        });
    }
});

