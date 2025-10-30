# 🌱 Projeto Viva com Esperança

O **Projeto Viva com Esperança** é uma aplicação web desenvolvida como parte das **Experiências Práticas** do curso de **Desenvolvimento Web**, com o objetivo de promover inclusão, educação e cidadania por meio do trabalho voluntário.  

O site foi construído e aprimorado em **quatro etapas**, evoluindo de uma estrutura estática em HTML até uma aplicação interativa, acessível e publicada em ambiente de produção.

---

## 🧩 Experiências Práticas

### 🧱 **Experiência Prática 1 — Estrutura HTML**
- Criação da estrutura base do site em **HTML5**.  
- Páginas criadas:
  - `index.html` → página inicial.
  - `projetos.html` → descrição dos projetos sociais.
  - `cadastro.html` → formulário de voluntariado.
- Implementação **semântica** com tags adequadas (`header`, `main`, `footer`, `section`, etc.).
- Inserção inicial de imagens, títulos e textos institucionais.

---

### 🎨 **Experiência Prática 2 — Estilização com CSS**
- Aplicação de estilos com **CSS3**.
- Uso de classes reutilizáveis e layout **responsivo**.
- Personalização da identidade visual:
  - Cores, tipografia e espaçamento.
  - Ajuste dos tamanhos das imagens e cards de projeto.
- Organização dos arquivos:
```text
assets/
├── css/
    ├── base.css
    ├── components.css
    ├── layout.css
    ├── sytle.css
    ├── variables.css
├── js/
└── img/
```
**
---

### ⚙️ **Experiência Prática 3 — Interatividade com JavaScript**
Nesta etapa, o site foi transformado em uma **aplicação dinâmica e interativa**, conforme os requisitos.

#### 🔹 Manipulação do DOM
- Criação e inserção de elementos HTML dinamicamente.
- Geração automática dos **cards de projetos**.

#### 🔹 Sistema SPA (Single Page Application)
- Implementado carregamento dinâmico de conteúdo **sem recarregar a página**.
- Utilização do `fetch()` para buscar conteúdo externo (HTML).

#### 🔹 Sistema de Templates
- Criação de função modular para montar componentes reutilizáveis (`templates.js`).

#### 🔹 Verificação de Consistência de Dados
- Validação completa dos campos do formulário.
- Exibição de mensagens de erro e alerta de sucesso ao usuário.

**
#### 📁 Estrutura modular do JavaScript

```text
assets/
└── js/
    ├── spa.js              # Carregamento dinâmico de páginas
    ├── main.js             # Geração dinâmica de cards
    ├── validacaoForm.js    # Validação de formulários
    └── acessibilidade.js   # Modo escuro e alto contraste
```


---

### 🚀 **Experiência Prática 4 — Versionamento, Acessibilidade e Deploy**
Esta entrega final consolida o projeto, aplicando **boas práticas profissionais** de versionamento, acessibilidade e publicação.

#### 🔹 Controle de Versão com Git/GitHub
- Estratégia **GitFlow** com branches:
  - `main` → versão estável
  - `develop` → versão em desenvolvimento
  - `feature/*` → novas funcionalidades  
- Histórico de commits **semântico e organizado**.  
- Sistema de **releases** com versionamento semântico (`v1.0.0`, `v1.1.0`, etc.).  
- Repositório hospedado publicamente em:  
  🔗 [**GitHub - Projeto Viva com Esperança**](https://github.com/edrickss2019-code/Projeto-viva-com-esperanca)

#### 🔹 Acessibilidade (WCAG 2.1 Nível AA)
- Navegação completa por **teclado**.  
- Estrutura **semântica adequada** em todas as páginas.  
- Contraste mínimo de **4.5:1** para texto normal.  
- Implementação de:
  - **Modo escuro**
  - **Modo de alto contraste**
- Suporte completo a **leitores de tela** com atributos `aria-label`, `role`, etc.

#### 🔹 Otimização para Produção
- Minificação de arquivos **CSS**, **JS** e **HTML**.  
- Compressão e otimização de **imagens (.jpg, .png, .webp)**.  
- Deploy final realizado com **GitHub Pages**, garantindo acesso público e estável:  
  🌍 [**Acessar o site**](https://edrickss2019-code.github.io/Projeto-viva-com-esperanca/)

---

## 👨‍💻 Autor
**Edrick Silva**  
Projeto desenvolvido para fins acadêmicos — *Disciplina de Desenvolvimento Web.*

---

## 🏫 Instituição
**Faculdade Cruzeiro do Sul Virtual**  
Curso: *Desenvolvimento Front-End Para Web*    

---

> ✨ *"A tecnologia é uma ponte entre o conhecimento e a transformação social."*

