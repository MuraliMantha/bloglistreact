import './index.css'

const BlogItem = props => {
  const {eachDetails} = props
  const {title, description, publishedDate} = eachDetails

  return (
    <li className="list-item">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
