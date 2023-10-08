document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const frame = slider.querySelector(".slider-frame");
    const images = slider.querySelectorAll(".slider-image");

    let currentIndex = 0;

    function showImage(index) {
        frame.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Automatically load the next image every 3 seconds (adjust the time as needed)
    setInterval(nextSlide, 3000);

    // Initially show the first image
    showImage(currentIndex);
});

// Product Slider 

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("product-container");
    const products = container.querySelectorAll(".product");

    let currentIndex = 0;
    let visibleProducts = 4;

    function showProducts() {
        for (let i = 0; i < products.length; i++) {
            if (i >= currentIndex && i < currentIndex + visibleProducts) {
                products[i].style.display = "block";
            } else {
                products[i].style.display = "none";
            }
        }

        currentIndex = (currentIndex + 1) % (products.length - visibleProducts + 1);
    }

    // Automatically show products every 3 seconds (adjust the time as needed)
    setInterval(showProducts, 3000);

    // Initially show the first set of products
    showProducts();
});

/* Menu For Mobile */
document.addEventListener("DOMContentLoaded", function () {
    const mobileNavButton = document.querySelector(".mobile-nav-button");
    const navLinks = document.querySelector(".nav-links");

    // Add an event listener to the mobile navigation button
    mobileNavButton.addEventListener("click", function () {
        // Toggle a CSS class to show/hide the menu with animation
        navLinks.classList.toggle("show-mobile-menu");
    });
});

/* Smooth Scrolling */

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".scroll-fade-in");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Remove the class when not in viewport
            }
        });
    }, options);

    sections.forEach(function (section) {
        observer.observe(section);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const mobileNavButton = document.getElementById("menu-button");
    const navLinks = document.querySelector(".nav-links");

    // Add an event listener to toggle the mobile navigation menu
    mobileNavButton.addEventListener("click", function () {
        navLinks.classList.toggle("show-mobile-menu");
        mobileNavButton.classList.toggle("mobile-nav-opened");
    });
});










