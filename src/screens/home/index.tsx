import React from 'react';
import { TemplateMainHome } from '@poc/templates';
import {ThemeBase} from '@poc/theme';
import { useNavigation } from '@react-navigation/native';
import { LOAN_NAVIGATORS } from '@poc/loan';
import { PAYMENT_NAVIGATORS } from '@poc/payment';
import { PIX_NAVIGATORS } from '@poc/pix';

export const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <TemplateMainHome
      theme={ThemeBase.Midway}
      title="POC Microfront"
      labelFirstButton="Pagamentos"
      onPressFirstButton={() => navigation.navigate(PAYMENT_NAVIGATORS.stack, {screen: PAYMENT_NAVIGATORS.screens.list})}
      labelSecondButton="Empréstimos"
      onPressSecondButton={() => navigation.navigate(LOAN_NAVIGATORS.stack)}
      labelThirdButton="Pix"
      onPressThirdButton={() => navigation.navigate(PIX_NAVIGATORS.stack, {screen: PIX_NAVIGATORS.screens.list})}
    />
  );
};
