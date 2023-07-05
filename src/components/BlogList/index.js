import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list-container">
      {blogsList.map(each => (
        <BlogItem key={each.id} eachDetails={each} />
      ))}
    </ul>
  )
}

export default BlogList
