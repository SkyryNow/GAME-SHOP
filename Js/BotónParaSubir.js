const btnTop = document.getElementById("btn-top");
window.addEventListener("scroll", () => {
  btnTop.style.display = window.scrollY > 300 ? "block" : "none";
});
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
setTimeout(() => {
  document.querySelector('.typewriter').classList.add('done');
}, 3100); // Un poco más que 3s para dar margen
