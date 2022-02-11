window.onload = () => {
  const btn = document.querySelector("button")

  btn.addEventListener("click", () => {
    const task = document.querySelector("#minha-tarefa")
    task.remove()
  })

  const form = document.querySelector("form")
  form
    .addEventListener("submit", (event) => {
      event.preventDeafult()
      const formData = new FormData(form)

      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        userId: formData.get("userId"),
      }

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    })
    .then((response) => response.json())
    .then((json) => {
      event.target.reset()
    })
}
