import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { PaymentStack, PAYMENT_NAVIGATORS } from '@poc/payment';
import { BottomTab } from './bottomTab';
import { LoanStack } from '@poc/loan';
import { PixStack, PIX_NAVIGATORS } from '@poc/pix';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown:false, headerBackTitleVisible: false}}
      />
      <Stack.Screen name={PAYMENT_NAVIGATORS.stack} component={PaymentStack} options={{title:PAYMENT_NAVIGATORS.title}} />
      <Stack.Screen name={LoanStack.stack.name} component={LoanStack.stack.component} options={{headerShown: false}}/>
      <Stack.Screen name={PIX_NAVIGATORS.stack} component={PixStack} options={{title:PIX_NAVIGATORS.title}} />
    </Stack.Navigator>
  );
};
