const produtos = {
    1: {
      nome: "Million Eau de Toilette",
      preco: "R$ 299,90",
      descricao: "Fragrância luxuosa e marcante.",
      imagem: "imagens/perfume1.jpg"
    },
  
    2: {
      nome: "Y Eau de Parfum",
      preco: "R$ 360,00",
      descricao: "Elegância moderna e intensa.",
      imagem: "imagens/perfume2.jpg"
    },
  
    3: {
      nome: "Botica 214 Dark Mint",
      preco: "R$ 560,00",
      descricao: "Frescor sofisticado e exclusivo.",
      imagem: "imagens/perfume3.jpg"
    },
  
    4: {
      nome: "Sauvage Dior",
      preco: "R$ 400,00",
      descricao: "Perfume forte e elegante.",
      imagem: "imagens/perfume4.jpg"
    },
  
    5: {
      nome: "Celine Parade",
      preco: "R$ 560,00",
      descricao: "Luxo e sofisticação.",
      imagem: "imagens/perfume5.jpg"
    },
  
    6: {
      nome: "Al Noble Safeer",
      preco: "R$ 760,00",
      descricao: "Perfume árabe intenso.",
      imagem: "imagens/perfume6.jpg"
    }
  };
  
  
  // PEGAR O ID DA URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  
  // PEGAR PRODUTO
  const produto = produtos[id];
  
  // SE EXISTIR
  if(produto){
    document.getElementById("nome").innerText = produto.nome;
    document.getElementById("preco").innerText = produto.preco;
    document.getElementById("descricao").innerText = produto.descricao;
    document.getElementById("img-produto").src = produto.imagem;
  }