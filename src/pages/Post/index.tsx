import { NavLink } from 'react-router-dom'
import { PostContainer, PostContent, PostHeader } from './styles'
import { CalendarBlank, ChatCircle, GithubLogo } from 'phosphor-react'

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <div>
          <NavLink to="#">Voltar</NavLink>
          <a href="">VER NO GITHUB</a>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <div>
          <span>
            <GithubLogo size={18} weight="fill" />
            marcospaulo12345
          </span>
          <span>
            <CalendarBlank size={18} weight="fill" />
            Há 1 dia
          </span>
          <span>
            <ChatCircle size={18} weight="fill" />4 comentários
          </span>
        </div>
      </PostHeader>

      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </PostContent>
    </PostContainer>
  )
}
