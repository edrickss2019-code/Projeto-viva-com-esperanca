// assets/js/main.js
import { criarCard } from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {
  // 🔒 Garante que o código só roda na página "projetos.html"
  const caminho = window.location.pathname;
  if (!caminho.endsWith("projetos.html") && !caminho.endsWith("/projetos")) return;

  const main = document.querySelector("main");

  // 🧩 Lista de projetos
  const projetos = [
    {
      titulo: "Educação",
      descricao: "Aulas e reforço escolar.",
      imagem: "assets/img/projetos.jpg"
    },
    {
      titulo: "Doações",
      descricao: "Distribuição de alimentos e roupas.",
      imagem: "assets/img/doação2.png"
    }
  ];

  // 🪄 Cria e adiciona os cards dinamicamente
  projetos.forEach(p =>
    main.appendChild(criarCard(p.titulo, p.descricao, p.imagem))
  );
});
