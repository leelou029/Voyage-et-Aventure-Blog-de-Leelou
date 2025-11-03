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
});
