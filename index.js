// mobile menu
const burgerButton = document.querySelector('.burger-button');
const mobileMenu = document.querySelector(".mobile-menu")
const closeMenuButton = document.querySelector('.menu-close-button');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('is-open');
}

burgerButton.addEventListener('click', () => {
    toggleMobileMenu();
});

closeMenuButton.addEventListener('click', () => {
    toggleMobileMenu();
});

// modal
const backdrop = document.querySelector(".backdrop")
const heroButton = document.querySelector(".hero-button")
const closeModalButton = document.querySelector(".modal-close-button")

function toggleModal() {
    backdrop.classList.toggle('is-open');
}

heroButton.addEventListener('click', () => {
    toggleModal();
});

closeModalButton.addEventListener('click', () => {
    toggleModal();
});
