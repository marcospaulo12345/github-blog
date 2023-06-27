import { NavLink } from 'react-router-dom'
import {
  PostContainer,
  PostContent,
  PostHeader,
  PostInfo,
  PostLinks,
} from './styles'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

import ReactMarkdown from 'react-markdown'

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <PostLinks>
          <NavLink to="#">
            <CaretLeft size={18} />
            Voltar
          </NavLink>
          <a href="">
            VER NO GITHUB
            <ArrowSquareOut size={18} />
          </a>
        </PostLinks>
        <h1>JavaScript data types and data structures</h1>
        <PostInfo>
          <span>
            <GithubLogo size={18} weight="fill" color="#3A536B" />
            marcospaulo12345
          </span>
          <span>
            <CalendarBlank size={18} weight="fill" color="#3A536B" />
            Há 1 dia
          </span>
          <span>
            <ChatCircle size={18} weight="fill" color="#3A536B" />4 comentários
          </span>
        </PostInfo>
      </PostHeader>

      <PostContent>
        <ReactMarkdown>
          **Programming languages all have built-in data structures, but these
          often differ from one language to another**. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
