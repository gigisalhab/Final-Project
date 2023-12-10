document.addEventListener('DOMContentLoaded', function() {
    var filterForm = document.getElementById('filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            applyFilters();
        });
    }
});

function applyFilters() {
    var selectedSize = document.getElementById('size').value;
    var products = document.getElementsByClassName('product-card');

    for (var i = 0; i < products.length; i++) {
        if (products[i].getAttribute('data-size') === selectedSize) {
            products[i].style.display = ''; // Show product
        } else {
            products[i].style.display = 'none'; // Hide product
        }
    }
}

