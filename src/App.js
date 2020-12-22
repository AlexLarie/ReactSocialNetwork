import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer"
import './App.css';
import Dialogs from "./components/dialogs/Dialogs";
import './components/content/content.css';
import { BrowserRouter, Route } from "react-router-dom";
import News from './components/news/News';
import Musick from './components/musick/Musick';
import Settings from './components/settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Nav/>
        <div className = "content">
          <Route path='/profile' component={Content}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/news' component={News}/>
          <Route path='/musick' component={Musick}/>
          <Route path='/settings' component={Settings}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
