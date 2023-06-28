import { SearchFormContainer } from './styles'

interface SearchFormProps {
  countIssues: number
}

export function SearchForm({ countIssues }: SearchFormProps) {
  return (
    <SearchFormContainer action="">
      <header>
        <h2>Publicações</h2>
        <span>{countIssues} publicações</span>
      </header>
      <input type="search" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
