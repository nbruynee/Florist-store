//-----Animation hide and display cart-----//
function toggleCart() {
    const cart = document.getElementById('cart');
    const overlay = document.getElementById('cart-overlay');

    if (cart.classList.contains('show-cart')) {
        cart.classList.remove('show-cart'); 
        cart.classList.add('hide-cart');     // Thêm lớp 'hide-cart' để khởi động animation ẩn
        overlay.classList.remove('show-overlay'); // Ẩn lớp phủ overlay

        // Lắng nghe sự kiện animationend để chắc chắn rằng animation ẩn kết thúc trước khi ẩn hoàn toàn giỏ hàng
        cart.addEventListener('animationend', function () {
            if (cart.classList.contains('hide-cart')) {
                cart.style.display = 'none';  // Thay đổi thuộc tính 'display' để thực sự ẩn giỏ hàng
            }
        }, { once: true }); // Sự kiện này chỉ được lắng nghe và xử lý một lần duy nhất cho mỗi lần animation kết thúc
    } else {
        // Nếu giỏ hàng chưa hiển thị, thì hiển thị nó
        cart.style.display = 'block';         // Hiển thị giỏ hàng bằng cách đặt 'display: block'
        cart.classList.remove('hide-cart');   // Loại bỏ lớp 'hide-cart' (nếu có) để tránh ảnh hưởng tới animation
        cart.classList.add('show-cart');      // Thêm lớp 'show-cart' để khởi động animation hiển thị giỏ hàng
        overlay.classList.add('show-overlay'); // Hiển thị lớp phủ overlay
    }
}
