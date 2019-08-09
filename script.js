const nav = document.querySelector("nav");
const chevron = document.getElementById("chevron");

chevron.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  chevron.classList.toggle("right-facing");
});