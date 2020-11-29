import React, { Suspense } from 'react'
import { render } from '@testing-library/react-native'
import { MockProvider } from '@rest-hooks/test'
import RecommendationBlock from './index'
import { fixtures } from '../../tests/__mocks__/fixtures'
import MockedNavigator from '../../tests/__mocks__/MockedNavigator'

describe('RecommendationBlock', () => {
  const Component = () => (
    <Suspense fallback='Loading'>
      <MockProvider results={fixtures}>
        <RecommendationBlock />
      </MockProvider>
    </Suspense>
  )

  it('should render', () => {
    render(
      <MockedNavigator
        component={Component}
        params={{ winePositionId: 'wine_position1' }}
      />
    )
  })
})
