import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';

import './assets/css/plugins/bootstrap.min.css'
import './assets/css/plugins/animate.min.css'
import './assets/css/plugins/fontawesome.css'
import './assets/css/plugins/modal-video.min.css'
import './assets/css/plugins/owl.carousel.css'
import './assets/css/plugins/stellarnav.css'
import './assets/css/plugins/slick.css'
import './assets/css/typography.css'
import './assets/css/buttons.css'
import './assets/css/inner.css'
import './assets/css/theme.css'
import './assets/css/header.css'
import './assets/css/footer.css'
import './assets/css/responsive.css'

import './assets/css/style.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
