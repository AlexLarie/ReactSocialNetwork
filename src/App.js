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


function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Nav/>
        <div className = "content">
          <Route path='/profile' render={()=> <Content data = {props.state.profilePage} addPost = {props.addPost} newTextChange = {props.newTextChange}/>}/>
          <Route path='/dialogs' render={()=> <Dialogs data = {props.state.dialogsPage}/>}/>
          <Route path='/news' render={()=> <News/>}/>
          <Route path='/musick' render={()=> <Musick/>}/>
          <Route path='/settings' render={()=> <Settings/>}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
