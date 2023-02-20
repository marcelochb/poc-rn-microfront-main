import React from 'react';
import { TemplateMainHome } from '@poc/templates';
import {ThemeBase} from '@poc/theme';
import { useNavigation } from '@react-navigation/native';
import { LOAN_STACK } from '@poc/loan';

export const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <TemplateMainHome
      theme={ThemeBase.Midway}
      title="POC Microfront"
      labelFirstButton="Pagamentos"
      onPressFirstButton={() => navigation.navigate("PaymentStack", {screen: "PaymentList"})}
      labelSecondButton="Empréstimos"
      onPressSecondButton={() => navigation.navigate(LOAN_STACK.name, {screen: LOAN_STACK.screens.list})}
      labelThirdButton="Pix"
      onPressThirdButton={() => navigation.navigate("PixStack", {screen: "PixList"})}
    />
  );
};
