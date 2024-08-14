import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Router from './src/navigation/Router';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <Router />
    </>
  );
}

export default App;
