// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

import Background from "./components/Background";
import "./scss/index.scss";
import Wrapper from "./sections/Wrapper";



function App(){
  return(
  <div className="main-container">
    <Background/>
    <div className="app">
      <Navbar/>
      <Wrapper/>
      <Footer/>

    </div>
  </div>

  )
}

export default App;