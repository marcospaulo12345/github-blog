import styled from 'styled-components'

export const CardPostContainer = styled.section`
  width: 26rem;
  height: 16.25rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 0.3s;
  }

  header {
    display: flex;
    align-items: start;
    gap: 1rem;

    h3 {
      font-size: 1.25rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      white-space: nowrap;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-span']};
      margin-top: 0.3rem;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.6;
  }
`
