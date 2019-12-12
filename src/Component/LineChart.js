import React from 'react';
import {Line} from 'react-chartjs-2';
import { useQuery } from 'react-apollo-hooks';
import { SELECTTEMP } from '../Routes/Main/MainQueries';
import _ from "loadsh";
import Loader from './Loader';

const ToMonth = (State,data,FirstData,LastData)=>{
  const FirstDate = new Date(FirstData).getMonth()+1;
  const LastDate = new Date(LastData);
  const LastDay = new Date(2019,FirstDate,0).getDate();
  const {selectTemp} = data;  
  const Test = selectTemp.filter((index)=>{
    const Month = new Date(index["createdAt"]).getMonth()+1;
    return Month === FirstDate;
  });
  const Test1 =_.groupBy(Test,(a)=> new Date(a["createdAt"]).getDate());
  console.log(Test1);
  let NowKey = 1;
  const DateTimeArray = [];

  for(let i = 1; i<=LastDay;i++){
    if(Test1[i] === undefined){
      DateTimeArray.push([0,i]);
    }else{
      let Count = 0;
      let Sum = 0;
      Test1[i].map(({Temp})=>{
        Count++;
        Sum+=Temp;
      });
      DateTimeArray.push([parseFloat((Sum/Count).toFixed(3)),i]);
    }
  }
  const label = [];
  const date = [];
   DateTimeArray.map(index=>{
      label.push(index[1]+"일");
      date.push(index[0]);
  })
  const GraphData = {
    labels: label,
    datasets: [
      {
        label: State,
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: date
      }
    ] 
  };
  return GraphData;
}
const toWeek = (State,data,FirstData,LastData)=>{
    const FirstDate = new Date(FirstData).getDay();
    const LastDate = new Date(LastData).getDay();
    const LastDay = new Date(2019,FirstDate,0).getDate();
    const {selectTemp} = data;  
    const Test = selectTemp.filter((index)=>{
      const Month = new Date(index["createdAt"]).getMonth()+1;
      return Month === FirstDate;
    });
    const Test1 =_.groupBy(Test,(a)=> new Date(a["createdAt"]).getDate());
    let NowKey = 1;
    const DateTimeArray = [];
  
    for(let i = FirstDate; i<=LastDate;i++){
      if(Test1[i] === undefined){
        DateTimeArray.push([0,i]);
      }else{
        let Count = 0;
        let Sum = 0;
        Test1[i].map(({Temp})=>{
          Count++;
          Sum+=Temp;
        });
        DateTimeArray.push([parseFloat((Sum/Count).toFixed(3)),i]);
      }
    }
    const label = [];
    const date = [];
     DateTimeArray.map(index=>{
        label.push(index[1]+"일");
        date.push(index[0]);
    })
    const GraphData = {
      labels: label,
      datasets: [
        {
          label: State,
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: date
        }
      ] 
    };
    return GraphData;
  
}
const toDay = (State,data,FirstData)=>{
    const FirstDate = new Date(FirstData).getMonth()+1;
    const NowDay = new Date(FirstData).getDate();
    const {selectTemp} = data;  
    const Test = selectTemp.filter((index)=>{
      const Month = new Date(index["createdAt"]).getMonth()+1;
      const Day = new Date(index["createdAt"]).getDate();
      console.log(Month,Day);
      return Month === FirstDate && Day === NowDay;
    });
    console.log(Test);
    const Test1 =_.groupBy(Test,(a)=> new Date(a["createdAt"]).getHours());
    let NowKey = 1;
    const DateTimeArray = [];
  
    for(let i = 1; i<=24;i++){
      if(Test1[i] === undefined){
        DateTimeArray.push([0,i]);
      }else{
        let Count = 0;
        let Sum = 0;
        Test1[i].map(({Temp})=>{
          Count++;
          Sum+=Temp;
        });
        DateTimeArray.push([parseFloat((Sum/Count).toFixed(3)),i]);
      }
    }
    const label = [];
    const date = [];
     DateTimeArray.map(index=>{
        label.push(index[1]+"시");
        date.push(index[0]);
    })
    const GraphData = {
      labels: label,
      datasets: [
        {
          label: State,
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: date
        }
      ] 
    };
    console.dir(GraphData);
    return GraphData;

}
const SetGraph = (State,data,FirstData,LastData)=>{
  if(State === "이번달 통계"){
    return ToMonth(State,data,FirstData,LastData);
  }
  if(State === "이번주 통계"){
    return toWeek(State,data,FirstData,LastData);
  }else{
    console.dir(toDay(State,data,FirstData));
    return toDay(State,data,FirstData)
  }

  
}

export default ({State,deviceName,FirstData,LastData})=>{
  const Status = State === "toDay" ? "오늘의 통계": State === "toWeek" ? "이번주 통계": "이번달 통계";
  const {data,loading} = useQuery(SELECTTEMP,{variables:{deviceName}});
  
 

  return(
        <div>
        <h2>{Status}</h2>
        {!loading ? (<Line data={SetGraph(Status,data,FirstData,LastData)} />) : (<Loader></Loader>)}
      </div>
    )
}