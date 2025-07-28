import { ThemeProvider } from '@context/ThemeProvider';
import { store } from '@store/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Config from 'react-native-config';
import { Provider } from 'react-redux';
import Root from './src/Root';

if (Config.ENABLE_MIRAGE === "true") {
  console.warn("Mirage was enabled");
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
