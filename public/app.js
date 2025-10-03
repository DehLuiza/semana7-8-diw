const filmes = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    ano: 2001,
    genero: "Fantasia/Aventura",
    descricao: "Um grupo parte em uma jornada para destruir o Um Anel.",
    sinopse: "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.",
    imagem:  "img/senhordosaneis.jpg"
  },
  {
    id: 2,
    titulo: "Interestelar",
    ano: 2014,
    genero: "Ficção Científica",
    descricao: "Exploradores viajam através de um buraco de minhoca em busca de um novo lar.",
    sinopse: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
    imagem:  "img/Interstellar.png"
  },
  {
    id: 3,
    titulo: "Coringa",
    ano: 2019,
    genero: "Drama/Crime",
    descricao: "A origem sombria de um dos maiores vilões da cultura pop.",
    sinopse: "Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.",
    imagem:  "img/Joker.webp"
  },
  {
    id: 4,
    titulo: "Harry Potter e a Pedra Filosofal",
    ano: 2001,
    genero: "Fantasia/Aventura",
    descricao: "Harry descobre que é bruxo e enfrenta Voldemort pela primeira vez.",
    sinopse: "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.",
    imagem:  "img/Harry_Potter_Pedra_Filosofal_2001.jpg"
  }
];


function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

if (window.location.pathname.includes("detalhes.html")) {
  const filmeId = getQueryParam("id");
  const filme = filmes.find(f => f.id == filmeId);

  if (filme) {
    document.getElementById("filme-titulo").textContent = filme.titulo;
    document.getElementById("filme-ano").textContent = filme.ano;
    document.getElementById("filme-genero").textContent = filme.genero;
    document.getElementById("filme-sinopse").textContent = filme.sinopse;
    document.getElementById("filme-imagem").src = filme.imagem;
    document.getElementById("filme-imagem").alt = filme.titulo;
     
  } else {
    document.body.innerHTML = "<p>Filme não encontrado.</p>";
  }
}
