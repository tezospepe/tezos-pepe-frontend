import { CTA, CTAButton, CTAClick, CTADescription, CTAHeader } from './styles'
import { ButtonVariant } from './types'

export const SplashCTA = () => {
  return (
    <CTA>
      <CTAHeader>
        PEPE without the Gas Fees
      </CTAHeader>
      <CTADescription>
      lipsome dupsome lipsome dupsome lipsome dupsome lipsome dupsome
      lipsome dupsome lipsome dupsome lipsome dupsome lipsome dupsomelipsome dupsome lipsome dupsome lipsome dupsome lipsome dupsome lipsome 
      dupsome lipsome dupsome
      </CTADescription>
      <CTAClick>
        <CTAButton>PepePot</CTAButton>
        <CTAButton variant={ButtonVariant.Outline}>PepeSwap</CTAButton>
      </CTAClick>
    </CTA>
  )
}