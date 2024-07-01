import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/**
 * 
 * <BrowserRouter>: A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack
 * <MemoryRouter>: A <MemoryRouter> stores its locations internally in an array and does not interact with the browser's address bar. Useful in tests and non-browser environments like React Native.
 * <HashRouter>: A <HashRouter> stores the current location in the hash portion of the URL using the window.location.hash property. 
 * <NativeRouter>: A <NativeRouter> uses the Native URL implementation on React
 * <StaticRouter>: A <StaticRouter> can be used in server-side rendering to create a new router context for the request.
 * 
 */
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);