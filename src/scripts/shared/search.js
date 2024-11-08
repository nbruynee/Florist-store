//-----Search product-----//
const products = [
    { name: "Rose flower", price: "$30", image: "image/rose.jpg" },
    { name: "Sun flower", price: "$50", image: "image/Sunflower.jpg" },
    { name: "Tulip flower", price: "$40", image: "image/tulip-type.jpg" },
];

function showSearchBox() {
    document.getElementById('search-overlay').style.display = 'block';
    document.getElementById('search-box').style.display = 'block';
}

function hideSearchBox() {
    document.getElementById('search-overlay').style.display = 'none';
    document.getElementById('search-box').style.display = 'none';
}

//Search products based on keywords
function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (query === '') {
        resultsContainer.style.display = 'none';
        return;
    } else {
        resultsContainer.style.display = 'block';
    }

    //Filter products that match keywords//
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    if (filteredProducts.length === 0) {
        resultsContainer.innerHTML = '<p>No products found</p>';
    } else {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('search-result-item');

            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
            `;
            resultsContainer.appendChild(productElement);
        });
    }
}