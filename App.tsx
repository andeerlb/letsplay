import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './src/Root';
import { Provider } from 'react-redux';
import { store } from '@store/index';

function App() {
  
  return (
    <SafeAreaProvider>
      <Provider store={store}>
          <Root />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
