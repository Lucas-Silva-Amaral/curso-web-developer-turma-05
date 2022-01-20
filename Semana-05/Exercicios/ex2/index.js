import axios from "axios"

const URL = "https://jsonplaceholder.typicode.com/"

// GET pegar todos os posts
const get = async () => {
  try {
    const response = await axios.get(URL + "posts")
    console.log("POST", response.data)
  } catch (error) {
    console.log(error.massage)
  }
}
// get()

// Pegar o primeiro post da lista
const getFirst = async () => {
  try {
    const response = await axios.get(URL + "posts/1")
    console.log("FIRST POST", response.data)
  } catch (error) {
    console.log(error.massage)
  }
}
getFirst()

// Cadastrar um novo post

const createPost = async () => {
  const blogPost = {
    title: "Titulo do meu site",
    body: "Corpo do meu site",
    userId: 1,
  }
  try {
    const response = await axios.post(URL + "posts", blogPost)
    console.log("CREATE NEW POST", response.data)
  } catch (error) {
    console.log(error)
  }
}
createPost()

// put modifica o post

const putPost = async () => {
  const blogPost = {
    title: "Hello, world",
    body: "Eu cheguei",
    id: 1,
  }
  try {
    const response = await axios.put(URL + "posts/1", blogPost)
    console.log("MODIFY POST", response.data)
  } catch (error) {
    console.log(error.massage)
  }
}
putPost()

// delete deleta o post informando o ID delete

const delPost = async () => {
  try {
    const response = await axios.delete(URL + "posts/1")
    console.log("DELETE POST WITH ID ONE", response.data)
  } catch (error) {
    console.log(error)
  }
}
delPost()
