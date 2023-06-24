import styled from 'styled-components'

import backgroundHeader from '../../assets/background-header.svg'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 18.5rem;
  justify-content: center;
  background: ${(props) => props.theme['base-profile']};
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;

  img {
    margin-top: 4rem;
    width: 9.25rems;
    height: 6.125rem;
  }
`
