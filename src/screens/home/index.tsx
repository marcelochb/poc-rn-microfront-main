import React from 'react';
import { TemplateMainHome } from '@poc/templates';
import {ThemeBase} from '@poc/theme';

export const Home = () => {
  return (
    <TemplateMainHome
      theme={ThemeBase.Midway}
      title="POC Microfront"
      labelFirstButton="Pagamentos"
      labelSecondButton="Empréstimos"
      labelThirdButton="Pix"
    />
  );
};
