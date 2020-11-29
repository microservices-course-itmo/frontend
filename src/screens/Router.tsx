import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTES from '../routes'
import MainScreen from './Main'
import WineScreen from './Wine'

const Stack = createStackNavigator()

function MainRouter() {
  return (
    <Stack.Navigator headerMode='screen'>
      <Stack.Screen
        options={{ header: () => null }}
        name={ROUTES.MAIN}
        component={MainScreen}
      />
      <Stack.Screen
        options={{ header: () => null }}
        name={ROUTES.WINE_PAGE}
        component={WineScreen}
      />
    </Stack.Navigator>
  )
}

export default MainRouter
