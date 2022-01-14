// 6. Crie uma função chamada rockPaperScissorsWinner e recebe dois valores como parametro. Esses dois valores podem ser:
// 0: tesoura
// 1: papel
// 2: pedra
//     Construa um algoritmo que recebe esses valores randomicamente e printa na tela qual usuario ganhou, se o usuario 1 ou usario 2

function rockPaperScissorWinner(player1, player2) {
  let winner = null

  if (player1 === player2) {
    winner = "Empate"
  } else if (player1 === 0 && player2 === 1) {
    winner = "Player 1"
  } else if (player1 === 1 && player2 === 2) {
    winner = "Player 1"
  } else if (player1 === 2 && player2 === 0) {
    winner = "Player 1"
  } else if (player1 === 0 && player2 === 2) {
    winner = "Player 2"
  } else if (player1 === 1 && player2 === 0) {
    winner = "Player 2"
  } else if (player1 === 2 && player2 === 1) {
    winner = "Player 2"
  }
  return winner
}

let result = rockPaperScissorWinner(
  Math.floor(Math.random() * 3),
  Math.floor(Math.random() * 3)
)
console.log(result)
