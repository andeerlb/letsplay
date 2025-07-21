import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './src/Root';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Config from 'react-native-config';

if (Config.ENABLE_MIRAGE) {
  console.log("Mirage was enabled");
  const { makeServer } = require('./mirage/server');
  makeServer();
}

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
