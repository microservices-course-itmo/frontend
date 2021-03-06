import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { useResource } from 'rest-hooks'
import WineBottlePicture from './index'
import CatalogResource from '../../resources/catalog'

storiesOf('WineBottlePicture', module).add('Default', () => {
  const position = useResource(CatalogResource.detailShape(), {
    winePositionId: 'wine_position_1',
  })

  return <WineBottlePicture position={position} />
})
