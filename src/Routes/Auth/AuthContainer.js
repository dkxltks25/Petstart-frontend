import React,{useState} from 'react';
import AuthPresenter from "./AuthPresenter";
import useInput from '../../Hooks/useInput';

export default () =>{
    const email =useInput("");  
    const password = useInput("");
    const username = useInput("");
    const [action,setAction] = useState("LogIn");
    console.log(action);
    const onsubmit= async(e)=>{
        if(action === "LogIn"){
            
        }else if(action === "SignUp"){

        }
    }
    return (
        <AuthPresenter 
        email={email}
        password={password}
        username={username}
        onsubmit={onsubmit}
        action={action}
        setAction={setAction}
        />
    )
}


