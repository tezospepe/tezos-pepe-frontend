import styled from 'styled-components'
import pepelegs from './assets/pepelegs.png';

export const PepeImage = styled.img`
  width: 100%;
  max-width: 1150px;
`

export const SplashPepe = () => {
  return (
      <PepeImage src={pepelegs}></PepeImage>
  )
}