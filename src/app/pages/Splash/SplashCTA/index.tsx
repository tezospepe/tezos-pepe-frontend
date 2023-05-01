import { CTA, CTAClick, CTADescription, CTAHeader, CTAProductCard } from './styles'

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
        <CTAProductCard href="https://pepe.tez.tools/" target="_blank" >
          <span>
          🐸 pepe et nunc
          </span>
          <span>
            NFT platform powered by $PEPE. Users can buy and sell NFTs using $PEPE. 
            1% of each sell is sent to the DAO Treasury
          </span>
        </CTAProductCard>
        <CTAProductCard href="https://pepeswap.tez.page/" target="_blank">
          <span>
          🐸 PepeSwap
          </span>
          <span>
          PepeSwap is a DEX front end that utilizes Spicyswap backend. It allows users to see trades, charts and liquidity in one interface.
          </span>
        </CTAProductCard>
        <CTAProductCard >
          <div>soon!</div>
          <span>
          🐸 PepePot
          </span>
          <span>
          A lottery game where users bet $PEPE to win a pot of $PEPE. 10% of each bet is burned and 10% is placed in the DAO.
          </span>
        </CTAProductCard>
      </CTAClick>
    </CTA>
  )
}