import React from 'react';
import makeStyle from "@material-ui/core/styles/makeStyles";
import {Paper, Typography, CardMedia, TextField, Button} from "@material-ui/core";

export default({
    petname,
    species,
    sex,
    age,
    weight,
    height,
    device,
    onsubmit 
})=>{
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
            display:'flex',
            justifyContent:'space-between',
        },
        Text:{
            textAlign:'center',
            padding:'40px 20px 40px 20px'
        },
        AnimalPicture:{
            width:170,
            height:200,
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
                <Typography className={Classes.Text}variant="h4" gutterBottom > 반려 등록/수정</Typography>
                <form onSubmit={onsubmit} className={Classes.root}>
                    <div className={Classes.leftContainer}>
                        <CardMedia className={Classes.AnimalPicture}>
                        </CardMedia>
                    </div>
                    <div className={Classes.rightContainer}>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="Text" label={"Name"} {...petname} variant="standard"></TextField>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="Text" label={"SPECICES"} {...species} variant="standard"></TextField>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="Text" label={"SEX"} {...sex} variant="standard"></TextField>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="Text" label={"PET AGE"} {...age} variant="standard"></TextField>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="Text" label={"WEIGHT"} {...weight} variant="standard"></TextField>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="Text" label={"HEIGHT"} {...height} variant="standard"></TextField>
                        <TextField className={Classes.ContainerInput} id="outlined-basic" type ="Text" label={"DEVICE-NUMBER"} {...device} variant="standard"></TextField>

                        <Button type="submit" className = {Classes.ContainerButton}variant="contained" color="primary">등록</Button>
                    </div>
                </form>
            </Paper>
        )
}