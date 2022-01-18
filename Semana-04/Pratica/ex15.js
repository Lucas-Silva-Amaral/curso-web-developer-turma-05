// 15 - [REFATORAÇÃO] O dono de uma livraria resolveu que precisava de novas
// funcionalidades no seu sistema de livros e para isso ele contratou um
// programador. Conversando com o programador e entendendo as necessidades
// que o dono da livraria precisava, eles chegaram nas seguintes funcionalidades:
// ● Autor do livro mais vendido;
// ● Filtrar livros que tem um preço abaixo do valor que será inserido;
// ● Filtrar livros que tem um preço acima do valor que será inserido;
// ● Pesquisa pelo nome do livro;
// ● Pesquisa pelo autor do livro;
// ● Pesquisa pelo código do livro;
// ● Lista do Estoque;
// ● Top X livros mais vendidos (X será um valor inserido como entrada);
// ● Aumento de X % no preço dos livros (X será um valor inserido como
// entrada).
// Tendo por base as funcionalidades acima e como entrada um um array de
// objetos, faça um programa que resolva o problema do dono da livraria.
// Exemplo de Entrada
const bookStore = [
  {
    cod: "8568014003",
    nome: "mais esperto que o diabo",
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675,
  },
  {
    cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,
  },
  {
    cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,
  },
  {
    cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445,
  },
  {
    cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581,
  },
  {
    cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730,
  },
  {
    cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703,
  },
  {
    cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707,
  },
  {
    cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442,
  },
  {
    cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824,
  },
  {
    cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797,
  },
]

// Author name
const SortBestSellAuth = (bookStore) => {
  const bestSell = bookStore.sort((a, b) => {
    return b.quantidadeVendido - a.quantidadeVendido
  })
  console.log(bestSell[0].autor)
}
SortBestSellAuth(bookStore)

// Price below and above
const sortPriceBelow = (bookStore, price, type) => {
  if (type.toLowerCase() === "below".toLowerCase()) {
    let filterPrice = bookStore.filter(({ valor }) => valor < price)
    console.log(filterPrice)
  } else if (type.toLowerCase() === "above".toLowerCase()) {
    let filterPrice = bookStore.filter(({ valor }) => valor > price)
    console.log(filterPrice)
  } else {
    console.log(`Tipo nao existente`)
  }
}
sortPriceBelow(bookStore, 41.9, "above")

// Search name book
const searchNameBook = (bookStore, name) => {
  const search = bookStore.filter(
    ({ nome }) => nome.toLowerCase().trim() === name.toLowerCase().trim()
  )
  console.log(`Pesquisa por nome:`)
  console.log(search)
}
searchNameBook(bookStore, "mais esperto que o diabo")

// Search author book
const searchAuthorBook = (bookStore, author) => {
  const search = bookStore.filter(
    ({ autor }) => autor.toLowerCase().trim() === author.toLowerCase().trim()
  )
  console.log(`Pesquisa por autor:`)
  console.log(search)
}
searchAuthorBook(bookStore, "nassim nicholas taleb")

// Search code book
const searchCodeBook = (bookStore, code) => {
  const search = bookStore.filter(({ cod }) => cod === code)
  console.log(`Pesquisa por código:`)
  console.log(search)
}
searchCodeBook(bookStore, "8547001085")

// List of books
const listOfBooks = (bookStore) => {
  console.log(`Lista de Estoque:`)
  console.log(bookStore)
}
listOfBooks(bookStore)

// Top X books
const topXBooks = (bookStore, x) => {
  const top = bookStore.sort((a, b) => {
    return b.quantidadeVendido - a.quantidadeVendido
  })
  console.log(`Top ${x} livros mais vendidos:`)
  console.log(top.slice(0, x))
}
topXBooks(bookStore, 3)

// Increase price
const increasePrice = (bookStore, x) => {
  const increase = bookStore.map((book) => {
    return {
      cod: book.cod,
      nome: book.nome,
      autor: book.autor,
      valor: book.valor + book.valor * (x / 100),
      quantidadeVendido: book.quantidadeVendido,
    }
  })
  console.log(`Aumento de ${x}% no preço dos livros:`)
  console.log(increase)
}
increasePrice(bookStore, 1)
