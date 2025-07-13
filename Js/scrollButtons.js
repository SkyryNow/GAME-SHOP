const btnTop = document.getElementById("btn-top");
const btnCarrito = document.getElementById("btn-carrito");

window.addEventListener("scroll", () => {
  const visible = window.scrollY > 300;
  btnTop.style.display = visible ? "block" : "none";
  btnCarrito.style.display = visible ? "block" : "none";
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

btnCarrito.addEventListener("click", () => {
  window.location.href = "../Carrito/Carrito.html";
});

setTimeout(() => {
  document.querySelector('.typewriter').classList.add('done');
}, 3100);
