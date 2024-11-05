import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux'; // Fix: Import Provider from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@/state/api";

// Create the Redux store
const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

// Setup listeners for cache invalidation, refetch, etc.
setupListeners(store.dispatch);

// Render the application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Fix: Pass the store prop to Provider */}
      <App />
    </Provider>
  </StrictMode>
);
