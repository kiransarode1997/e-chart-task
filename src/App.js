import './App.css';
import ReactECharts from 'echarts-for-react';
import data from "./db.json"
import { useEffect, useState } from 'react';

function App() {
  // const [intensity, setIntensity] = useState()
  

   
  
  var arr = data.map( (item)=> {
    return (item.Hue);
  });
  // console.log(arr);
  var arr1 = data.map( (item)=> {
    return (item['Color intensity']);
  });
  console.log(arr1);
  var arr2 = data.map( (item)=> {
    return (item.Alcohol);
  });
  // console.log(arr);
  var arr3 = data.map( (item)=> {
    return (item['Malic Acid']);
  });
  console.log(arr1);
  

   
  
  const options1 = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data:arr1,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data:arr,
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
    lables: {
     
    },
  };
  const options2 = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data:arr2,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data:arr3,
        type: 'bar',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
    lables: {
     
    },
  };
  return (
    <div className="App">
    <ReactECharts option={options1} />
    
    <ReactECharts option={options2} style={{marginTop:"10%"}}/>
    </div>
  );
}

export default App;
