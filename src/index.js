import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redax/state';

// let messagesData = [
//   {id: '1', message: 'Some text whot yqou write' , name : 'you', time : 'Today at 11:00'  },
//   {id: '2', message: 'Some text whot you  write' , name : 'Kristina', time : 'Today at 12:50'  },
//   {id: '3', message: 'Some text whot yowu write' , name : 'you', time : 'Today at 11:10'  },
//   {id: '4', message: 'Some text whot she answerSome text  whot she answerSome text whot she answerSome text whobt she ' , name : 'Kristina', time : 'Today at 11:50'  },
//   {id: '5', message: 'Some textr whot you write' , name : 'you', time : 'Today at 12:20'  },
//   {id: '6', message: 'Some ttext whot you write' , name : 'you', time : 'Today at 12:50'  },
//   {id: '7', message: 'Some text whot she answerSome text  whot she answerSome text whot she answerSome text whot she ' , name : 'Kristina', time : 'Today at 12:55'  },
//   {id: '8', message: 'Some tetbxt whot you write' , name : 'you', time : 'Today at 12:56' },
// ]

// let dialogsData = [
//   {id : "1",
//   name : "Kristina"},
//   {id : "2",
//   name : "Aliaksei"},
//   {id : "3",
//   name : "Kastus"},
//   {id : "4",
//   name : "Kirill"},
//   {id : "5",
//   name : "Andrey"},
//   {id : "6",
//   name : "Vadim"},
//   {id : "7",
//   name : "Vlad"},
// ]

// let postsData = [
//   { id: '1', name: 'You', text: 'Some text 1', likes: '12'},
//   { id: '2', name: 'You', text: 'Some text 2', likes: '24'},
//   { id: '3', name: 'You', text: 'Some text 3', likes: '28'},
//   { id: '4', name: 'You', text: 'Some text 4', likes: '12'},
//   { id: '5', name: 'You', text: 'Some text 5', likes: '24'},
// ]

ReactDOM.render(
  <React.StrictMode>
    <App state = {state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
