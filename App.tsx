import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './src/Root';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Config from 'react-native-config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if (Config.ENABLE_MIRAGE) {
  console.log("Mirage was enabled");
  const { makeServer } = require('./mirage/server');
  makeServer();
}

const queryClient = new QueryClient();

function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Root />
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
