// 23 - Crie uma função que recebe como argumento um valor em segundos,
// calcula e retorne uma string formatada HH:MM:SS (horas:minutos:segundos) .
// Exemplo de Entrada:
// 600
// -----------------
// 33567
// Exemplo de Saída:
// 0:10:0
// -----------------
// 9:19:27

function secondsToHour(seconds) {
  let hour = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds % 3600) / 60)
  let secondsLeft = seconds % 60
  return hour + ":" + minutes + ":" + secondsLeft
}

const result = secondsToHour(600)
console.log(result)
