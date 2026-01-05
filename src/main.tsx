import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Toaster } from '@/components/ui/toaster';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from './redux-store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HelmetProvider>
      <Toaster />
      <App />
    </HelmetProvider>
  </Provider>
);
