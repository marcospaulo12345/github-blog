import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
