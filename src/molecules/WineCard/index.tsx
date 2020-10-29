import React from 'react'
import styled from 'styled-components/native'
import { Shop } from '../../atoms/WineShopName'
import Recommendation from '../../atoms/Recommendation'
import WineBottlePicture from '../../atoms/WineBottlePicture'
import Like from '../../atoms/Like'
import WineInfo from '../../atoms/WineInfo'

export interface Wine {
  name: string
  country: string
  dryness: string
  color: string
  volume: number
  shop: Shop
}

interface WineCardProps {
  wine: Wine
}

function WineCard({
  wine: { name, country, dryness, color, volume, shop },
}: WineCardProps) {
  return (
    <Container>
      <TopBar>
        <Recommendation ratioAdvice={45} />
        <Like liked />
      </TopBar>
      <WineBottlePicture
        image={{
          uri:
            'data:image/png;base64,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',
        }}
      />
      <WineInfo
        name={name}
        country={country}
        dryness={dryness}
        color={color}
        volume={volume}
        shop={shop.name}
      />
    </Container>
  )
}

export default WineCard

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 3px 4px rgba(178, 178, 178, 0.1);
`

const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`
