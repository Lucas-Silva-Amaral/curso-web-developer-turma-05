// calculadora
window.onload = () => {
  const form = document.querySelector("form")
  form.addEventListener("submit", (event) => {
    event.preventDeafult()
    const formData = new FormData(form)
    console.log(calculadora(formData.get("num1"), formData.get("num2")))
  })
}

const calculadora = (num1, num2) => {
  const soma = num1 + num2
  const subtracao = num1 - num2
  const multiplicacao = num1 * num2
  const divisao = num1 / num2

  return {
    soma,
    subtracao,
    multiplicacao,
    divisao,
  }
}
