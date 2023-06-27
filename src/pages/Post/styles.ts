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
  gap: 2rem;
  padding: 2rem 2.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
`

export const PostContent = styled.div``
