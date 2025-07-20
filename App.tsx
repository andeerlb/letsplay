import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './src/Root';
import { ThemeProvider } from '@context/ThemeContext';
import { LanguageProvider } from '@context/LanguageContext';
import { Provider } from 'react-redux';
import { store } from '@store/index';

function App() {
  
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <LanguageProvider>
          <ThemeProvider>
            <Root />
          </ThemeProvider>
        </LanguageProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
