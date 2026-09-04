// ================================
// DAR ZAYNA - MAIN JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // ================================
  // POPUP ELEMENTS
  // ================================

  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupMessage = document.getElementById("popup-message");
  const popupClose = document.querySelector(".popup-close");

  // ================================
  // SHOW POPUP
  // ================================

  function showPopup(title, message) {
    popupTitle.textContent = title;
    popupMessage.textContent = message;

    popup.classList.add("active");

    document.body.classList.add("no-scroll");
  }

  // ================================
  // CLOSE POPUP
  // ================================

  function closePopup() {
    popup.classList.remove("active");

    document.body.classList.remove("no-scroll");
  }

  // Close button
  if (popupClose) {
    popupClose.addEventListener("click", closePopup);
  }

  // Click outside popup
  if (popup) {
    popup.addEventListener("click", (event) => {
      if (event.target === popup) {
        closePopup();
      }
    });
  }

  // ESC key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePopup();
    }
  });


  // ================================
  // ORDER BUTTONS
  // ================================

  const orderButtons = document.querySelectorAll(".order-btn");

  orderButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const dishName =
        button.dataset.dish || "your selected dish";

      showPopup(
        "Order Received",
        `Your request for ${dishName} has been successfully registered. We will contact you shortly.`
      );

    });

  });


  // ================================
  // RESERVATION BUTTONS
  // ================================

  const reservationButtons =
    document.querySelectorAll(".reserve-btn");

  reservationButtons.forEach((button) => {

    button.addEventListener("click", () => {

      showPopup(
        "Reservation Registered",
        "Your reservation request has been successfully registered. Thank you for choosing Dar Zayna!"
      );

    });

  });


  // ================================
  // FAQ
  // ================================

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

      const isActive = item.classList.contains("active");

      // Close all
      faqItems.forEach((faq) => {
        faq.classList.remove("active");
      });

      // Open selected
      if (!isActive) {
        item.classList.add("active");
      }

    });

  });


  // ================================
  // SMOOTH SCROLL
  // ================================

  const navigationLinks =
    document.querySelectorAll('a[href^="#"]');

  navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      const target =
        document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  // ================================
  // SCROLL REVEAL
  // ================================

  const revealElements =
    document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });


  // ================================
  // MOBILE MENU
  // ================================

  const menuToggle =
    document.querySelector(".menu-toggle");

  const nav =
    document.querySelector(".nav-links");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

      nav.classList.toggle("active");

      menuToggle.classList.toggle("active");

    });

  }


  // ================================
  // CLOSE MOBILE MENU
  // ================================

  if (nav) {

    const navLinks =
      nav.querySelectorAll("a");

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("active");

        if (menuToggle) {
          menuToggle.classList.remove("active");
        }

      });

    });

  }

});