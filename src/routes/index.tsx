import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { PaymentStack } from '@poc/payment';
import { BottomTab } from './bottomTab';
import { LoanStack } from '@poc/loan';
import { PixStack } from '@poc/pix';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown:false, headerBackTitleVisible: false}}
      />
      <Stack.Screen
        name={PaymentStack.stack.name}
        component={PaymentStack.stack.component}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={LoanStack.stack.name}
        component={LoanStack.stack.component}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={PixStack.stack.name}
        component={PixStack.stack.component}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
