import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { PaymentStack } from '@poc/payment';
import { BottomTab } from './bottomTab';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}} />
      <Stack.Screen name="PaymentStack" component={PaymentStack} />
    </Stack.Navigator>
  );
};
