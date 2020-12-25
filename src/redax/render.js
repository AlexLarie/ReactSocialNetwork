import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import { addPost, newTextChange } from "./state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state} addPost = {addPost} newTextChange = {newTextChange}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};