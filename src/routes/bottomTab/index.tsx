import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../../screens';
import { PaymentStack } from '@poc/payment';
import { LoanStack } from '@poc/loan';
import { PixStack } from '@poc/pix';
const Tab = createBottomTabNavigator();
export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Inicio' component={Home} />
      <Tab.Screen name='Pagamentos' component={PaymentStack} />
      <Tab.Screen name='Emprestimos' component={LoanStack} />
      <Tab.Screen name='Pix' component={PixStack} />
    </Tab.Navigator>
  )
}
