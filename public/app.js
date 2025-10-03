
const filmes = [
  {
    "id": 1,
    "titulo": "O Senhor dos Anéis: A Sociedade do Anel",
    "descricao": "Um grupo parte em uma jornada para destruir o Um Anel.",
    "imagem": "img/sociedade.jpg"
  },
  {
    "id": 2,
    "titulo": "Interestelar",
    "descricao": "Exploradores viajam através de um buraco de minhoca em busca de um novo lar.",
    "imagem": "img/interestelar.jpg"
  },
  {
    "id": 3,
    "titulo": "Coringa",
    "descricao": "A origem sombria de um dos maiores vilões da cultura pop.",
    "imagem": "img/coringa.jpg"
  },
  {
    "id": 4,
    "titulo": "Harry Potter",
    "descricao": "Narra a descoberta de Harry Potter de que ele é um bruxo, seu ingresso em Hogwarts e a trama para impedir que Voldemort roube a Pedra Filosofal",
    "imagem": "img/hp.jpg"
  }
];

const lista = document.getElementById("lista-filmes");

if (lista) {
   filme.forEach(filme => {
    lista.innerHTML += `
    <div class="card">
     <img src="${filmes.imagem}" alt="${filme.titulo}">
     <h2>${filme.titulo}</h2>
     <p>${filme.descricao}</p>
     <a herf="detalhes.html?id=${filme.id}">Ver detalhes</a>
     </div>
     `;
 }); 
}
