import { useEffect, useState } from 'react'
import { CardPost } from '../../components/CardPost'
import { CardProfile } from '../../components/CardProfile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, ListPost } from './styles'
import axios from 'axios'

export interface Post {
  title: string
  body: string
  updated_at: string
  number: number
}

interface AllIssues {
  total_count: number
  items: Post[]
}

export function Home() {
  const [issues, setIssues] = useState<AllIssues>({} as AllIssues)
  const text = 'Teste'
  const username = 'marcospaulo12345'
  const repo = 'github-blog'

  async function getIssues() {
    await axios
      .get(
        `https://api.github.com/search/issues?q=${text}%20repo:${username}/${repo}`,
      )
      .then((response) => {
        console.log(response)
        setIssues(response.data)
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <HomeContainer>
      <CardProfile />
      <SearchForm countIssues={issues.total_count} />

      <ListPost>
        {Object.keys(issues).length !== 0 &&
          issues.items.map((post) => {
            return <CardPost key={post.number} post={post} />
          })}
      </ListPost>
    </HomeContainer>
  )
}
