import React,{useState} from 'react';
import AuthPresenter from "./AuthPresenter";
import useInput from '../../Hooks/useInput';
import {toast} from "react-toastify"
import { LOG_IN,LOCAL_LOG_IN, CREATE_ACCOUNT } from './AuthQueries';
import { useMutation } from 'react-apollo-hooks';

export default () =>{
    const email =useInput("");  
    const password = useInput("");
    const username = useInput("");
    const [action,setAction] = useState("LogIn");
    const [logInMutation] = useMutation(LOG_IN,{variables:{email:email.value,password:password.value}});    
    const [createAccountMutation] = useMutation(CREATE_ACCOUNT,{variables:{email:email.value,password:password.value,username:username.value,name:"Test"}});
    const CheckValue = (target,text) =>{
        if(target.value.length <= 4){
            toast.error(`${text}(이)가 빈칸이거나 형식에 맞지 않습니다`);
            return false;
        }else{
            return true
        }
    }
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN); 

    const onsubmit= async(e)=>{
        if(action === "LogIn"){
            if(CheckValue(email,"이메일")){
                if(CheckValue(password,"패스워드")){
                    try{
                        const {data} =  await logInMutation();
                        const {confirmSecret} = data;
                        console.log(confirmSecret);
                        if(confirmSecret === null || confirmSecret === undefined || confirmSecret === ""){
                            console.log(confirmSecret);
                            toast.error("존재하지 않는 계정, 비밀번호가 틀렸습니다");
                        }else{
                            localLogInMutation({variables:{token:confirmSecret}});
                            toast.success("로그인 성공");
                        }
                    }catch{
                        toast.error("로그인 실패");
                    }
                }
            }
        }else if(action === "SignUp"){
            if(CheckValue(email,"이메일")){
                if(CheckValue(password,"패스워드")){
                   if(CheckValue(username,"사용자명")){
                       try{
                           
                           console.log(email.value);
                           console.log(password.value);
                           console.log(username.value);
                            const {data:{createAccount}} = await createAccountMutation();
                            console.dir(createAccount);
                            if(createAccount){
                                toast.error("계정을 만들 수 없습니다");
                            }else{
                                toast.success("계정등록완료 로그인 해주세요");
                                setTimeout(()=>setAction("LogIn"),3000);
                            }
                       }catch(e){
                            console.log(e);
                            throw Error;

                       }
                   }
                }
        }
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


