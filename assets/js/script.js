'use strict';

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    // Update active state for pages
    pages.forEach((page, pageIndex) => {
      if (index === pageIndex) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    // Update active state for nav links
    navigationLinks.forEach((link, linkIndex) => {
      if (index === linkIndex) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Scroll to top after navigation
    window.scrollTo(0, 0);
  });
});

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    // Enable or disable the submit button based on form validity
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});
