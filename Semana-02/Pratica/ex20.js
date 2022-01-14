// 20 - Dado o objeto abaixo, faça um programa que imprime no console o nome,
// cpf e telefone formatados. Dica: Separe o código em funções de formatação
// para cada um dos campos.
// Exemplo de Entrada 1:
// {nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'}
// Exemplo de Saída 1:
// Analu dos Santos Baptista
// 147.762.139-31
// (83) 2800-8258
// Exemplo de Entrada 2:
// {nome: 'Cláudio da silva figueiredo ', cpf: '47187999887', telefone:
// '11988754092'}
// Exemplo de Saída 2:
// Cláudio da silva figueiredo
// 471.879.998-87
// (11) 98875-4092

const person = {
  nome: "Analu dos santos baptista",
  cpf: "14776213931",
  telefone: "8328008258",
}
let assist = ""
let cont = 0

function formatName(name) {
  assist = ""
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      assist += " "
      cont++
    } else {
      assist += name[i]
    }
  }
  return assist
}

function formatCpf(cpf) {
  assist = ""
  for (let i = 0; i < cpf.length; i++) {
    if (i === 3) {
      assist += "."
    } else if (i === 6) {
      assist += "."
    } else if (i === 9) {
      assist += "-"
    }
    assist += cpf[i]
  }
  return assist
}

function formatPhone(phone) {
  assist = ""
  for (let i = 0; i < phone.length; i++) {
    if (i === 0) {
      assist += "("
    } else if (i === 2) {
      assist += ")" + " "
    } else if (i === 6) {
      assist += "-"
    }
    assist += phone[i]
  }
  return assist
}

console.log(formatName(person.nome))
console.log(formatCpf(person.cpf))
console.log(formatPhone(person.telefone))
