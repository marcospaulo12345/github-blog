import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { CardProfileContainer, CardProfileContent } from './styles'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface GithubUser {
  avatar_url: string
  bio: string
  html_url: string
  name: string
  login: string
  followers: number
  company: string
}

export function CardProfile() {
  const [githubUser, setGithubUser] = useState<GithubUser>({} as GithubUser)

  async function getInfoUser() {
    await axios
      .get('https://api.github.com/users/marcospaulo12345')
      .then((response) => {
        setGithubUser(response.data)
      })
  }

  useEffect(() => {
    getInfoUser()
  }, [])

  return (
    <CardProfileContainer>
      <img src={githubUser.avatar_url} alt="" />
      <CardProfileContent>
        <h1>{githubUser.name}</h1>
        <p>{githubUser.bio}</p>

        <div>
          <span>
            <GithubLogo size={18} weight="fill" />
            {githubUser.login}
          </span>
          <span>
            <Buildings size={18} weight="fill" />
            vasp
          </span>
          <span>
            <Users size={18} weight="fill" />
            {githubUser.followers} sequidores
          </span>
        </div>
        <a href={githubUser.html_url} target="_blank" rel="noreferrer">
          GITHUB
          <ArrowSquareOut size={18} />
        </a>
      </CardProfileContent>
    </CardProfileContainer>
  )
}
