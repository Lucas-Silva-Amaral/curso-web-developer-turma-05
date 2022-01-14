// Crie uma função que recebe duas notas como argumento e retorna a média entre elas. Utilize arrow function e atribua a uma constante.

const show = (a) => {
  console.log(a)
}

const average = (gradeOne, gradeTwo, callback) => {
  const total = gradeOne + gradeTwo
  callback(total / 2)
}

average(5, 2, show)
