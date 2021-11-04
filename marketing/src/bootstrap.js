import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount function to start the app
function mount(el) {
  ReactDOM.render(<App />, el);
}

// If we are in development and in isolation , call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('__marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container app, we need to export the mount function
export { mount };
