import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/index.tsx';
import { ThemeProvider } from './styles/theme/ThemeProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
