import { ButtonContainer, CTA, CTAButton, CTAClick, CTADescription, CTAHeader } from './styles'
import { ButtonVariant } from './types'

export const SplashCTA = () => {
  return (
    <CTA>
      <CTAHeader>
        PEPE without the Gas Fees
      </CTAHeader>
      <CTADescription>
        <span>If a picture is worth a thousand words, then a meme is worth a thousand pictures!</span>
        <span>
          Tezos Pepe is no different - Pepes may look alike, but no two Pepes are the same!  
          With Tezos Pepe, tezonians can have fun building, trading, playing, memeing, and using the DAO treasury to fund other projects.
        </span>
      </CTADescription>
      <CTAClick>
        <ButtonContainer>
          <div>soon!</div>
          <CTAButton variant={ButtonVariant.Outline} disabled>
            PepePot
          </CTAButton>
        </ButtonContainer>
        <a href="https://pepeswap.tez.page/"><CTAButton>PepeSwap</CTAButton></a>
      </CTAClick>
    </CTA>
  )
}