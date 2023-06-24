import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  a {
    position: absolute;
    top: 2rem;
    right: 2.5rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`

export const CardProfileContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
  }

  p {
    line-height: 1.6;
  }

  div {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
