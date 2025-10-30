export function criarCard(titulo, descricao, imagem) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${titulo}</h2>
    <img src="${imagem}" alt="${titulo}">
    <p>${descricao}</p>
  `;
  return card;
}
