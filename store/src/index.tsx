import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { StoreProvider } from './app/context/StoreContext';
import App from './app/layout/App';
import './app/layout/styles.css'
import { store } from './app/store/configureStore';
import reportWebVitals from './reportWebVitals';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <StoreProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
function createBrowserHistory() {
  throw new Error('Function not implemented.');
}

