import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

//ReactDOM.createRoot(document.getElementById('root'));


// const container = document.getElementById('root');
// if (container) {
//   const root = ReactDOM.createRoot(container);
//   root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// } else {
//   console.error("Root element not found");
// }


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//     <App/> 
  
      
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
