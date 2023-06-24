import React, { createContext, useReducer } from 'react'
import {Route,Routes} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import Signup from './components/Signup';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Contact from './components/Contact';
import ErrorPage from './components/Errorpage';
import Logout from './components/logout';
import { initialState,reducer } from './reducer/UseReducer';

  //1.ContextAPI
  export const UserContext=createContext();

const Routing=()=>{
  return(
    <Routes>

<Route exact path="/" element={<Home/>} />
<Route exact path="/about" element={<About/>} />
<Route exact path="/contact" element={<Contact/>} />
<Route exact path="/login" element={<Login/>} />

<Route exact path="/signup" element={<Signup/>} />
<Route exact path="/logout" element={<Logout/>} />
<Route  element={<ErrorPage/>} />
</Routes>
  )}

const App= ()=>{
  const [state,dispatch]=useReducer(reducer,initialState)
return (
   
   <>

   <UserContext.Provider value={{state,dispatch}}>
  <Navbar/>
  <Routing/>

</UserContext.Provider>


  
   </>
  );
}

export default App;
