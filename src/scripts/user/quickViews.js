//-----Quick view product-----//
document.addEventListener("DOMContentLoaded", function() {
    const quickViewButtons = document.querySelectorAll('.quick-view, .quick-view-btn');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            //Get product data from the button's data-* attribute
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const description = this.getAttribute('data-description');
            const image = this.getAttribute('data-image');
            
            //Display product information in modal
            document.getElementById('product-name').textContent = name;
            document.getElementById('product-price').textContent = price;
            document.getElementById('product-description').textContent = description;
            document.getElementById('product-image').src = image;

            //Display modal and overlay
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('product-details').style.display = 'block';
        });
    });
});

