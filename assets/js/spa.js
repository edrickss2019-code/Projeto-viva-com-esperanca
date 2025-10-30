// spa.js
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Sempre começa no index.html
  window.history.replaceState({}, "", "index.html");

  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  async function carregarPagina(pagina) {
    try {
      const resposta = await fetch(pagina);
      const texto = await resposta.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(texto, "text/html");
      const conteudo = doc.querySelector("main").innerHTML;
      main.innerHTML = conteudo;
    } catch (erro) {
      main.innerHTML = "<p>Erro ao carregar conteúdo.</p>";
    }
  }

  // 🔹 Troca de conteúdo ao clicar no menu
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pagina = e.target.getAttribute("href");
      carregarPagina(pagina);
      window.history.pushState({}, "", pagina);
    });
  });

  // 🔹 Suporte aos botões de voltar/avançar
  window.addEventListener("popstate", () => {
    const paginaAtual = location.pathname.split("/").pop() || "index.html";
    carregarPagina(paginaAtual);
  });
});
