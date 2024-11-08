document.addEventListener("DOMContentLoaded", function() {
    const quickViewButtons = document.querySelectorAll('.quick-view, .quick-view-btn');
    const overlay = document.getElementById('product-overlay');
    const productDetails = document.getElementById('product-details');
    const closeButton = document.querySelector('.product-details .close'); // Chọn nút đóng

    // Hàm để mở modal
    function openModal(name, price, description, image) {
        document.getElementById('product-name').textContent = name;
        document.getElementById('product-price').textContent = price;
        document.getElementById('product-description').textContent = description;
        document.getElementById('product-image').src = image;

        // Hiển thị modal và overlay
        overlay.style.display = 'block';
        productDetails.style.display = 'block';
    }

    // Hàm để đóng modal
    function closeModal() {
        overlay.style.display = 'none';
        productDetails.style.display = 'none';
    }

    // Thêm sự kiện vào các nút Quick View để mở modal
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const description = this.getAttribute('data-description');
            const image = this.getAttribute('data-image');
            
            // Gọi hàm mở modal với thông tin sản phẩm
            openModal(name, price, description, image);
        });
    });

    // Thêm sự kiện vào overlay và nút đóng để đóng modal
    overlay.addEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);
});
