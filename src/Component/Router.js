import React from "react";
import {Route,Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "../Routes/Auth/index";
import Main from "../Routes/Main/index";
import Register from "../Routes/Register/index";
const LoggedInRouter = ()=>{
   
    return(
    <Switch>
       <Route exact path="/" component = {Main}></Route> 
       <RegistPet/>
    </Switch>
    )
}

export const RegistPet = ()=>(
    <Route path="/Register" component={Register}></Route>
)
const  LoggedOutRouter = ()=>(
    <Switch>
        <Route exact path="/" component = {Auth} ></Route>
    </Switch>
)


const AppRouter = ({isLoggedIn})=>{
    return(
    isLoggedIn ? (<LoggedInRouter />)  : <LoggedOutRouter /> 
    )
}
export default AppRouter;

AppRouter.propTypes={
    isLoggedIn:PropTypes.bool.isRequired
}
