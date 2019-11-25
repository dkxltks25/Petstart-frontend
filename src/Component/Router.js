import React from "react";
import {Route,Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "../Routes/Auth/index";
import Main from "../Routes/Main/index";
import Register from "../Routes/Register/index";
const LoggedInRouter = ()=>(
    <Switch>
        <Route exact path="/" component = {Main}></Route>
        <Route path="/Register" component = {Register}></Route>
    </Switch>
)

const  LoggedOutRouter = ()=>(
    <Switch>
        <Route exact path="/" component = {Auth} ></Route>
    </Switch>
)

const AppRouter = ({isLoggedIn})=>{
    console.log(isLoggedIn);
    return(
    isLoggedIn ? (<LoggedInRouter/>)  : <LoggedOutRouter /> 
    )
}
export default AppRouter;

AppRouter.propTypes={
    isLoggedIn:PropTypes.bool.isRequired
}
