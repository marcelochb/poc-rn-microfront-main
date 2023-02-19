import React from 'react';
import { TemplateMainHome } from '@poc/templates';
import {ThemeBase} from '@poc/theme';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <TemplateMainHome
      theme={ThemeBase.Midway}
      title="POC Microfront"
      labelFirstButton="Pagamentos"
      onPressFirstButton={() => navigation.navigate("PaymentStack", {screen: "PaymentList"})}
      labelSecondButton="Empréstimos"
      onPressSecondButton={() => navigation.navigate("LoanStack", {screen: "LoanList"})}
      labelThirdButton="Pix"
      onPressThirdButton={() => navigation.navigate("PixStack", {screen: "PixList"})}
    />
  );
};
