// spa.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  // Função principal para trocar o conteúdo
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

  // Navegação via clique nos links do menu
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pagina = e.target.getAttribute("href");
      carregarPagina(pagina);
      window.history.pushState({}, "", pagina);
    });
  });

  // Suporte ao botão voltar/avançar do navegador
  window.addEventListener("popstate", () => {
    const paginaAtual = location.pathname.split("/").pop() || "index.html";
    carregarPagina(paginaAtual);
  });

  // 🚀 NOVO: Ao abrir o site, carrega somente o index.html (não os projetos)
  const paginaInicial = location.pathname.split("/").pop() || "index.html";
  if (paginaInicial !== "index.html") {
    carregarPagina(paginaInicial);
  }
});
