import "./Article.css"

const Article = (props) => {
  const { name, description } = props
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
    </article>
  )
}

export default Article
