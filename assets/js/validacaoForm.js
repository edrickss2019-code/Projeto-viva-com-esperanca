document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const nome = form.querySelector("#nome").value.trim();
    const email = form.querySelector("#email").value.trim();
    const erro = document.querySelector("#mensagem-erro");

    if (nome === "" || email === "") {
      erro.textContent = "Por favor, preencha todos os campos obrigatórios.";
      erro.style.color = "red";
      return;
    }

    if (!email.includes("@")) {
      erro.textContent = "Digite um e-mail válido.";
      erro.style.color = "red";
      return;
    }

    erro.textContent = "";
    alert("Cadastro realizado com sucesso!");
    form.reset();
  });
});
