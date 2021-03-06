import './index.css';
import store from './redax/redux-store';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = (state) => {
   // console.log(store);
   // debugger;
   ReactDOM.render(
      <React.StrictMode>
         <App state = {state}
         // changeLikes = {store.changeLikes.bind(store)} 
         dispatch = {store.dispatch.bind(store)}  
         />
      </React.StrictMode>,
      document.getElementById('root')
   );
};

rerenderEntireTree(store.getState());

store.subscribe(()=>{
   let state = store.getState();
   rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
