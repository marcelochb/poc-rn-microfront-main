import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { PaymentStack } from '@poc/payment';
import { BottomTab } from './bottomTab';
import { LoanStack } from '@poc/loan';
import { PixStack } from '@poc/pix';
import { LOAN_STACK } from '@poc/loan';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}} />
      <Stack.Screen name="PaymentStack" component={PaymentStack} options={{title:'Pagamentos'}} />
      <Stack.Screen name={LOAN_STACK.name} component={LoanStack} options={{title:'Empréstimos'}} />
      <Stack.Screen name="PixStack" component={PixStack} options={{title:'Pix'}} />
    </Stack.Navigator>
  );
};
