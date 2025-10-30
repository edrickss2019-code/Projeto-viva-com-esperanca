import { criarCard } from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  const projetos = [
    { titulo: "Educação", descricao: "Aulas e reforço escolar.", imagem: "assets/img/projetos.jpg" },
    { titulo: "Doações", descricao: "Distribuição de alimentos e roupas.", imagem: "assets/img/doação2.png" }
  ];

  projetos.forEach(p => main.appendChild(criarCard(p.titulo, p.descricao, p.imagem)));
});
