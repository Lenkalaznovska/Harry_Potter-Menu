document.addEventListener("DOMContentLoaded", function () {
  // Najdeme ikonu menu a prvek navigace
  const menuIcon = document.querySelector(".menu-icon i");
  const nav = document.querySelector("nav");

  // Přidáme událost pro kliknutí na ikonu menu
  menuIcon.addEventListener("click", () => {
    // Zkontrolujeme, zda je navigace otevřená
    if (nav.classList.contains("open")) {
      // Pokud je otevřená, zavřeme ji a změníme ikonu na "fa-bars"
      nav.classList.remove("open");
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    } else {
      // Pokud není otevřená, otevřeme ji a změníme ikonu na "fa-xmark"
      nav.classList.add("open");
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-xmark");
    }
  });

  // Přidáme událost pro změnu velikosti okna
  window.addEventListener("resize", function () {
    // Pokud je šířka okna větší než 600px, zavřeme navigaci a změníme ikonu na "fa-bars"
    if (window.innerWidth > 600) {
      nav.classList.remove("open");
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    }
  });
});
