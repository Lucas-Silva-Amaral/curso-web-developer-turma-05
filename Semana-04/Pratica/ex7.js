// 7 - Dado um array de entrada com o nome e as notas de avaliações dos alunos,
// retorne uma lista com os alunos que tiraram 0 em todas as provas.
// Exemplo de Entrada:
// [
// {nome: ,
// notas: [ ]
// ]

const students = [
  {
    name: "Lucas",
    grades: [0, 0, 0],
  },
  {
    name: "Gabi",
    grades: [9, 7, 9],
  },
  {
    name: "Miriam",
    grades: [0, 0, 0],
  },
]

const studentWithZero = (students) => {
  const result = students.filter((student) => {
    return student.grades.some((grade) => {
      return grade === 0
    })
  })
  console.log(result)
}

studentWithZero(students)
