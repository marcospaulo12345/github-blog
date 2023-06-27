import styled from 'styled-components'

export const PostContainer = styled.main`
  max-width: 54rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: -5.5rem;
`

export const PostHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 2.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};

  h1 {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
`

export const PostLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    padding: 0.2rem 0;

    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;

    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    transition: border-bottom 0.3s;
  }
`

export const PostInfo = styled.div`
  display: flex;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};
  }
`
