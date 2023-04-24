import styled from 'styled-components'
import { SplashCTA } from './SplashCTA'
import { SplashPepe } from './SplashPepe'
import { Backdrop } from 'app/components/Backdrop';

export const PageWrapper = styled(Backdrop)`
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