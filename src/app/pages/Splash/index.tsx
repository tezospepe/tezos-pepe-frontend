import styled from 'styled-components'
import { SplashCTA } from './SplashCTA'
import { SplashPepe } from './SplashPepe'

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const SplashPage = () => {
  return (
    <PageWrapper>
      <SplashCTA />
      <SplashPepe />
    </PageWrapper>
  )
}