import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Routes} from './routes';

const Index = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default Index;
