//-----Pagination of Product-----//
const itemsPerPage = 9; // Số lượng sản phẩm trên mỗi trang
let currentPage = 1; // Trang hiện tại mặc định là trang 1
const productItems = document.querySelectorAll('.wrapper-product-items'); // Lấy tất cả các sản phẩm
const totalPages = Math.ceil(productItems.length / itemsPerPage); // Tính tổng số trang

function showPage(page) {
    currentPage = page; // Cập nhật trang hiện tại
    const start = (page - 1) * itemsPerPage; // Tính chỉ số bắt đầu của sản phẩm trên trang này
    const end = start + itemsPerPage; // Tính chỉ số kết thúc của sản phẩm trên trang này

    productItems.forEach((product, index) => {
        // Hiển thị sản phẩm nếu nó nằm trong khoảng từ start đến end
        if (index >= start && index < end) {
            product.style.display = 'block'; // Hiển thị sản phẩm
        } else {
            product.style.display = 'none'; // Ẩn sản phẩm
        }
    });
    updatePagination(); // Cập nhật phân trang
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang
}

function updatePagination() {
    const paginationNumbers = document.getElementById('pagination-numbers');
    paginationNumbers.innerHTML = ''; // Xóa nội dung hiện tại của phân trang

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = 'pagination'; // Thêm class cho nút phân trang
        pageButton.innerText = i; // Hiển thị số trang

        pageButton.onclick = () => showPage(i); // Đặt sự kiện khi nhấn vào nút phân trang

        if (i === currentPage) {
            pageButton.style.fontWeight = 'bold'; // Tô đậm số trang hiện tại
        }
        paginationNumbers.appendChild(pageButton); // Thêm nút vào phân trang
    }
}

function changePage(direction) {
    const newPage = currentPage + direction; // Tính trang mới sau khi thay đổi hướng
    if (newPage >= 1 && newPage <= totalPages) {
        showPage(newPage); // Hiển thị trang mới nếu nó hợp lệ
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage); // Hiển thị trang đầu tiên khi tải trang
});

//-----Pagination for Product Management Page-----//
document.addEventListener('DOMContentLoaded', () => {
    if (adminProductRows.length > 0) {
        adminShowPage(adminCurrentPage); // Hiển thị trang đầu tiên khi tải trang

        // Sự kiện cho nút Prev
        document.querySelector('.prev-btn').addEventListener('click', () => {
            if (adminCurrentPage > 1) { // Chỉ cho phép quay lại nếu không ở trang đầu
                adminChangePage(-1);
            }
        });

        // Sự kiện cho nút Next
        document.querySelector('.next-btn').addEventListener('click', () => {
            if (adminCurrentPage < adminTotalPages) { // Chỉ cho phép tiếp tục nếu không ở trang cuối
                adminChangePage(1);
            }
        });
    } else {
        console.log("No product rows found");
    }
});

const adminItemsPerPage = 10; // Số lượng sản phẩm trên mỗi trang (trang quản lý sản phẩm có thể là 10)
let adminCurrentPage = 1; // Trang hiện tại mặc định là trang 1
const adminProductRows = document.querySelectorAll('.container-data tbody tr'); // Lấy tất cả các hàng sản phẩm
const adminTotalPages = Math.ceil(adminProductRows.length / adminItemsPerPage); // Tính tổng số trang
// console.log(adminProductRows.length); 
// Hiển thị sản phẩm của trang hiện tại
function adminShowPage(page) {
    // console.log("Show page:", page);
    adminCurrentPage = page; // Cập nhật trang hiện tại
    const start = (page - 1) * adminItemsPerPage; // Tính chỉ số bắt đầu của sản phẩm trên trang này
    const end = start + adminItemsPerPage; // Tính chỉ số kết thúc của sản phẩm trên trang này

    adminProductRows.forEach((product, index) => {
        // Hiển thị sản phẩm nếu nó nằm trong khoảng từ start đến end
        if (index >= start && index < end) {
            product.style.display = 'table-row'; // Hiển thị hàng (dùng table-row cho bảng)
        } else {
            product.style.display = 'none'; // Ẩn hàng
        }
    });
    adminUpdatePagination(); // Cập nhật phân trang
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang
}

// Cập nhật phân trang (số trang)
function adminUpdatePagination() {
    const paginationNumbers = document.getElementById('pagination-numbers');
    paginationNumbers.innerHTML = ''; // Xóa nội dung hiện tại của phân trang

    for (let i = 1; i <= adminTotalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = 'pagination'; // Thêm class cho nút phân trang
        pageButton.innerText = i; // Hiển thị số trang

        pageButton.onclick = () => adminShowPage(i); // Đặt sự kiện khi nhấn vào nút phân trang

        if (i === adminCurrentPage) {
            pageButton.style.fontWeight = 'bold'; // Tô đậm số trang hiện tại
        }
        paginationNumbers.appendChild(pageButton); // Thêm nút vào phân trang
    }
}

// Thay đổi trang khi nhấn nút Prev hoặc Next
function adminChangePage(direction) {
    const newPage = adminCurrentPage + direction; // Tính trang mới sau khi thay đổi hướng
    if (newPage >= 1 && newPage <= adminTotalPages) {
        adminShowPage(newPage); // Hiển thị trang mới nếu nó hợp lệ
    }
}