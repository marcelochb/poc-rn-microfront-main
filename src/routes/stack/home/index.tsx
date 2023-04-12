import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../../../screens'
import { LoanStack } from '@poc/loan'
import {PaymentStack} from '@poc/payment'
import { PixStack } from '@poc/pix'
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
      {
        PaymentStack.screens.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{title: screen.title}}
          />
        ))
      }
      {
        PixStack.screens.map(screen => (
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
