
import React from 'react'
import RegisterPresent from './RegisterPresent'
import useInput from "../../Hooks/useInput";
import {  useMutation } from 'react-apollo-hooks';
import { REGISTERPET } from './RegisterQuery';
import { toast } from 'react-toastify';

export default ({history})=>{
    const petname = useInput("");
    const species = useInput("");
    const sex = useInput("");
    const age = useInput("");
    const weight = useInput("");
    const height = useInput("");
    const deviceName = useInput("");

   
    const [RegistMutation] = useMutation(REGISTERPET,
        {
            variables:{
                name:petname.value,
                age:age.value,
                sex:sex.value,
                species:species.value,
                deviceName:deviceName.value,
                weight:weight.value,
                height:height.value
            }
        }
    )
    const onsubmit = async(e)=>{
        
        e.preventDefault();
        try{
            console.dir(RegistMutation);
            await RegistMutation();
            toast.success("등록 성공");
            history.push('/');
        }catch(e){
            console.log(e);
            toast.error("등록실패");
        }
        
    }
    return(
        <RegisterPresent 
        petname ={petname}
        species ={species}
        sex ={sex}
        age ={age}
        weight ={weight}
        height ={height}
        deviceName ={deviceName}
        onsubmit ={onsubmit}
        />
    )
}