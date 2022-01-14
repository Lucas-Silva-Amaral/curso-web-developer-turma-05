// 2. Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade, utilize os conhecimentos da aula para melhorar o código.

// Exemplo Entrada:
// { name: ‘Juca’, idade: 28 }

// Exemplo Saída:
// Maior de idade

const user = {
  name: "Lucas",
  age: 27,
}

const { age } = user // Destruturing

const show = (value) => {
  console.log(value)
}

const checkAge = ({ age }, callback) => {
  age >= 18 ? callback("Maior de idade") : callback("Menor de idade")
}

checkAge(user, show)
