import { CardPost } from '../../components/CardPost'
import { CardProfile } from '../../components/CardProfile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, ListPost } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CardProfile />
      <SearchForm />

      <ListPost>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </ListPost>
    </HomeContainer>
  )
}
