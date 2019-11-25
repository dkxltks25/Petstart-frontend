import React from 'react';
import {ToastContainer,toast} from "react-toastify"
import {HashRouter as Router} from "react-router-dom";
import Routes from "./Router";
import Header from "./Header";
export default ()=>{
  const isLoggedIn = false; 
  return(
    <>
      <Router>
        <>
          <Header isLoggedIn = {isLoggedIn}/>
            <Routes isLoggedIn = {isLoggedIn}></Routes>

        </>
      </Router>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT}></ToastContainer>
    </>
  )
}
