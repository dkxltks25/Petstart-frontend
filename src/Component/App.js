import React from 'react';
import {gql} from "apollo-boost";
import {useQuery} from "react-apollo-hooks";
import {ToastContainer,toast} from "react-toastify"
import {HashRouter as Router} from "react-router-dom";
import Routes from "./Router";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css"

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;
export default ()=>{
  const {data : {isLoggedIn}} = useQuery(QUERY);

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
