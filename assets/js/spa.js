// spa.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pagina = e.target.getAttribute("href");
      carregarPagina(pagina);
      window.history.pushState({}, "", pagina);
    });
  });

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

  window.addEventListener("popstate", () => {
    carregarPagina(location.pathname);
  });
});
