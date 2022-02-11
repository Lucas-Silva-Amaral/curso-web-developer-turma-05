window.onload = () => {
  const [p1, p2] = document.querySelectorAll("p")

  p2.remove()
  p1.innerHTML = "Hello World!"
}
