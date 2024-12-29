import React from 'react';
import { MainStack } from './navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './theme/ThemeProvider';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <MainStack />
      </ThemeProvider>
    </NavigationContainer>
  );
}