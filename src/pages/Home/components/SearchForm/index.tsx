import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer action="">
      <header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>
      <input type="search" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
