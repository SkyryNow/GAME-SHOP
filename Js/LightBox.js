const logo = document.getElementById("logoGrande");
  const lightbox = document.getElementById("lightbox");
  const imgAmpliada = document.getElementById("imgAmpliada");
  const closeBtn = document.querySelector(".close");

  logo.addEventListener("click", function () {
    lightbox.style.display = "block";
    imgAmpliada.src = this.src;
  });

  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });