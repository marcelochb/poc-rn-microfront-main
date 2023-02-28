import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../../../screens'
import { LoanListScreen, LoanDetailScreen, LoanStack } from '@poc/loan'
import { LOAN_NAVIGATORS } from '@poc/tools'
const Stack = createNativeStackNavigator()
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen name='Home' component={Home} />
      {
        LoanStack.screens.map(screen => (
          <Stack.Screen
            name={screen.name}
            component={screen.component}
            options={{title: screen.title}}
          />
        ))
      }
    </Stack.Navigator>
  )
}
