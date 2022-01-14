// 14 - Uma empresa gostaria de organizar seu quadro de funcionários, para isso
// contratou o estagiário Juquinha para criar um software. O CEO da empresa fez
// uma lista de pedidos para o Juquinha.
// const employees = [
// { id: 1, name: 'Carlos', age: 35, active: false, birth_date: '13/05/1986',
// contract_date: '20/07/2015', job: 'front-end', type: 'clt' },
// { id: 2, name: 'Matheus', age: 30, active: true, birth_date: '03/07/1991',
// contract_date: '01/03/2020', job: 'front-end', type: 'clt'},
// { id: 3, name: 'Pamela', age: 23, active: true, birth_date: '20/09/1998',
// contract_date: '19/06/2021', job: 'back-end', type: 'pj'},
// { id: 4, name: 'Fabiana', age: 32, active: false, birth_date: '08/12/1989',
// contract_date: '13/04/2018', job: 'front-end', type: 'pj'},
// { id: 5, name: 'João', age: 37, active: true, birth_date: '08/12/1984', contract_date:
// '03/08/2014', job: 'front-end', type: 'clt'},
// { id: 6, name: 'Miguel', age: 29, active: true, birth_date: '08/12/1992',
// contract_date: '26/02/2015', job: 'fullstack', type: 'clt'},
// { id: 7, name: 'Francine', age: 27, active: false, birth_date: '27/01/1994',
// contract_date: '23/05/2019', job: 'designer', type: 'pj'},
// { id: 8, name: 'Matheus', age: 31, active: true, birth_date: '10/11/1990',
// contract_date: '18/09/2017', job: 'marketing', type: 'clt'},
// { id: 9, name: 'Gabriel', age: 28, active: true, birth_date: '08/12/1993',
// contract_date: '14/11/2020', job: 'financeiro', type: 'clt'}
// ]
// Pedidos:
// ● A - Função para retornar apenas o funcionário com o id informado:
// ● B - Função para filtrar apenas os funcionários ativos na empresa:
// ● C - Função para filtrar apenas funcionários clt
// ● D - Função para criar uma nova estrutura onde cada funcionário receberá
// uma nova informação de base salarial
// ● E - Função onde separa em 2 grupos os funcionários pj e clt
// ● F - Função que retorna apenas funcionários ativos ordenados por ordem
// de idade

const employees = [
  {
    id: 1,
    name: "Carlos",
    age: 35,
    active: false,
    birth_date: "13/05/1986",
    contract_date: "20/07/2015",
    job: "front-end",
    type: "clt",
  },
  {
    id: 2,
    name: "Matheus",
    age: 30,
    active: true,
    birth_date: "03/07/1991",
    contract_date: "01/03/2020",
    job: "front-end",
    type: "clt",
  },
  {
    id: 3,
    name: "Pamela",
    age: 23,
    active: true,
    birth_date: "20/09/1998",
    contract_date: "19/06/2021",
    job: "back-end",
    type: "pj",
  },
  {
    id: 4,
    name: "Fabiana",
    age: 32,
    active: false,
    birth_date: "08/12/1989",
    contract_date: "13/04/2018",
    job: "front-end",
    type: "pj",
  },
  {
    id: 5,
    name: "João",
    age: 37,
    active: true,
    birth_date: "08/12/1984",
    contract_date: "03/08/2014",
    job: "front-end",
    type: "clt",
  },
  {
    id: 6,
    name: "Miguel",
    age: 29,
    active: true,
    birth_date: "08/12/1992",
    contract_date: "26/02/2015",
    job: "fullstack",
    type: "clt",
  },
  {
    id: 7,
    name: "Francine",
    age: 27,
    active: false,
    birth_date: "27/01/1994",
    contract_date: "23/05/2019",
    job: "designer",
    type: "pj",
  },
  {
    id: 8,
    name: "Matheus",
    age: 31,
    active: true,
    birth_date: "10/11/1990",
    contract_date: "18/09/2017",
    job: "marketing",
    type: "clt",
  },
  {
    id: 9,
    name: "Gabriel",
    age: 28,
    active: true,
    birth_date: "08/12/1993",
    contract_date: "14/11/2020",
    job: "financeiro",
    type: "clt",
  },
]
// A
const empId = (employees, id) => {
  const checkId = employees.find((emp) => emp.id === id)
  const result = checkId ? checkId : "Não existe funcionário com esse id"
  console.log(result)
}
empId(employees, 9)

// B
const empActive = (employees) => {
  const checkActiv = employees.filter((employee) => employee.active)
  console.log(checkActiv)
}
empActive(employees)

// C
const empClt = (employees) => {
  const checkClt = employees.filter((employee) => employee.type === "clt")
  console.log(checkClt)
}
empClt(employees)

// D
const baseSal = (employees) => {
  const base = employees.map((employee, index) => {
    return {
      id: employee.id,
      name: employee.name,
      age: employee.age,
      active: employee.active,
      birth_date: employee.birth_date,
      contract_date: employee.contract_date,
      job: employee.job,
      type: employee.type,
      base_salary: employee.type === "clt" ? 1000 : 2000,
    }
  })
  console.log(base)
}
baseSal(employees)

// E

const partType = (employees) => {
  const pj = employees.filter((employee) => employee.type === "pj")
  const clt = employees.filter((employee) => employee.type === "clt")
  console.log(pj)
  console.log(clt)
}
partType(employees)
