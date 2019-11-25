import React from 'react';
import makeStyle from "@material-ui/core/styles/makeStyles";
import {Paper, Typography, CardMedia, TextField, Button} from "@material-ui/core";

export default()=>{
    const useStyle = makeStyle(theme=>({
        Container:{
            width:700,
            margin:'auto',
            height:800
        },root: {
            margin:'auto',
            width: '90%',
            '& > *': {
                margin: theme.spacing(1)
         },
            position:'relative',
            top:'10%',
            display:'flex',
            justifyContent:'space-between',
        },AnimalPicture:{
            width:170,
            height:170,
            border:'1px solid black'
        },ContainerInput:{
            width:'100%',
            margin:'auto',
            marginTop:'20px'
        },ContainerButton:{
            marginTop:'20px',
            float:'right',
            borderRadius:100,
            width:88
        }
    }));
    const Classes = useStyle();
    return (
            <Paper className={Classes.Container}>
                <Typography>반려 등록/수정</Typography>
                <form className={Classes.root}>
                    <div className={Classes.leftContainer}>
                        <CardMedia className={Classes.AnimalPicture}></CardMedia>
                    </div>
                    <div className={Classes.rightContainer}>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="email" label={"email"}variant="standard"></TextField>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="email" label={"email"}variant="standard"></TextField>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="email" label={"email"}variant="standard"></TextField>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="email" label={"email"}variant="standard"></TextField>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="email" label={"email"}variant="standard"></TextField>
                        <Button className = {Classes.ContainerButton}variant="contained" color="primary">등록</Button>
                    </div>
                </form>
            </Paper>
        )
}