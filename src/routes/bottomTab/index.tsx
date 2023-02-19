import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PaymentStack } from '@poc/payment';
import { Home } from '../../screens';
const Tab = createBottomTabNavigator();
export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Inicio' component={Home} />
      <Tab.Screen name='Pagamentos' component={PaymentStack} />
      <Tab.Screen name='Emprestimos' component={PaymentStack} />
      <Tab.Screen name='Pix' component={PaymentStack} />
    </Tab.Navigator>
  )
}
