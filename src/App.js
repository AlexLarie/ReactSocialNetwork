import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer"
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
