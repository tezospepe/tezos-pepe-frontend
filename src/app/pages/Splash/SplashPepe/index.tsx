import styled from 'styled-components'
import pepelegs from './assets/pepelegs.png';

export const PepeImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  justify-self: flex-end;
`

export const SplashPepe = () => {
  return (
      <PepeImage src={pepelegs}></PepeImage>
  )
}