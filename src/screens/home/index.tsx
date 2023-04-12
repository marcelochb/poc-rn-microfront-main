import React from 'react';
import { TemplateMainHome } from '@poc/templates';
import { ThemeBase } from '@poc/theme';
import { useNavigation } from '@react-navigation/native';
import { PaymentStack } from '@poc/payment';
import { LoanStack } from '@poc/loan';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/slice';
import { IGlobalState } from '@poc/interfaces';
import { PixStack } from '@poc/pix';

export const Home = () => {
  const navigation = useNavigation<any>();
  const theme = useSelector((state:IGlobalState) => state.theme.value)
  const dispatch = useDispatch()
  return (
    <TemplateMainHome
      theme={theme}
      title="POC Microfront"
      labelFirstButton="Pagamentos"
      onPressFirstButton={() => navigation.navigate(PaymentStack.initialRoute)}
      labelSecondButton="Empréstimos"
      onPressSecondButton={() => navigation.navigate(LoanStack.initialRoute)}
      labelThirdButton="Pix"
      onPressThirdButton={() => navigation.navigate(PixStack.initialRoute)}
      isChecked={theme.name == 'Midway'}
      onClickMidway={() => dispatch(changeTheme(ThemeBase.Midway))}
      onClickRiachuelo={() => dispatch(changeTheme(ThemeBase.Riachuelo))}
    />
  );
};
