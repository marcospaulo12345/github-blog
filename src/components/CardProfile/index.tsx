import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { CardProfileContainer, CardProfileContent } from './styles'

export function CardProfile() {
  return (
    <CardProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/42808003?v=4" alt="" />
      <CardProfileContent>
        <h1>Marcos Paulo</h1>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div>
          <span>
            <GithubLogo size={18} weight="fill" />
            marcospaulo12345
          </span>
          <span>
            <Buildings size={18} weight="fill" />
            vasp
          </span>
          <span>
            <Users size={18} weight="fill" />4 seguidores
          </span>
        </div>
        <a
          href="https://github.com/marcospaulo12345"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
          <ArrowSquareOut size={18} />
        </a>
      </CardProfileContent>
    </CardProfileContainer>
  )
}
