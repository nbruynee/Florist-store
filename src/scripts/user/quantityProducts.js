//-----Add/Remove quantity product-----//
document.addEventListener("DOMContentLoaded", function() {
    const removeBtn = document.querySelector('.remove-items');
    const addBtn = document.querySelector('.add-items');
    const quantityInput = document.querySelector('.quantity-product input');

    //Product Quantity Reduction Event
    removeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let currentValue = parseInt(quantityInput.value) || 0;
        if (currentValue > 0) {
            quantityInput.value = currentValue - 1;
        }
    });

    addBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let currentValue = parseInt(quantityInput.value) || 0;
        quantityInput.value = currentValue + 1;
    });
    //Set initial value and minimum value for quantity input
    quantityInput.value = 0;
    quantityInput.min = 0; 

    quantityInput.addEventListener('input', function() {
        if (quantityInput.value < 0) {
            quantityInput.value = 0;
        }
    });
});

