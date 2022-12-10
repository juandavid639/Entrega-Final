import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Context from './Components/utils/global.context';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Context>
      <App/>
      </Context>
    </BrowserRouter>
  
)


