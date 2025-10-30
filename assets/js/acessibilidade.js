document.addEventListener("DOMContentLoaded", () => {
  const btnContraste = document.getElementById("btn-contraste");
  const btnEscuro = document.getElementById("btn-escuro");

  btnContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });

  btnEscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
  });
});
