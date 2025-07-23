import React from 'react';
import Root from './src/Root';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Config from 'react-native-config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@context/ThemeProvider';

if (Config.ENABLE_MIRAGE) {
  console.log("Mirage was enabled");
  const { makeServer } = require('./mirage/server');
  makeServer();
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
