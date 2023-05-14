import { 
  CTA,
  CTAClick, 
  CTADescription, 
  CTAHeader, 
  CTAProductCard 
} from './styles'

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
        <CTAProductCard href="https://nft.tezospepe.com/" target="_blank" >
          <span>
          🐸 pepe et nunc
          </span>
          <span>
            NFT platform powered by $PEPE. Users can buy and sell NFTs using $PEPE. 
            1% of each sell is sent to the DAO Treasury
          </span>
        </CTAProductCard>
        <CTAProductCard href="https://pot.tezospepe.com/swap" target="_blank">
          <span>
          🐸 PepeSwap
          </span>
          <span>
          PepeSwap is a DEX front end that utilizes Spicyswap backend. It allows users to see trades, charts and liquidity in one interface.
          </span>
        </CTAProductCard>
        <CTAProductCard href="https://pot.tezospepe.com/" target="_blank">
          <span>
          🐸 PepePot
          </span>
          <span>
          A lottery game where users bet $PEPE to win a pot of $PEPE. On each bet, 20% of your $PEPE is burned, 40% is added to the pot, and 40% goes to house reserves.
          </span>
        </CTAProductCard>
      </CTAClick>
    </CTA>
  )
}