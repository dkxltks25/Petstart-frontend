import React from "react";
import {Route,Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "../Routes/Auth/index";
import Main from "../Routes/Main/index";
import Register from "../Routes/Register/index";
import { useQuery } from "react-apollo-hooks";
import { myPet } from "../Routes/Register/RegisterQuery";
import ViewAnimal from "../Routes/ViewAnimal";
const LoggedInRouter = ()=>{
    const {data} = useQuery(myPet);
    
    return(
    <Switch>
        <Route exact path="/" component = {Main}></Route>
        
        { data && data.myPets && data.myPets.length === 0 ? (<RegistPet/>) : (<Route exeact path='/View' component={ViewAnimal}></Route>)}
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
