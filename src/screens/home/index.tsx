import React from 'react';
import { TemplateMainHome } from '@poc/templates';
import { ThemeBase } from '@poc/theme';
import { useNavigation } from '@react-navigation/native';
import { PAYMENT_NAVIGATORS } from '@poc/payment';
import { PIX_NAVIGATORS } from '@poc/pix';
import { LoanStack } from '@poc/loan';
import { Buttons, PageWrapper, Texts } from '@poc/ui';
import { useDispatch, useSelector } from 'react-redux';
import { StateGlobal } from '../../store';
import { changeTheme } from '../../store/slice';
import { IGlobalState } from '@poc/interfaces';
import IconPlus from '../../assets/Icons/iconPlus.svg';

export const Home = () => {
  const navigation = useNavigation<any>();
  const theme = useSelector((state:IGlobalState) => state.theme.value)
  const dispatch = useDispatch()
  return (
    <TemplateMainHome
      theme={theme}
      title="POC Microfront"
      labelFirstButton="Pagamentos"
      onPressFirstButton={() => navigation.navigate(PAYMENT_NAVIGATORS.stack, {screen: PAYMENT_NAVIGATORS.screens.list})}
      labelSecondButton="Empréstimos"
      onPressSecondButton={() => navigation.navigate(LoanStack.initialRoute)}
      labelThirdButton="Pix"
      onPressThirdButton={() => navigation.navigate(PIX_NAVIGATORS.stack, {screen: PIX_NAVIGATORS.screens.list})}
    />
  // <PageWrapper theme={theme}>
  //   <Buttons.Base
  //     label='Increment'
  //     theme={theme}
  //     onPress={() => dispatch(changeTheme(ThemeBase.Midway))}
  //   />
  //   <Texts.Title theme={theme}>Tema</Texts.Title>
  //   <Buttons.Base
  //     label='Decrement'
  //     theme={theme}
  //     onPress={() => dispatch(changeTheme(ThemeBase.Riachuelo))}
  //   />
  //   <Buttons.Link
  //     label='Decrement'
  //     theme={theme}
  //     IconSVG={IconPlus}
  //     onPress={() => dispatch(changeTheme(ThemeBase.Riachuelo))}
  //   />
  // </PageWrapper>
  );
};
