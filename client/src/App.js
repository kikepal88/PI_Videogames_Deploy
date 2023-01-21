import React from 'react';
import {Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Create from "./components/Create/Create";
import Header from './components/Header/Header';
import Detail from './components/Detail/Detail';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/videogame" component={Create}/>
      <Route path="/videogames/:id" component={Detail}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
