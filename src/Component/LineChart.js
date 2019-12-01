import React from 'react';
import {Line} from 'react-chartjs-2';
import { myPetIs } from '../Routes/Register/RegisterQuery';
import { useQuery } from 'react-apollo-hooks';
import { SELECTTEMP } from '../Routes/Main/MainQueries';
const Data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
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
      data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40]
    }
  ] 
};


export default ({deviceName})=>{
  const {data,loading} = useQuery(SELECTTEMP,{variables:{deviceName}});
  if(!loading){
    console.log(data);
  }
  return(
        <div>
        <h2>이번주 체온</h2>
        <Line data={Data} />
        <Line data={Data} />
        <Line data={Data} />
        <Line data={Data} />
      </div>
    )
}