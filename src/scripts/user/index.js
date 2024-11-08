//-----Assign click event to overlay to hide product details when clicking out-----//
document.getElementById('search-overlay').addEventListener('click', function () {
    hideProductDetails();
});

//Function close modal(Quick view product)
function hideProductDetails() {
    document.getElementById('search-overlay').style.display = 'none';
    document.getElementById('product-details').style.display = 'none';
}


//Automatic slideshow display
let slideIndex = 0;  // Biến đếm để lưu trữ chỉ số của slide hiện tại
let slideInterval;   // Biến dùng để lưu khoảng thời gian của mỗi lần chuyển slide

function showSlides() {
    let slides = document.querySelectorAll('.slideshow-fade'); // Lấy tất cả các phần tử slide
    let dots = document.querySelectorAll('.slideshow-dot .slideshow-transitions'); // Lấy tất cả các dấu chấm

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ẩn tất cả các slide
    }
    slideIndex++; // Tăng chỉ số slide để hiển thị slide tiếp theo
    if (slideIndex > slides.length) { slideIndex = 1 } // Nếu chỉ số vượt quá số lượng slide, quay lại slide đầu tiên

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active'); // Bỏ lớp 'active' khỏi tất cả dấu chấm
    }

    slides[slideIndex - 1].style.display = "block"; // Hiển thị slide hiện tại
    dots[slideIndex - 1].classList.add('active'); // Thêm lớp 'active' vào dấu chấm tương ứng

    slideInterval = setTimeout(showSlides, 4000); // Thiết lập để chuyển sang slide tiếp theo sau 4 giây
}

function startSlideshow() {
    clearTimeout(slideInterval); // Dừng bộ đếm thời gian hiện tại
    slideInterval = setTimeout(showSlides, 4000); // Bắt đầu lại bộ đếm thời gian
}

function showSlide(index) {
    clearTimeout(slideInterval); // Dừng bộ đếm thời gian hiện tại

    let slides = document.querySelectorAll('.slideshow-fade');
    let dots = document.querySelectorAll('.slideshow-dot .slideshow-transitions');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ẩn tất cả các hình ảnh
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active'); // Loại bỏ lớp active khỏi tất cả các dấu chấm
    }

    slideIndex = index + 1; // Cập nhật slideIndex với slide được click
    slides[index].style.display = "block"; // Hiển thị hình ảnh tương ứng với dấu chấm được click
    dots[index].classList.add('active'); // Thêm lớp active vào dấu chấm hiện tại

    startSlideshow(); // Thiết lập lại bộ đếm thời gian
}

// add event for dots
let dots = document.querySelectorAll('.slideshow-dot button .slideshow-transitions');
dots.forEach((dot, index) => {
    dot.parentElement.addEventListener('click', () => {
        showSlide(index);
    });
});

// begin slideshow first time
showSlides();


