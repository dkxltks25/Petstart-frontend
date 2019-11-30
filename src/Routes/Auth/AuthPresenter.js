import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles(theme => ({
  Container:{
        width:800,
        margin:'auto',
        height:600
    },
  root: {
        margin:'auto',
        width: '80%',
        '& > *': {
            margin: theme.spacing(1),
            width: '80%'
     },
        position:'relative',
        top:'25%'
    },
    Typo:{
        Fill: 'Solid rgba(0, 0, 0, 0.87)'
    }
}
));

export default ({
    email,
    onsubmit,
    action,
    setAction,
    password,
    username
})=>{
  const classes = useStyles();
  return (

    <Paper className={classes.Container}>
        {
            action === "LogIn"&&(
                <form className={classes.root} noValidate autoComplete="off">
                    <div className ={classes.Action} >
                        <Typography className={classes.Typo} variant="h3" gutterBottom >로그인</Typography>
                    </div>
                    <TextField id="outlined-basic" label={"email"} {...email} variant="outlined" />
                    <TextField id="outlined-basic" label={"password"} {...password} variant="outlined" />
                    <Button className={classes.Button} variant="contained" onClick = {onsubmit}color="primary">로그인</Button>
                </form>
            )
        } 
        {
            action === "SignUp" &&(
                <form className={classes.root} noValidate autoComplete="off">
                    <div className ={classes.Action} >
                        <Typography variant="h3" gutterBottom textAlign="center">회원가입</Typography>
                    </div>
                        <TextField id="outlined-basic" type ="email" label={"email"} {...email} variant="outlined" />
                        <TextField id="outlined-basic" type = "password"label={"password"} {...password} variant="outlined" />
                        <TextField id="outlined-basic" type = "text"label={"username"} {...username} variant="outlined" />
                        <Button className={classes.Button} variant="contained" onClick = {onsubmit}color="primary">회원가입</Button>
                </form>
            )
        }
        <div className = {classes.root}>
            {
                action === "LogIn" ?(
                    <Button color="primary" onClick = {()=>setAction("SignUp")}>아직 회원이 아니신가요?</Button>
                ):(
                    <Button color="primary" onClick = {()=>setAction("LogIn")}>이미 회원이신가요??</Button>
                )
                
            }
        </div>
    </Paper>
    
  );
}

