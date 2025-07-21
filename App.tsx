import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './src/Root';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Config from 'react-native-config';

console.log(Config);
console.log(Config.ENABLE_MIRAGE);


if (Config.ENABLE_MIRAGE) {
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
