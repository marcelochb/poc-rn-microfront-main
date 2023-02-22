import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../../screens';
import { PaymentStack } from '@poc/payment';
import { LoanStack } from '@poc/loan';
import { PixStack } from '@poc/pix';
import { LOAN_NAVIGATORS } from '@poc/loan';
const Tab = createBottomTabNavigator();
export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Inicio' component={Home} />
      <Tab.Screen name='Pagamentos' component={PaymentStack} />
      <Tab.Screen name={LOAN_NAVIGATORS.title} component={LoanStack} options={{headerShown: false}} />
      <Tab.Screen name='Pix' component={PixStack} />
    </Tab.Navigator>
  )
}
