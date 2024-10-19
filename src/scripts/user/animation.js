//-----Animation hide and display cart-----//
function toggleCart() {
    // Lấy phần tử giỏ hàng và lớp phủ overlay từ DOM
    const cart = document.getElementById('cart');
    const overlay = document.getElementById('cart-overlay');

    // Kiểm tra nếu giỏ hàng đang hiển thị (có lớp 'show-cart')
    if (cart.classList.contains('show-cart')) {
        // Nếu có, ẩn giỏ hàng bằng cách:
        cart.classList.remove('show-cart');  // Loại bỏ lớp 'show-cart' để ẩn giỏ hàng
        cart.classList.add('hide-cart');     // Thêm lớp 'hide-cart' để khởi động animation ẩn
        overlay.classList.remove('show-overlay'); // Ẩn lớp phủ overlay

        // Lắng nghe sự kiện animationend để chắc chắn rằng animation ẩn kết thúc trước khi ẩn hoàn toàn giỏ hàng
        cart.addEventListener('animationend', function () {
            // Sau khi animation 'hide-cart' kết thúc, giỏ hàng sẽ bị ẩn khỏi màn hình
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
