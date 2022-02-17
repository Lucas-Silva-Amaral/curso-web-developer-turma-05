import Article from "../Article"
import "./Main.css"

const data = [
  {
    title: "Titulo 1",
    description: "Description 1",
  },
  {
    title: "Titulo 2",
    description: "Description 2",
  },
  {
    title: "Titulo 3",
    description: "Description 3",
  },
  {
    title: "Titulo 4",
    description: "Description 4",
  },
  {
    title: "Titulo 5",
    description: "Description 5",
  },
  {
    title: "Titulo 6",
    description: "Description 6",
  },
]

const Main = () => {
  return (
    <main>
      {data.map((props) => (
        <Article name={props.title} description={props.description} />
      ))}
    </main>
  )
}

export default Main
