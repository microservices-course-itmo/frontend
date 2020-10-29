import React from 'react'
import { Wine } from '../molecules/WineCard'
import CatalogView from '../organisms/CatalogView'

export default function CatalogScreen() {
  const wines: Wine[] = new Array(10).fill({
    name: 'Canti Merlot',
    country: 'Австралия',
    dryness: 'сухое',
    color: 'Красное',
    volume: 0.75,
    shop: { name: 'ВИНЛАБ', description: 'Супермаркет напитков' },
  })

  return <CatalogView>{wines}</CatalogView>
}
