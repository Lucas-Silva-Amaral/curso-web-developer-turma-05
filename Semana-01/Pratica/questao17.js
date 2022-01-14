// 17 - Faça um programa que receberá a hora inicial e a hora final de um jogo. A
// seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um
// dia e terminar em outro, tendo uma duração máxima de 24 horas.
// Ex: Início: 22 - Término: 06 - Tempo de Duração: 8 horas

function duration(start, end) {
  if (start > end) {
    let duration = end + 24 - start
    return "O jogo durou: " + duration + " horas"
  } else {
    let duration = end - start
    return "O jogo durou: " + duration + " horas"
  }
}

const result = duration(6, 15)
console.log(result)
