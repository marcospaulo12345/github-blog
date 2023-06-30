import { CardPostContainer } from './styles'
import { Post } from '../../pages/Home'
import { useNavigate } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface CardPostProps {
  post: Post
}

export function CardPost({ post }: CardPostProps) {
  const navigate = useNavigate()

  function handleShowPost() {
    navigate(`post/${post.number}`)
  }

  return (
    <CardPostContainer onClick={handleShowPost}>
      <header>
        <h3>{post.title}</h3>
        <span>Há 1 dia</span>
      </header>
      <ReactMarkdown>{post.body}</ReactMarkdown>
    </CardPostContainer>
  )
}
