import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../../screens';
import { PaymentStack } from '@poc/payment';
import { LoanStack } from '@poc/loan';
import { PixStack } from '@poc/pix';
import { HomeStack } from '../stack/home';
const Tab = createBottomTabNavigator();
export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Inicio' component={HomeStack} options={{headerShown:false}} />
      <Tab.Screen name='Pagamentos' component={PaymentStack} />
      <Tab.Screen
        name={LoanStack.stack.name}
        component={LoanStack.stack.component}
        options={{headerShown: false}}
      />
      <Tab.Screen name='Pix' component={PixStack} />
    </Tab.Navigator>
  )
}
