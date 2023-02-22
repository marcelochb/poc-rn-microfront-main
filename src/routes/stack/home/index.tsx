import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../../../screens'
import { LoanListScreen, LoanDetailScreen } from '@poc/loan'
import { LOAN_NAVIGATORS } from '@poc/tools'
const Stack = createNativeStackNavigator()
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen
        name={LOAN_NAVIGATORS.screens.list.name}
        component={LoanListScreen}
        options={{title: LOAN_NAVIGATORS.screens.list.title}}
        />
      <Stack.Screen
        name={LOAN_NAVIGATORS.screens.detail.name}
        component={LoanDetailScreen}
        options={{title: LOAN_NAVIGATORS.screens.detail.title}}
      />
    </Stack.Navigator>
  )
}
