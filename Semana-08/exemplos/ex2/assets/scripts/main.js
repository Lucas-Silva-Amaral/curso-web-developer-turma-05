console.log("Hello World!")
console.log(window)
console.log(document)

window,
  (onload = () => {
    // Cria um elemento HTML
    const paragraph = document.createElement("p")
    console.log(paragraph)

    const body = document.querySelector("body")
    body.appendChild(paragraph)
    console.log(body)
  })
