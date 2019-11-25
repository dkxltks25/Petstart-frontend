import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import { CardMedia,TextField } from '@material-ui/core';
import Line from "../../Component/LineChart";
export default()=>{

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
        }
    }))

    const Classes = useStyle();
    return(
        <div className={Classes.Container}>
            <Paper className={Classes.leftContainer}>
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
            </Paper>
            <Paper className={Classes.rightContainer}>
                <div className={Classes.ParseInfo}>
                  <Paper></Paper>
                </div>
            </Paper>
        </div>
    )
};