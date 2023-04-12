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
      <Tab.Screen
        name={PaymentStack.stack.title}
        component={PaymentStack.stack.component}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={LoanStack.stack.title}
        component={LoanStack.stack.component}
        options={{headerShown: false, unmountOnBlur:true}}
      />
      <Tab.Screen
        name={PixStack.stack.title}
        component={PixStack.stack.component}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  )
}
