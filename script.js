const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("accessibleModal");
const backdrop = document.getElementById("modalBackdrop");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  backdrop.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  closeModalBtn.focus();
});

closeModalBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  openModalBtn.focus();
}

const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");
let menuOpen = false;

menuButton.addEventListener("click", () => {
  menuOpen = !menuOpen;
  menuContent.style.display = menuOpen ? "block" : "none";
  menuButton.setAttribute("aria-expanded", menuOpen.toString());
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuOpen) {
    menuOpen = false;
    menuContent.style.display = "none";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
  }
});
