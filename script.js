// Message de confirmation dans le formulaire
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      confirmation.classList.remove("hidden");
      form.reset();
    });
  }

  // Sélectionner toutes les images de la galerie
  const images = document.querySelectorAll('.image');

  // Sélectionner les éléments de la modale
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.getElementById("close");

  // Ouvrir la modale lorsque l'utilisateur clique sur une image
  images.forEach((img) => {
    img.addEventListener("click", function() {
      modal.style.display = "flex";  // Affiche la modale
      modalImg.src = this.src;      // Remplace l'image dans la modale
      modalDescription.innerHTML = this.getAttribute("data-description");  // Affiche la description
    });
  });

  // Fermer la modale lorsque l'utilisateur clique sur la croix (bouton close)
  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";  // Cache la modale
  });

  // Fermer la modale si l'utilisateur clique en dehors de l'image
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";  // Cache la modale si on clique en dehors
    }
  });
});
