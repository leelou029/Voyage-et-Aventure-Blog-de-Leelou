document.addEventListener("DOMContentLoaded", () => {

  /* FORMULAIRE (tu peux garder) */
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      confirmation.classList.remove("hidden");
      form.reset();
    });
  }

  /* ==============================
        MODALE PREMIUM
  ============================== */

  const images = document.querySelectorAll('.image');
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const modalImg = document.getElementById("modal-img");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.getElementById("close");

  // OUVERTURE
  images.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modalDescription.innerHTML = img.getAttribute("data-description");
      modal.classList.add("show");
    });
  });

  // FERMETURE via la croix
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // FERMETURE en cliquant hors de la carte
  modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
      modal.classList.remove("show");
    }
  });

  // FERMETURE avec ECHAP
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("show");
    }
  });

});
