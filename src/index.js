import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import rootStore from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={rootStore}>
    <React.StrictMode>
      <Routes>
        <App />
      </Routes>
    </React.StrictMode>
  </Provider>,
);
