import React from "react";
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import { Typography, Link } from '@material-ui/core';
import Line from "../../Component/LineChart";
import { useQuery } from "react-apollo-hooks";
import { myPet } from "../Register/RegisterQuery";
import Loader from "../../Component/Loader.js";
import Grid from '@material-ui/core/Grid';
import {Tabs,Tab,Box} from "@material-ui/core";


import Speech from 'react-speech';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

export default ()=>{
    const [selectedFirstDate, setSelectedFirstDate] = React.useState(new Date());
    const [selectedLastDate, setSelectedLastDate] = React.useState(new Date());

    const handleFirstDateChange = date => {
        setSelectedFirstDate(date);
    };
    const handleLastDateChange = date => {
        setSelectedLastDate(date);
    };
    const [Tabvalue,TabsetValue] = React.useState();
    const TabhandleChange = (event,newValue)=>{
        TabsetValue(newValue);
    }
    

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
    if(!loading){
        console.log(data);
    }
    return(
        <div className={Classes.Container}>
            {loading === true ? <Loader/> : ( 
            <>
            <Paper className={Classes.leftContainer}>
            <Tabs
        value={Tabvalue}
        onChange={TabhandleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="오늘의 통계" />
        <Tab label="이번주 통계" />
        <Tab label="이번달 통계" />
      </Tabs>
      <TabPanel value={Tabvalue} index={0}>
            {data &&
            data.myPets &&
            data.myPets.length === 1 ? (

            <div className={Classes.AnimalInfo}>
                <div className = {Classes.AnimalInfoBottom}>
                    <Line State = "toDay" deviceName ={data.myPets[0].deviceName} className = {Classes.HealthChart} FirstData={selectedFirstDate} LastData={selectedLastDate}>
                    </Line>
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
            <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedFirstDate}
                onChange={handleFirstDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
                
            </Grid>
            </MuiPickersUtilsProvider>
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
            </TabPanel>
            <TabPanel value={Tabvalue} index={1}>
            {data &&
            data.myPets &&
            data.myPets.length === 1 ? (

            <div className={Classes.AnimalInfo}>
                <div className = {Classes.AnimalInfoBottom}>
                    <Line State = "toWeek" deviceName ={data.myPets[0].deviceName} className = {Classes.HealthChart} FirstData={selectedFirstDate} LastData={selectedLastDate}>
                    </Line>
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
            <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedFirstDate}
                onChange={handleFirstDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
                <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedLastDate}
                onChange={handleLastDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </Grid>
            </MuiPickersUtilsProvider>
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
            </TabPanel>    
            <TabPanel value={Tabvalue} index={2}>
            {data &&
            data.myPets &&
            data.myPets.length === 1 ? (

            <div className={Classes.AnimalInfo}>
                <div className = {Classes.AnimalInfoBottom}>
                    <Line State = "toMonth" deviceName ={data.myPets[0].deviceName} className = {Classes.HealthChart} FirstData={selectedFirstDate} LastData={selectedLastDate}>
                    </Line>
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
            <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedFirstDate}
                onChange={handleFirstDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
                <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedLastDate}
                onChange={handleLastDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </Grid>
            </MuiPickersUtilsProvider>
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
            </TabPanel>                    
            </Paper>
            
            <Paper className={Classes.rightContainer}>
                <div className={Classes.ParseInfo}>
                  <Paper>
                   
                  </Paper>
                </div>
            </Paper>
            </>
            )

            }
           
        </div>
    )
};