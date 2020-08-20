import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Foo from './App';
import * as serviceWorker from './serviceWorker';

/*function tick() {
  const element = (
    <div>
      
      <h1>Сейчас {new Date().toLocaleTimeString()}.</h1>
      <h2>А Ян Дектерёв всё ещё не продвинулся в Реакте за сегодня</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);*/










ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



if (module.hot) {
  module.hot.accept();
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
