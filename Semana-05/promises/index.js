import axios from "axios"
import { promise } from "./promise.js"
// sucesso sempre no then() e erro no catch()
promise.then(() => console.log("Success!")).catch(() => console.log("Error!"))

const helperPromise = () => promise

const demoPromise = async () => {
  console.log("Start")
  try {
    const response = await helperPromise()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  console.log("End")
}

demoPromise()

// Precisa exeecutar duas requisições em paralelo e so podemos segur com execucao do codigo, quando ambas as requisições terminarem.

const allPromises = async () => {
  const promises = [helperPromise(), helperPromise()]
  try {
    const response = await Promise.all(promises)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
allPromises()

const racePromises = async () => {
  const promises = [helperPromise(), helperPromise()]
  try {
    const response = await Promise.race(promises)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
racePromises()

const URL = "https://jsonplaceholder.typicode.com/"

const get = async () => {
  try {
    const response = await axios.get(URL + "users")
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
get()

const post = async () => {
  try {
    const blogPost = {
      name: "John Doe",
      username: "johndoe",
    }
    const response = await axios.post(URL + "posts", blogPost)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
post()

const put = async () => {
  try {
    const blogPost = {
      name: "John Doe",
      username: "johndoe",
      userId: 2,
      id: 1,
    }
    const response = await axios.put(URL + "posts/1", blogPost)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
put()
