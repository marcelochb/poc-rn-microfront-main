import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../../../screens'
import { LoanStack } from '@poc/loan'
const Stack = createNativeStackNavigator()
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen name='Home' component={Home} />
      {
        LoanStack.screens.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{title: screen.title}}
          />
        ))
      }
    </Stack.Navigator>
  )
}
