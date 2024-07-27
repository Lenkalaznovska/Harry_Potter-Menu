document.addEventListener("DOMContentLoaded", function () {
  // Find the menu icon and the navigation element
  const menuIcon = document.querySelector(".menu-icon i");
  const nav = document.querySelector("nav");

  // Add an event listener for clicking the menu icon
  menuIcon.addEventListener("click", () => {
    // Check if the navigation is open
    if (nav.classList.contains("open")) {
      // If it is open, close it and change the icon to "fa-bars"
      nav.classList.remove("open");
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    } else {
      // If it is not open, open it and change the icon to "fa-xmark"
      nav.classList.add("open");
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-xmark");
    }
  });

  // Add an event listener for window resizing
  window.addEventListener("resize", function () {
    // If the window width is greater than 600px, close the navigation and change the icon to "fa-bars"
    if (window.innerWidth > 600) {
      nav.classList.remove("open");
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    }
  });
});
