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
    var selectedPrice = document.getElementById('price').value;
    var products = document.getElementsByClassName('product-card');

    for (var i = 0; i < products.length; i++) {
        var productSize = products[i].getAttribute('data-size');
        var productPrice = products[i].getAttribute('data-price');

        if (productSize === selectedSize && productPrice === selectedPrice) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const imagesContainer = document.querySelector('.carousel-images'); // Container of the images
    const totalImages = document.querySelectorAll('.product-carousel img').length;

    function moveCarousel(step) {
        currentImageIndex = (currentImageIndex + step + totalImages) % totalImages;
        const offset = -currentImageIndex * 100;
        imagesContainer.style.transform = `translateX(${offset}%)`;
    }

    document.getElementById('left-arrow').addEventListener('click', () => moveCarousel(-1));
    document.getElementById('right-arrow').addEventListener('click', () => moveCarousel(1));
});
