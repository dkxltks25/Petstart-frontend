import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import { CardMedia,TextField, Typography, Link } from '@material-ui/core';
import Line from "../../Component/LineChart";
import { useQuery } from "react-apollo-hooks";
import { myPet } from "../Register/RegisterQuery";
export default ()=>{
    const useStyle = makeStyles(theme=>({
        Container:{
            width:1000,
            margin:'auto'
        },
        leftContainer:{
            width:800,
            float:'left',
        },
        AnimalInfo:{
            width:'95%',
            margin:'auto',
            marginTop:16
        },
        AnimalInfoTop:{
            width:'100%',
            display:'flex',
            justifyContent:'space-between'
        },
        AnimalTextWrap:{
            width:'80%'
        },
        AnimalText:{
            width:'95%',
            marginLeft:'20px',
            marginTop:'16px'
        },
        AnimalInfoBottom:{
            width:'100%',
        },
        HealthChart:{
            height:'300px'
        },
        rightContainer:{
            float:'right'
        },
        ParseInfo:{
           
        },
        AnimalPicture:{
            height:170,
            width:170,
            border:'1px solid black'
        },
        LinkWrap:{
            width:'100%',
            padding:"50px 20px 50px 20px"
        }
    }))

    const Classes = useStyle();
    const {data,loading} = useQuery(myPet);
    
    return(
        <div className={Classes.Container}>
            {!loading}
            {data &&
            data.myPets &&
            data.myPets.map(index=>console.log(index))}
            <Paper className={Classes.leftContainer}>
            {data &&
            data.myPets &&
            data.myPets.length === 1 ?(
                <div className={Classes.AnimalInfo}>
                <div className= {Classes.AnimalInfoTop}>
                    <CardMedia
                            className ={Classes.AnimalPicture}
                    /> 
                    <div className= {Classes.AnimalTextWrap}>
                        <TextField className = {Classes.AnimalText} id="outlined-basic" type ="email" label={"email"} variant="outlined"></TextField>
                        <TextField className = {Classes.AnimalText} id="outlined-basic" type ="email" label={"email"} variant="outlined"></TextField>
                        <TextField className = {Classes.AnimalText} id="outlined-basic" type ="email" label={"email"} variant="outlined"></TextField>
                        <TextField className = {Classes.AnimalText} id="outlined-basic" type ="email" label={"email"} variant="outlined"></TextField>
                        <TextField className = {Classes.AnimalText} id="outlined-basic" type ="email" label={"email"} variant="outlined"></TextField>
                    </div>
                </div>

                <div className = {Classes.AnimalInfoBottom}>
                <Line className = {Classes.HealthChart}></Line>
                </div>
            </div>
            ):(
                <div className ={Classes.LinkWrap}>
                    <Typography>
                        <Link href="#/Register">
                            정보를 등록하러 가시겠습니까?
                        </Link>
                    </Typography>
                </div>
            )}

                
            </Paper>
            <Paper className={Classes.rightContainer}>
                <div className={Classes.ParseInfo}>
                  <Paper></Paper>
                </div>
            </Paper>
        </div>
    )
};